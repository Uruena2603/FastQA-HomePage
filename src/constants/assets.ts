/** Catálogo de assets visuales de FastQA. */

export const BRAND_ASSETS = {
  /**
   * Logo oficial (icono + wordmark FastQA).
   * Fuente de verdad: `public/logo.png`
   */
  logo: '/logo.png',
  /** Alias explícito del lockup oficial */
  logoLockup: '/logo.png',
  /** Favicon / OG */
  favicon: '/logo.png',
  /**
   * Marks SVG legacy (no usar como marca principal).
   * Conservados solo por compatibilidad / referencia.
   */
  legacyMark: '/assets/logo.svg',
  legacyMarkWhite: '/assets/logo-white.svg',
  legacySvgRoot: '/logo.svg',
} as const

export const CLIENT_LOGOS = [
  { src: '/assets/client-logo-1.svg', alt: 'Cliente partner 1' },
  { src: '/assets/client-logo-2.svg', alt: 'Cliente partner 2' },
  { src: '/assets/client-logo-3.svg', alt: 'Cliente partner 3' },
  { src: '/assets/client-logo-4.svg', alt: 'Cliente partner 4' },
  { src: '/assets/clients/microsoft.svg', alt: 'Microsoft' },
  { src: '/assets/clients/google.svg', alt: 'Google' },
  { src: '/assets/clients/amazon.svg', alt: 'Amazon' },
  { src: '/assets/clients/ibm.svg', alt: 'IBM' },
  { src: '/assets/clients/oracle.svg', alt: 'Oracle' },
  { src: '/assets/clients/tesla.svg', alt: 'Tesla' },
] as const
