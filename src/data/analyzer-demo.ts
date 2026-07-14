export type FindingSeverity = 'P0' | 'P1' | 'P2' | 'P3'

export interface DemoFinding {
  id: string
  severity: FindingSeverity
  locked: boolean
}

/** Informe demo fijo — carcasa UI (sin escaneo real). */
export const DEMO_SCORE = 62
export const DEMO_GRADE = 'C'

export const DEMO_FINDINGS: DemoFinding[] = [
  { id: 'headers', severity: 'P2', locked: false },
  { id: 'dependency', severity: 'P2', locked: false },
  { id: 'https', severity: 'P3', locked: false },
  { id: 'secrets', severity: 'P0', locked: true },
  { id: 'auth', severity: 'P0', locked: true },
  { id: 'rls', severity: 'P1', locked: true },
  { id: 'cors', severity: 'P1', locked: true },
  { id: 'release', severity: 'P1', locked: true },
]

export const SCAN_STEP_KEYS = [
  'analyzer.steps.fetch',
  'analyzer.steps.surface',
  'analyzer.steps.deps',
  'analyzer.steps.auth',
  'analyzer.steps.report',
] as const

const REPO_PATTERN = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/

/** Valida URL http(s) o patrón owner/repo. */
export function isValidAnalyzerTarget(raw: string): boolean {
  const value = raw.trim()
  if (!value) return false
  if (REPO_PATTERN.test(value)) return true
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}
