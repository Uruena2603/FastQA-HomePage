/** Catálogo de monetización — precios base en USD. COP se deriva por FX. */

export type BillingInterval = 'month' | 'one_time'
export type ProductCategory = 'subscription' | 'service' | 'digital'

export interface PricingProduct {
  id: string
  category: ProductCategory
  /** Precio base en dólares estadounidenses */
  priceUsd: number
  interval: BillingInterval
  /** Destacar en la grilla (ej. plan recomendado) */
  featured?: boolean
  icon: 'rocket' | 'zap' | 'building' | 'shield' | 'search' | 'file'
}

/**
 * Precios genéricos de arranque (shell comercial).
 * Ajustar cuando haya pagos reales.
 */
export const PRICING_PRODUCTS: PricingProduct[] = [
  {
    id: 'starter',
    category: 'subscription',
    priceUsd: 49,
    interval: 'month',
    icon: 'rocket',
  },
  {
    id: 'pro',
    category: 'subscription',
    priceUsd: 149,
    interval: 'month',
    featured: true,
    icon: 'zap',
  },
  {
    id: 'team',
    category: 'subscription',
    priceUsd: 399,
    interval: 'month',
    icon: 'building',
  },
  {
    id: 'review',
    category: 'service',
    priceUsd: 1200,
    interval: 'one_time',
    featured: true,
    icon: 'shield',
  },
  {
    id: 'audit',
    category: 'service',
    priceUsd: 650,
    interval: 'one_time',
    icon: 'search',
  },
  {
    id: 'playbook',
    category: 'digital',
    priceUsd: 79,
    interval: 'one_time',
    icon: 'file',
  },
  {
    id: 'unlock-report',
    category: 'digital',
    priceUsd: 29,
    interval: 'one_time',
    featured: true,
    icon: 'search',
  },
]

export const PRODUCT_IDS = PRICING_PRODUCTS.map((p) => p.id)

export function getProductById(id: string): PricingProduct | undefined {
  return PRICING_PRODUCTS.find((p) => p.id === id)
}

export function productsByCategory(category: ProductCategory): PricingProduct[] {
  return PRICING_PRODUCTS.filter((p) => p.category === category)
}
