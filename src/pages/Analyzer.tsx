import { AnimatePresence, motion } from 'framer-motion'
import { Lock, RotateCcw, ShieldAlert } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SeoHelmet from '../components/SeoHelmet'
import Button from '../components/ui/Button'
import {
  DEMO_FINDINGS,
  DEMO_GRADE,
  DEMO_SCORE,
  SCAN_STEP_KEYS,
  isValidAnalyzerTarget,
  type FindingSeverity,
} from '../data/analyzer-demo'
import { useT } from '../i18n/LanguageContext'

type Phase = 'idle' | 'scanning' | 'report'

const SEVERITY_CLASS: Record<FindingSeverity, string> = {
  P0: 'bg-[var(--color-orange)]/20 text-[var(--color-orange)]',
  P1: 'bg-[var(--color-orange)]/12 text-[var(--color-orange)]',
  P2: 'bg-[var(--color-blue)]/15 text-[var(--color-blue-mid)]',
  P3: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]',
}

export default function AnalyzerPage() {
  const t = useT()
  const [target, setTarget] = useState('')
  const [error, setError] = useState(false)
  const [phase, setPhase] = useState<Phase>('idle')
  const [stepIndex, setStepIndex] = useState(0)
  const [reportTarget, setReportTarget] = useState('')

  useEffect(() => {
    if (phase !== 'scanning') return

    const stepMs = 520
    const timers: number[] = []

    SCAN_STEP_KEYS.forEach((_, i) => {
      if (i === 0) return
      timers.push(
        window.setTimeout(() => {
          setStepIndex(i)
        }, i * stepMs),
      )
    })

    timers.push(
      window.setTimeout(() => {
        setPhase('report')
      }, SCAN_STEP_KEYS.length * stepMs + 400),
    )

    return () => timers.forEach((id) => window.clearTimeout(id))
  }, [phase])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const value = target.trim()
    if (!isValidAnalyzerTarget(value)) {
      setError(true)
      return
    }
    setError(false)
    setReportTarget(value)
    setStepIndex(0)
    setPhase('scanning')
  }

  const reset = () => {
    setPhase('idle')
    setStepIndex(0)
    setError(false)
  }

  return (
    <>
      <SeoHelmet
        title={t('seo.analyzerTitle')}
        description={t('seo.analyzerDescription')}
        path="/analizar"
      />
      <main className="bg-[var(--color-bg-primary)] pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
            {t('analyzer.eyebrow')}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            {t('analyzer.title')}
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] md:text-lg">
            {t('analyzer.intro')}
          </p>
          <p className="mt-3 font-mono text-xs leading-relaxed text-[var(--color-orange)]">
            {t('analyzer.vibeNote')}
          </p>

          <AnimatePresence mode="wait">
            {phase === 'idle' ? (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-10"
              >
                <form onSubmit={onSubmit} className="space-y-4">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      {t('analyzer.inputLabel')}
                    </span>
                    <input
                      value={target}
                      onChange={(e) => {
                        setTarget(e.target.value)
                        if (error) setError(false)
                      }}
                      className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] px-4 py-3 font-mono text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-orange)]"
                      placeholder={t('analyzer.inputPlaceholder')}
                      autoComplete="url"
                    />
                  </label>
                  {error ? (
                    <p className="text-sm text-[var(--color-orange)]">{t('analyzer.inputError')}</p>
                  ) : null}
                  <Button type="submit" variant="primary" className="!px-8 !py-3">
                    {t('analyzer.submit')}
                  </Button>
                </form>

                <div className="mt-12 border-t border-[var(--color-border-light)] pt-8">
                  <h2 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                    {t('analyzer.whatTitle')}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                    {t('analyzer.whatBody')}
                  </p>
                  <p className="mt-4 text-xs text-[var(--color-text-secondary)]">
                    {t('analyzer.disclaimer')}
                  </p>
                </div>
              </motion.div>
            ) : null}

            {phase === 'scanning' ? (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-10"
              >
                <p className="font-mono text-sm font-semibold text-[var(--color-text-primary)]">
                  {t('analyzer.analyzing')}
                </p>
                <p className="mt-1 truncate font-mono text-xs text-[var(--color-text-secondary)]">
                  {reportTarget}
                </p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-accent-cta)]"
                    initial={{ width: '8%' }}
                    animate={{
                      width: `${Math.min(100, ((stepIndex + 1) / SCAN_STEP_KEYS.length) * 100)}%`,
                    }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
                <ul className="mt-6 space-y-2">
                  {SCAN_STEP_KEYS.map((key, i) => (
                    <li
                      key={key}
                      className={`font-mono text-xs transition ${
                        i <= stepIndex
                          ? 'text-[var(--color-text-primary)]'
                          : 'text-[var(--color-text-secondary)]/50'
                      }`}
                    >
                      {i <= stepIndex ? '▸ ' : '· '}
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}

            {phase === 'report' ? (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-label)]">
                      {t('analyzer.reportEyebrow')}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                      {t('analyzer.reportFor')}:{' '}
                      <span className="font-mono text-[var(--color-text-primary)]">
                        {reportTarget}
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] hover:underline"
                  >
                    <RotateCcw size={14} />
                    {t('analyzer.scanAgain')}
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="min-w-[140px] rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] px-5 py-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-label)]">
                      {t('analyzer.scoreLabel')}
                    </p>
                    <p className="mt-1 font-display text-4xl font-bold text-[var(--color-text-primary)]">
                      {DEMO_SCORE}
                    </p>
                  </div>
                  <div className="min-w-[140px] rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] px-5 py-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-label)]">
                      {t('analyzer.gradeLabel')}
                    </p>
                    <p className="mt-1 font-display text-4xl font-bold text-[var(--color-orange)]">
                      {DEMO_GRADE}
                    </p>
                  </div>
                </div>

                <h2 className="mt-10 font-display text-2xl font-bold text-[var(--color-text-primary)]">
                  {t('analyzer.findingsTitle')}
                </h2>

                <ul className="mt-5 space-y-3">
                  {DEMO_FINDINGS.map((finding) => {
                    const title = t(`analyzer.findings.${finding.id}.title`)
                    const summary = t(`analyzer.findings.${finding.id}.summary`)
                    return (
                      <li
                        key={finding.id}
                        className="relative overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)]"
                      >
                        <div
                          className={`p-4 md:p-5 ${finding.locked ? 'select-none blur-[5px]' : ''}`}
                          aria-hidden={finding.locked}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide ${SEVERITY_CLASS[finding.severity]}`}
                            >
                              {finding.severity} · {t(`analyzer.severity.${finding.severity}`)}
                            </span>
                            <span className="rounded-full bg-[var(--color-bg-secondary)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                              {finding.locked
                                ? t('analyzer.lockedBadge')
                                : t('analyzer.freeBadge')}
                            </span>
                          </div>
                          <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-text-primary)]">
                            {title}
                          </h3>
                          <p className="mt-1.5 text-sm text-[var(--color-text-secondary)]">
                            {summary}
                          </p>
                        </div>

                        {finding.locked ? (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--color-bg-primary)]/55 px-4 text-center backdrop-blur-[1px]">
                            <Lock size={20} className="text-[var(--color-orange)]" />
                            <p className="text-xs font-medium text-[var(--color-text-primary)] md:text-sm">
                              {t('analyzer.lockedHint')}
                            </p>
                          </div>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-8 rounded-2xl border border-[var(--color-orange)]/35 bg-[var(--color-orange)]/10 px-5 py-6 text-center md:px-8">
                  <ShieldAlert className="mx-auto text-[var(--color-orange)]" size={28} />
                  <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                    {t('analyzer.disclaimer')}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <Button to="/checkout/unlock-report" variant="primary">
                      {t('analyzer.unlockCta')}
                    </Button>
                    <Button to="/precios" variant="ghost">
                      {t('analyzer.plansCta')}
                    </Button>
                  </div>
                </div>

                <Link
                  to="/"
                  className="mt-8 inline-flex text-sm font-semibold text-[var(--color-blue)] hover:underline"
                >
                  ← {t('common.backToHome')}
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  )
}
