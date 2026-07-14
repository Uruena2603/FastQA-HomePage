import { Brain, Check, GitMerge, RefreshCw, Zap } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import SpotlightCard from './react-bits/SpotlightCard'
import SectionWrapper from './SectionWrapper'

const services = [
  {
    id: 'automation',
    icon: RefreshCw,
    titleKey: 'home.serviceAutomationTitle',
    descKey: 'home.serviceAutomationDesc',
    benefits: [
      'home.serviceAutomationB1',
      'home.serviceAutomationB2',
      'home.serviceAutomationB3',
      'home.serviceAutomationB4',
    ],
  },
  {
    id: 'performance',
    icon: Zap,
    titleKey: 'home.servicePerfTitle',
    descKey: 'home.servicePerfDesc',
    benefits: [
      'home.servicePerfB1',
      'home.servicePerfB2',
      'home.servicePerfB3',
      'home.servicePerfB4',
    ],
  },
  {
    id: 'cicd',
    icon: GitMerge,
    titleKey: 'home.serviceCicdTitle',
    descKey: 'home.serviceCicdDesc',
    benefits: [
      'home.serviceCicdB1',
      'home.serviceCicdB2',
      'home.serviceCicdB3',
      'home.serviceCicdB4',
    ],
  },
  {
    id: 'consulting',
    icon: Brain,
    titleKey: 'home.serviceConsultTitle',
    descKey: 'home.serviceConsultDesc',
    benefits: [
      'home.serviceConsultB1',
      'home.serviceConsultB2',
      'home.serviceConsultB3',
      'home.serviceConsultB4',
    ],
  },
] as const

export default function Services() {
  const t = useT()

  return (
    <SectionWrapper id="services" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.servicesEyebrow')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('home.servicesTitle')}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
          {t('home.servicesIntro')}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <SpotlightCard
                key={service.id}
                spotlightColor="rgba(213, 92, 77, 0.22)"
                className="group"
              >
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-blue)]/15 text-[var(--color-blue-mid)] transition group-hover:bg-[var(--color-orange)]/20 group-hover:text-[var(--color-orange)]">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                    {t(service.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                    {t(service.descKey)}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.benefits.map((key) => (
                      <li
                        key={key}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-[var(--color-orange)]"
                          strokeWidth={2.5}
                        />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] hover:underline"
          >
            {t('home.servicesPricingCta')}
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
