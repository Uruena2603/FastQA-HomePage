/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  FALLBACK_USD_TO_COP,
  convertUsdToCop,
  fetchUsdToCop,
  type ExchangeRateSource,
} from '../lib/exchange-rate'

export type DisplayCurrency = 'USD' | 'COP'

const STORAGE_KEY = 'preferred-currency'

interface CurrencyContextValue {
  currency: DisplayCurrency
  setCurrency: (currency: DisplayCurrency) => void
  toggleCurrency: () => void
  usdToCop: number
  rateSource: ExchangeRateSource
  rateLoading: boolean
  formatPrice: (priceUsd: number) => string
  convert: (priceUsd: number) => number
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null)

function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount)
}

function formatCop(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<DisplayCurrency>(() => {
    if (typeof window === 'undefined') return 'COP'
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'USD' || saved === 'COP' ? saved : 'COP'
  })
  const [usdToCop, setUsdToCop] = useState(FALLBACK_USD_TO_COP)
  const [rateSource, setRateSource] = useState<ExchangeRateSource>('fallback')
  const [rateLoading, setRateLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    fetchUsdToCop(controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return
        setUsdToCop(result.usdToCop)
        setRateSource(result.source)
      })
      .finally(() => {
        if (!controller.signal.aborted) setRateLoading(false)
      })
    return () => controller.abort()
  }, [])

  const setCurrency = useCallback((next: DisplayCurrency) => {
    setCurrencyState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleCurrency = useCallback(() => {
    setCurrency(currency === 'COP' ? 'USD' : 'COP')
  }, [currency, setCurrency])

  const convert = useCallback(
    (priceUsd: number) => (currency === 'USD' ? priceUsd : convertUsdToCop(priceUsd, usdToCop)),
    [currency, usdToCop],
  )

  const formatPrice = useCallback(
    (priceUsd: number) => {
      if (currency === 'USD') return formatUsd(priceUsd)
      return formatCop(convertUsdToCop(priceUsd, usdToCop))
    },
    [currency, usdToCop],
  )

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      toggleCurrency,
      usdToCop,
      rateSource,
      rateLoading,
      formatPrice,
      convert,
    }),
    [
      currency,
      setCurrency,
      toggleCurrency,
      usdToCop,
      rateSource,
      rateLoading,
      formatPrice,
      convert,
    ],
  )

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}
