import { useCurrency } from '../../context/CurrencyContext'
import { useT } from '../../i18n/LanguageContext'

export default function CurrencyToggle({ className = '' }: { className?: string }) {
  const { currency, setCurrency, rateLoading, usdToCop, rateSource } = useCurrency()
  const t = useT()

  return (
    <div className={`flex flex-col items-end gap-1 ${className}`}>
      <div
        role="group"
        aria-label={t('pricing.currencyLabel')}
        className="inline-flex rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] p-1"
      >
        {(['COP', 'USD'] as const).map((code) => {
          const active = currency === code
          return (
            <button
              key={code}
              type="button"
              onClick={() => setCurrency(code)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-bold tracking-wide transition ${
                active
                  ? 'bg-[var(--color-accent-cta)] text-[var(--color-accent-cta-text)] shadow-[var(--shadow-cta)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {code}
            </button>
          )
        })}
      </div>
      <p className="font-mono text-[10px] text-[var(--color-text-secondary)]">
        {rateLoading
          ? t('pricing.rateLoading')
          : t('pricing.rateHint', {
              rate: Math.round(usdToCop).toLocaleString('es-CO'),
              source: rateSource === 'fallback' ? t('pricing.rateFallback') : t('pricing.rateLive'),
            })}
      </p>
    </div>
  )
}
