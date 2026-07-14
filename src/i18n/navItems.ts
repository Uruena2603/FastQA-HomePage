/** Navegación priorizada a venta (anchors del home + rutas donde aplica). */
export const navItems = [
  { key: 'analyzer', href: '#analyzer' },
  { key: 'pricing', href: '#pricing' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'team', href: '#team' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
] as const

/** Destacados en la sección #pricing del home (orden = impacto de venta). */
export const HOME_PRICING_HIGHLIGHT_IDS = ['unlock-report', 'pro', 'review'] as const
