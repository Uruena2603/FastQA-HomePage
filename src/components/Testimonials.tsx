import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useT } from '../i18n/LanguageContext'
import SectionWrapper from './SectionWrapper'

const TESTIMONIAL_KEYS = [
  { id: '1', quoteKey: 'home.t1Quote', roleKey: 'home.t1Role', name: 'Carlos Méndez' },
  { id: '2', quoteKey: 'home.t2Quote', roleKey: 'home.t2Role', name: 'Ana Martínez' },
  { id: '3', quoteKey: 'home.t3Quote', roleKey: 'home.t3Role', name: 'Roberto Sánchez' },
] as const

export default function Testimonials() {
  const t = useT()
  const [active, setActive] = useState(0)
  const item = TESTIMONIAL_KEYS[active]

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIAL_KEYS.length)
    }, 5600)
    return () => window.clearInterval(id)
  }, [])

  return (
    <SectionWrapper id="testimonials" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.testimonialsEyebrow')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('home.testimonialsTitle')}
        </h2>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{t('home.testimonialsNote')}</p>

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.id + t(item.quoteKey)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] px-6 py-10 md:px-12"
            >
              <p className="font-display text-xl leading-relaxed text-[var(--color-text-primary)] md:text-2xl">
                “{t(item.quoteKey)}”
              </p>
              <footer className="mt-8">
                <p className="font-semibold text-[var(--color-text-primary)]">{item.name}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{t(item.roleKey)}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIAL_KEYS.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              aria-label={t('home.testimonialAria', { n: index + 1 })}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active
                  ? 'w-8 bg-[var(--color-orange)]'
                  : 'w-2.5 bg-[var(--color-border-light)] hover:bg-[var(--color-blue-soft)]'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
