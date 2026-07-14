/** Tasa de respaldo USD→COP (aprox. mercado 2026) si falla la API. */
export const FALLBACK_USD_TO_COP = 4100

const OPEN_ER_URL = 'https://open.er-api.com/v6/latest/USD'
const FRANKFURTER_V2_URL = 'https://api.frankfurter.dev/v2/rate/USD/COP'

export type ExchangeRateSource = 'frankfurter' | 'open-er-api' | 'fallback'

export interface ExchangeRateResult {
  usdToCop: number
  source: ExchangeRateSource
  fetchedAt: string
}

async function fetchOpenErApi(signal?: AbortSignal): Promise<number | null> {
  try {
    const res = await fetch(OPEN_ER_URL, { signal })
    if (!res.ok) return null
    const data = (await res.json()) as { rates?: { COP?: number } }
    const rate = data.rates?.COP
    return typeof rate === 'number' && rate > 0 ? rate : null
  } catch {
    return null
  }
}

async function fetchFrankfurter(signal?: AbortSignal): Promise<number | null> {
  try {
    const res = await fetch(FRANKFURTER_V2_URL, { signal })
    if (!res.ok) return null
    const data = (await res.json()) as { rate?: number }
    return typeof data.rate === 'number' && data.rate > 0 ? data.rate : null
  } catch {
    return null
  }
}

/** Obtiene USD→COP en vivo; cae a fallback si ambas APIs fallan. */
export async function fetchUsdToCop(signal?: AbortSignal): Promise<ExchangeRateResult> {
  const openEr = await fetchOpenErApi(signal)
  if (openEr != null) {
    return {
      usdToCop: openEr,
      source: 'open-er-api',
      fetchedAt: new Date().toISOString(),
    }
  }

  const frankfurter = await fetchFrankfurter(signal)
  if (frankfurter != null) {
    return {
      usdToCop: frankfurter,
      source: 'frankfurter',
      fetchedAt: new Date().toISOString(),
    }
  }

  return {
    usdToCop: FALLBACK_USD_TO_COP,
    source: 'fallback',
    fetchedAt: new Date().toISOString(),
  }
}

export function convertUsdToCop(usd: number, rate: number): number {
  return Math.round(usd * rate)
}
