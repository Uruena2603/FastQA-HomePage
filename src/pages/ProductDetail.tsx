import { ArrowLeft, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SeoHelmet from '../components/SeoHelmet'
import Footer from '../components/Footer'
import CurrencyToggle from '../components/pricing/CurrencyToggle'
import Button from '../components/ui/Button'
import { useCurrency } from '../context/CurrencyContext'
import { getProductById } from '../data/pricing'
import { useT } from '../i18n/LanguageContext'

export default function ProductDetailPage() {
  const { productId = '' } = useParams()
  const product = getProductById(productId)
  const t = useT()
  const { formatPrice } = useCurrency()

  if (!product) {
    return <Navigate to="/precios" replace />
  }

  const features = t<string[]>(`pricing.products.${product.id}.features`)
  const featureList = Array.isArray(features) ? features : []
  const intervalLabel =
    product.interval === 'month' ? t('pricing.perMonth') : t('pricing.oneTime')

  return (
    <>
      <SeoHelmet
        title={t('seo.productTitle', {
          name: t(`pricing.products.${product.id}.name`),
        })}
        description={t(`pricing.products.${product.id}.blurb`)}
        path={`/precios/${product.id}`}
      />
      <main className="bg-[var(--color-bg-primary)] pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/precios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] hover:underline"
            >
              <ArrowLeft size={16} />
              {t('pricing.backToPricing')}
            </Link>
            <CurrencyToggle />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
                {t(`pricing.categories.${product.category}`)}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-5xl">
                {t(`pricing.products.${product.id}.name`)}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
                {t(`pricing.products.${product.id}.longDesc`)}
              </p>

              <ul className="mt-8 space-y-3">
                {featureList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] md:text-base"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--color-orange)]"
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] p-6 md:p-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-label)]">
                {t('pricing.checkoutSummary')}
              </p>
              <p className="mt-4 font-display text-4xl font-bold text-[var(--color-text-primary)]">
                {formatPrice(product.priceUsd)}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{intervalLabel}</p>
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {t('pricing.shellNotice')}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button to={`/checkout/${product.id}`} variant="primary" className="w-full !py-3">
                  {t('pricing.continueCheckout')}
                </Button>
                <Button to="/precios" variant="ghost" className="w-full !py-3">
                  {t('pricing.comparePlans')}
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
