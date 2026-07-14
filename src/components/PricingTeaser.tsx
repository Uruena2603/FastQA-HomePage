import { Link } from 'react-router-dom'
import { getProductById } from '../data/pricing'
import { HOME_PRICING_HIGHLIGHT_IDS } from '../i18n/navItems'
import { useT } from '../i18n/LanguageContext'
import CurrencyToggle from './pricing/CurrencyToggle'
import ProductCard from './pricing/ProductCard'
import SectionWrapper from './SectionWrapper'
import Button from './ui/Button'

export default function PricingTeaser() {
  const t = useT()
  const highlights = HOME_PRICING_HIGHLIGHT_IDS.map((id) => getProductById(id)).filter(
    (p): p is NonNullable<typeof p> => p != null,
  )

  return (
    <SectionWrapper id="pricing" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
              {t('pricing.homeEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
              {t('pricing.homeTitle')}
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
              {t('pricing.homeIntro')}
            </p>
          </div>
          <CurrencyToggle />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/precios" variant="primary" className="!px-8 !py-3">
            {t('pricing.homeAllPlans')}
          </Button>
          <Link
            to="/analizar"
            className="text-sm font-semibold text-[var(--color-blue)] hover:underline"
          >
            {t('analyzer.teaserCta')} →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
