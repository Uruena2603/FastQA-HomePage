import { Link } from 'react-router-dom'
import { useT } from '../i18n/LanguageContext'
import SectionWrapper from './SectionWrapper'
import Button from './ui/Button'

export default function AnalyzerTeaser() {
  const t = useT()

  return (
    <SectionWrapper id="analyzer" className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
            {t('analyzer.teaserEyebrow')}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
            {t('analyzer.teaserTitle')}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
            {t('analyzer.teaserIntro')}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/analizar" variant="primary" className="!px-8 !py-3">
              {t('analyzer.teaserCta')}
            </Button>
            <Link
              to="/precios"
              className="text-sm font-semibold text-[var(--color-blue)] hover:underline"
            >
              {t('analyzer.plansCta')} →
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
