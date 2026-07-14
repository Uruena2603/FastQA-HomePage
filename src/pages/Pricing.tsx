import { Link } from 'react-router-dom'
import SeoHelmet from '../components/SeoHelmet'
import Footer from '../components/Footer'
import CurrencyToggle from '../components/pricing/CurrencyToggle'
import ProductCard from '../components/pricing/ProductCard'
import { PRICING_PRODUCTS, productsByCategory } from '../data/pricing'
import { useT } from '../i18n/LanguageContext'
import Button from '../components/ui/Button'

const SECTIONS = [
  { category: 'subscription' as const, titleKey: 'pricing.sectionSubscriptions' },
  { category: 'service' as const, titleKey: 'pricing.sectionServices' },
  { category: 'digital' as const, titleKey: 'pricing.sectionDigital' },
]

export default function PricingPage() {
  const t = useT()

  return (
    <>
      <SeoHelmet
        title={t('seo.pricingTitle')}
        description={t('seo.pricingDescription')}
        path="/precios"
      />
      <main className="bg-[var(--color-bg-primary)] pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
                {t('pricing.eyebrow')}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-5xl">
                {t('pricing.title')}
              </h1>
              <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
                {t('pricing.intro')}
              </p>
            </div>
            <CurrencyToggle />
          </div>

          <div className="mt-14 space-y-16">
            {SECTIONS.map(({ category, titleKey }) => {
              const items = productsByCategory(category)
              if (items.length === 0) return null
              return (
                <section key={category} aria-labelledby={`pricing-${category}`}>
                  <h2
                    id={`pricing-${category}`}
                    className="font-display text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl"
                  >
                    {t(titleKey)}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-[var(--color-text-secondary)]">
                    {t(`pricing.sectionIntros.${category}`)}
                  </p>
                  <div
                    className={`mt-8 grid gap-5 ${
                      items.length === 1
                        ? 'md:max-w-md'
                        : items.length === 2
                          ? 'md:grid-cols-2'
                          : 'md:grid-cols-2 lg:grid-cols-3'
                    }`}
                  >
                    {items.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          <div className="mt-20 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] px-6 py-10 text-center md:px-10">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
              {t('pricing.enterpriseTitle')}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-text-secondary)] md:text-base">
              {t('pricing.enterpriseDesc')}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button to="/#contact" variant="primary">
                {t('pricing.enterpriseCta')}
              </Button>
              <Button to="/" variant="ghost">
                {t('common.backToHome')}
              </Button>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-[var(--color-text-secondary)]">
            {t('pricing.shellNotice')} · {PRICING_PRODUCTS.length} {t('pricing.offersCount')}
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex text-sm font-semibold text-[var(--color-blue)] hover:underline"
          >
            ← {t('common.backToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
