import { Link } from 'react-router-dom'
import SeoHelmet from '../components/SeoHelmet'
import Footer from '../components/Footer'
import { useT } from '../i18n/LanguageContext'

interface LegalPageProps {
  titleKey: string
  seoTitleKey: string
  path: string
  p1Key: string
  p2Key: string
}

function LegalLayout({ titleKey, seoTitleKey, path, p1Key, p2Key }: LegalPageProps) {
  const t = useT()

  return (
    <>
      <SeoHelmet title={t(seoTitleKey)} path={path} />
      <main className="bg-[var(--color-bg-primary)] pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-label)]">
            {t('legal.eyebrow')}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[var(--color-text-primary)]">
            {t(titleKey)}
          </h1>
          <div className="mt-8 space-y-4 text-[var(--color-text-secondary)]">
            <p>{t(p1Key)}</p>
            <p>{t(p2Key)}</p>
          </div>
          <Link
            to="/"
            className="mt-10 inline-flex text-sm font-semibold text-[var(--color-blue)] hover:underline"
          >
            ← {t('common.backToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function PrivacyPage() {
  return (
    <LegalLayout
      titleKey="legal.privacyTitle"
      seoTitleKey="seo.privacyTitle"
      path="/privacidad"
      p1Key="legal.privacyP1"
      p2Key="legal.privacyP2"
    />
  )
}

export function TermsPage() {
  return (
    <LegalLayout
      titleKey="legal.termsTitle"
      seoTitleKey="seo.termsTitle"
      path="/terminos"
      p1Key="legal.termsP1"
      p2Key="legal.termsP2"
    />
  )
}
