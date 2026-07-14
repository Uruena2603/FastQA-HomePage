import { Link } from 'react-router-dom'
import { navItems } from '../i18n/navItems'
import { useT } from '../i18n/LanguageContext'
import Logo from './Logo'

export default function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border-light)] bg-[var(--color-navy)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo surface="dark" size="md" className="mb-4" />
          <p className="max-w-sm text-sm leading-relaxed text-white/70">{t('footer.tagline')}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-orange-soft)]">
            {t('footer.navigation')}
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ) : (
                  <a
                    href={`/${item.href}`}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-orange-soft)]">
            {t('footer.legal')}
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacidad" className="text-sm text-white/75 transition hover:text-white">
                {t('footer.privacy')}
              </Link>
            </li>
            <li>
              <Link to="/terminos" className="text-sm text-white/75 transition hover:text-white">
                {t('footer.terms')}
              </Link>
            </li>
            <li>
              <Link to="/analizar" className="text-sm text-white/75 transition hover:text-white">
                {t('nav.primaryCta')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{t('footer.rights', { year })}</p>
          <p>{t('footer.taglineShort')}</p>
        </div>
      </div>
    </footer>
  )
}
