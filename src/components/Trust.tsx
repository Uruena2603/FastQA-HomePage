import { CLIENT_LOGOS } from '../constants/assets'
import { useT } from '../i18n/LanguageContext'
import LogoLoop from './react-bits/LogoLoop'
import SectionWrapper from './SectionWrapper'

export default function Trust() {
  const t = useT()

  return (
    <SectionWrapper
      id="trust"
      className="border-y border-[var(--color-border-light)] bg-[var(--color-bg-primary)] py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.trustLabel')}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-text-secondary)]">
          {t('home.trustCopy')}
        </p>
      </div>

      <div className="relative mt-8 h-[72px] w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
        <LogoLoop
          logos={[...CLIENT_LOGOS]}
          speed={80}
          direction="left"
          logoHeight={36}
          gap={48}
          pauseOnHover
          fadeOut
          fadeOutColor="var(--color-bg-primary)"
          ariaLabel={t('home.trustLabel')}
          className="h-full"
        />
      </div>
    </SectionWrapper>
  )
}
