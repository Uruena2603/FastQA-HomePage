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
import { dictionaries } from './dictionaries'

export type Locale = 'es' | 'en'

const STORAGE_KEY = 'preferred-locale'
const DEFAULT_LOCALE: Locale = 'es'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: <T = string>(key: string, vars?: Record<string, string | number>) => T
  isEn: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getNested(obj: unknown, path: string): unknown {
  if (!obj || !path) return undefined
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc == null || typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[key]
  }, obj)
}

function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    vars[key] != null ? String(vars[key]) : `{{${key}}}`,
  )
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'es' ? saved : DEFAULT_LOCALE
  })

  const applyLocale = useCallback((next: Locale) => {
    const resolved: Locale = next === 'en' ? 'en' : 'es'
    setLocaleState(resolved)
    localStorage.setItem(STORAGE_KEY, resolved)
    document.documentElement.lang = resolved
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const toggleLocale = useCallback(() => {
    applyLocale(locale === 'es' ? 'en' : 'es')
  }, [applyLocale, locale])

  const t = useCallback(
    <T = string>(key: string, vars?: Record<string, string | number>): T => {
      const dict = dictionaries[locale] || dictionaries.es
      const fallback = dictionaries.es
      const value = getNested(dict, key) ?? getNested(fallback, key) ?? key
      if (typeof value === 'string') return interpolate(value, vars) as T
      return value as T
    },
    [locale],
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale: applyLocale,
      toggleLocale,
      t,
      isEn: locale === 'en',
    }),
    [locale, applyLocale, toggleLocale, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function useT() {
  return useLanguage().t
}
