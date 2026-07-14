import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useT } from '../i18n/LanguageContext'
import LanguageToggle from '../i18n/LanguageToggle'
import { navItems } from '../i18n/navItems'
import Logo from './Logo'
import Button from './ui/Button'
import ThemeToggle from './ui/ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()
  const t = useT()
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'
  const overHero = onHome && !scrolled
  const heroDarkChrome = overHero && theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToHash = (href: string) => {
    setOpen(false)
    if (href.startsWith('#')) {
      if (!onHome) {
        navigate(`/${href}`)
        return
      }
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate(href)
  }

  const chromeToggle = heroDarkChrome
    ? 'border-white/30 bg-white/10 text-white hover:border-white/60'
    : ''

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border-light)] bg-[var(--color-nav-bg)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Logo size="sm" surface={heroDarkChrome ? 'dark' : 'light'} />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goToHash(item.href)}
              className={`rounded-full px-2.5 py-2 text-[13px] font-medium transition xl:px-3 xl:text-sm ${
                heroDarkChrome
                  ? 'text-white/85 hover:bg-white/10 hover:text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle className={chromeToggle} />
          <ThemeToggle className={chromeToggle} />
          <Button to="/analizar" variant="primary" className="!py-2">
            {t('nav.primaryCta')}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle className={chromeToggle} />
          <ThemeToggle className={chromeToggle} />
          <button
            type="button"
            aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              heroDarkChrome
                ? 'border-white/30 text-white'
                : 'border-[var(--color-border-light)] text-[var(--color-text-primary)]'
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-[var(--color-border-light)] bg-[var(--color-bg-primary)] lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goToHash(item.href)}
                  className="rounded-xl px-3 py-3 text-left text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <Button to="/analizar" className="mt-2 w-full">
                {t('nav.primaryCta')}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
