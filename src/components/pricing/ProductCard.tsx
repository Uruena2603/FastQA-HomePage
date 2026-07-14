import { Building2, FileText, Rocket, Search, ShieldCheck, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCurrency } from '../../context/CurrencyContext'
import type { PricingProduct } from '../../data/pricing'
import { useT } from '../../i18n/LanguageContext'
import SpotlightCard from '../react-bits/SpotlightCard'
import Button from '../ui/Button'

const ICONS: Record<PricingProduct['icon'], LucideIcon> = {
  rocket: Rocket,
  zap: Zap,
  building: Building2,
  shield: ShieldCheck,
  search: Search,
  file: FileText,
}

interface ProductCardProps {
  product: PricingProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useT()
  const { formatPrice } = useCurrency()
  const Icon = ICONS[product.icon]
  const intervalLabel =
    product.interval === 'month' ? t('pricing.perMonth') : t('pricing.oneTime')

  return (
    <SpotlightCard
      spotlightColor="rgba(213, 92, 77, 0.22)"
      className={`group relative h-full ${product.featured ? 'ring-2 ring-[var(--color-orange)]/50' : ''}`}
    >
      <div className="relative z-10 flex h-full flex-col">
        {product.featured ? (
          <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-orange)]/15 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-orange)]">
            {t('pricing.featured')}
          </span>
        ) : (
          <span className="mb-3 inline-flex h-6" aria-hidden />
        )}

        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-blue)]/15 text-[var(--color-blue-mid)] transition group-hover:bg-[var(--color-orange)]/20 group-hover:text-[var(--color-orange)]">
          <Icon size={22} strokeWidth={1.75} />
        </div>

        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-label)]">
          {t(`pricing.categories.${product.category}`)}
        </p>

        <h3 className="mt-2 font-display text-xl font-bold text-[var(--color-text-primary)]">
          {t(`pricing.products.${product.id}.name`)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {t(`pricing.products.${product.id}.blurb`)}
        </p>

        <div className="mt-6">
          <p className="font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {formatPrice(product.priceUsd)}
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{intervalLabel}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button to={`/precios/${product.id}`} variant="primary" className="w-full !py-2.5 sm:flex-1">
            {t('pricing.viewDetails')}
          </Button>
          <Button
            to={`/checkout/${product.id}`}
            variant="ghost"
            className="w-full !py-2.5 sm:flex-1"
          >
            {t('pricing.buyNow')}
          </Button>
        </div>

        <Link
          to={`/precios/${product.id}`}
          className="mt-3 text-center text-xs font-medium text-[var(--color-blue)] hover:underline"
        >
          {t('pricing.learnMore')}
        </Link>
      </div>
    </SpotlightCard>
  )
}
