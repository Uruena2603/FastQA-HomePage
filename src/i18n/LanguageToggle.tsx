import { useLanguage } from './LanguageContext'

/** Toggle ES ↔ EN — mismo patrón que Prosavis-Web (`LanguageToggle`). */
export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, toggleLocale, t } = useLanguage()
  const nextLabel = locale === 'es' ? 'EN' : 'ES'

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t('common.languageToggleAria')}
      title={t('common.languageToggleTitle')}
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-card)] px-2.5 text-xs font-bold tracking-wide text-[var(--color-text-primary)] transition hover:border-[var(--color-blue-mid)] ${className}`}
    >
      <span aria-hidden="true">{nextLabel}</span>
    </button>
  )
}
