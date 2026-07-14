import { BRAND_ASSETS } from '../constants/assets'

interface LogoProps {
  className?: string
  /** Tamaño del lockup oficial (incluye wordmark). */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * `dark` = fondo oscuro (hero/footer). El PNG oficial se muestra sobre
   * una placa clara para preservar contraste de la marca real.
   * `light` = superficies claras (navbar scrolled, etc.).
   */
  surface?: 'light' | 'dark'
}

const sizeClass: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-16 md:h-20',
  xl: 'h-24 md:h-28',
}

export default function Logo({ className = '', size = 'md', surface = 'light' }: LogoProps) {
  const img = (
    <img
      src={BRAND_ASSETS.logo}
      alt="FastQA"
      width={280}
      height={200}
      className={`${sizeClass[size]} w-auto object-contain`}
    />
  )

  return (
    <a
      href="/#hero"
      className={`inline-flex items-center ${className}`}
      aria-label="FastQA inicio"
    >
      {surface === 'dark' ? (
        <span className="inline-flex items-center rounded-2xl bg-white/95 px-3 py-1.5 shadow-[0_8px_28px_rgb(0_0_0_/0.25)] ring-1 ring-white/40">
          {img}
        </span>
      ) : (
        img
      )}
    </a>
  )
}
