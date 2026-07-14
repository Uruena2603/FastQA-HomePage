import { BarChart3, Rocket, Search, Users } from 'lucide-react'
import { BRAND_ASSETS } from '../constants/assets'
import { useT } from '../i18n/LanguageContext'
import SectionWrapper from './SectionWrapper'

const values = [
  { id: 'quality', icon: Search, titleKey: 'home.valueQualityTitle', descKey: 'home.valueQualityDesc' },
  { id: 'innovation', icon: Rocket, titleKey: 'home.valueInnovationTitle', descKey: 'home.valueInnovationDesc' },
  { id: 'collab', icon: Users, titleKey: 'home.valueCollabTitle', descKey: 'home.valueCollabDesc' },
  { id: 'data', icon: BarChart3, titleKey: 'home.valueDataTitle', descKey: 'home.valueDataDesc' },
] as const

const stats = [
  { value: '98%', labelKey: 'home.statSatisfaction' },
  { value: '+200', labelKey: 'home.statProjects' },
  { value: '5+', labelKey: 'home.statYears' },
] as const

export default function About() {
  const t = useT()

  return (
    <SectionWrapper id="about" className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.aboutEyebrow')}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('home.aboutTitle')}
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            <p>{t('home.aboutP1')}</p>
            <p>{t('home.aboutP2')}</p>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.labelKey}
                  className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-[var(--color-blue-mid)] md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)] md:text-sm">
                    {t(stat.labelKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="absolute inset-8 rounded-full bg-[var(--color-blue)]/20 blur-3xl" />
            <div className="absolute inset-12 rounded-full bg-[var(--color-orange)]/15 blur-2xl" />
            <img
              src={BRAND_ASSETS.logo}
              alt="FastQA"
              className="relative z-10 w-full max-w-xs drop-shadow-[0_20px_60px_rgba(34,62,84,0.25)]"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
            {t('home.aboutValuesTitle')}
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.id}
                  className="group rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] transition group-hover:bg-[var(--color-orange)]/15 group-hover:text-[var(--color-orange)]">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h4 className="font-semibold text-[var(--color-text-primary)]">{t(value.titleKey)}</h4>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{t(value.descKey)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
