import { useT } from '../i18n/LanguageContext'
import SectionWrapper from './SectionWrapper'

const steps = [
  { id: 'discover', titleKey: 'home.method1Title', descKey: 'home.method1Desc' },
  { id: 'automate', titleKey: 'home.method2Title', descKey: 'home.method2Desc' },
  { id: 'scale', titleKey: 'home.method3Title', descKey: 'home.method3Desc' },
] as const

export default function Method() {
  const t = useT()

  return (
    <SectionWrapper id="method" className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.methodEyebrow')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('home.methodTitle')}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
          {t('home.methodIntro')}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6"
            >
              <span className="font-display text-4xl font-bold text-[var(--color-orange)]/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-text-primary)]">
                {t(step.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
