import { ArrowLeft, CreditCard, Lock } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SeoHelmet from '../components/SeoHelmet'
import Footer from '../components/Footer'
import CurrencyToggle from '../components/pricing/CurrencyToggle'
import Button from '../components/ui/Button'
import { useCurrency } from '../context/CurrencyContext'
import { getProductById } from '../data/pricing'
import { useT } from '../i18n/LanguageContext'

export default function CheckoutPage() {
  const { productId = '' } = useParams()
  const product = getProductById(productId)
  const t = useT()
  const { formatPrice, currency } = useCurrency()
  const [submitted, setSubmitted] = useState(false)

  if (!product) {
    return <Navigate to="/precios" replace />
  }

  const intervalLabel =
    product.interval === 'month' ? t('pricing.perMonth') : t('pricing.oneTime')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SeoHelmet
        title={t('seo.checkoutTitle', {
          name: t(`pricing.products.${product.id}.name`),
        })}
        description={t('seo.checkoutDescription')}
        path={`/checkout/${product.id}`}
      />
      <main className="bg-[var(--color-bg-primary)] pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={`/precios/${product.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] hover:underline"
            >
              <ArrowLeft size={16} />
              {t('pricing.backToProduct')}
            </Link>
            <CurrencyToggle />
          </div>

          <p className="mt-10 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
            {t('pricing.checkoutEyebrow')}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            {t('pricing.checkoutTitle')}
          </h1>
          <p className="mt-3 text-[var(--color-text-secondary)]">{t('pricing.checkoutIntro')}</p>

          <div className="mt-8 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-label)]">
                  {t(`pricing.categories.${product.category}`)}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-[var(--color-text-primary)]">
                  {t(`pricing.products.${product.id}.name`)}
                </h2>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{intervalLabel}</p>
              </div>
              <p className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                {formatPrice(product.priceUsd)}
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-[var(--color-orange)]/40 bg-[var(--color-orange)]/10 px-6 py-8 text-center">
              <Lock className="mx-auto text-[var(--color-orange)]" size={28} />
              <h2 className="mt-4 font-display text-xl font-bold text-[var(--color-text-primary)]">
                {t('pricing.shellThanksTitle')}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {t('pricing.shellThanksDesc')}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button to="/precios" variant="primary">
                  {t('pricing.backToPricing')}
                </Button>
                <Button to="/#contact" variant="ghost">
                  {t('pricing.enterpriseCta')}
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 space-y-5 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 md:p-8"
            >
              <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <CreditCard size={18} className="text-[var(--color-orange)]" />
                <span>{t('pricing.paymentShellLabel', { currency })}</span>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                  {t('pricing.formName')}
                </span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-orange)]"
                  placeholder={t('pricing.formNamePlaceholder')}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                  {t('pricing.formEmail')}
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-orange)]"
                  placeholder={t('pricing.formEmailPlaceholder')}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                  {t('pricing.formCompany')}
                </span>
                <input
                  name="company"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-orange)]"
                  placeholder={t('pricing.formCompanyPlaceholder')}
                />
              </label>

              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {t('pricing.shellNotice')}
              </p>

              <Button type="submit" variant="primary" className="w-full !py-3">
                {t('pricing.payShellCta', { price: formatPrice(product.priceUsd) })}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
