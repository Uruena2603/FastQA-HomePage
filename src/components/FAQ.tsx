import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLanguage, useT } from '../i18n/LanguageContext'
import { buildMailtoDemoUrl } from '../constants/social'
import SectionWrapper from './SectionWrapper'
import Button from './ui/Button'

interface FaqEntry {
  q: string
  a: string
}

export default function FAQ() {
  const t = useT()
  const { locale } = useLanguage()
  const items = t<FaqEntry[]>('faq.items')
  const [openIndex, setOpenIndex] = useState(0)

  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items])

  return (
    <SectionWrapper id="faq" className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.faqEyebrow')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('home.faqTitle')}
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">{t('home.faqIntro')}</p>

        <div key={locale} className="mt-10 space-y-3">
          {safeItems.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={`${locale}-${index}`}
                className="overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-[var(--color-text-primary)]">{item.q}</span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] transition ${
                      open ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[var(--color-text-secondary)]">{t('home.faqCta')}</p>
          <Button href={buildMailtoDemoUrl('faq')}>{t('common.contactUs')}</Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
