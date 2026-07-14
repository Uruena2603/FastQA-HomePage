import { m } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  animated?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined }

type ButtonAsLink = ButtonBaseProps & {
  href: string
  external?: boolean
  to?: undefined
} & Omit<ButtonHTMLAttributes<HTMLAnchorElement>, 'href'>

type ButtonAsRouterLink = ButtonBaseProps & {
  to: string
  href?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent-cta)] text-[var(--color-accent-cta-text)] shadow-[var(--shadow-cta)] hover:brightness-110',
  secondary:
    'bg-transparent border-2 border-[var(--color-hero-btn-secondary-border)] text-[var(--color-hero-btn-secondary-text)] hover:bg-[var(--color-hero-btn-secondary-hover)]',
  ghost:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-light)] hover:bg-[var(--color-bg-secondary)]',
}

function getClasses(variant: ButtonVariant, className: string) {
  return `inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 rounded-full px-6 py-2.5 ${variantClasses[variant]} ${className}`
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', animated = true } = props
  const classes = getClasses(variant, className)

  const motionProps = animated
    ? { whileHover: { scale: 1.04, y: -2 }, whileTap: { scale: 0.97 } }
    : {}

  if ('to' in props && props.to) {
    return (
      <m.div className="inline-flex" {...motionProps}>
        <Link to={props.to} className={classes}>
          {children}
        </Link>
      </m.div>
    )
  }

  if ('href' in props && props.href) {
    const { href, external, onClick } = props as ButtonAsLink
    return (
      <m.div className="inline-flex" {...motionProps}>
        <a
          href={href}
          className={classes}
          onClick={onClick}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      </m.div>
    )
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton
  return (
    <m.button type={type} className={classes} onClick={onClick} disabled={disabled} {...motionProps}>
      {children}
    </m.button>
  )
}
