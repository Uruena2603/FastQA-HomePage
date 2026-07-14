export const analyzer = {
  eyebrow: 'Analyzer',
  title: 'Scan your project in seconds',
  intro:
    'Paste your app URL or an `owner/repo`. You get a demo report: a few findings free, the rest locked behind a one-time unlock or subscription.',
  inputLabel: 'URL or repository',
  inputPlaceholder: 'https://your-app.vercel.app or your-org/your-repo',
  inputError: 'Use a valid http(s) URL or the owner/repo format.',
  submit: 'Analyze project',
  analyzing: 'Analyzing…',
  disclaimer:
    'Demo report (shell). Real scanning comes later; today we simulate findings for the sales flow.',
  whatTitle: 'What does FastQA look at?',
  whatBody:
    'Built for engineering projects and vibe-coded apps (Cursor, Lovable, Bolt, Copilot): public surface, dependencies, secret hints, AI-generated auth, and a release checklist.',
  vibeNote:
    'AI code looks clean. Did you read it line by line before shipping?',
  steps: {
    fetch: 'Resolving target…',
    surface: 'Checking public surface…',
    deps: 'Checking dependencies…',
    auth: 'Looking for auth risks…',
    report: 'Building report…',
  },
  reportEyebrow: 'Demo report',
  reportFor: 'Target',
  scoreLabel: 'FastQA score',
  gradeLabel: 'Grade',
  findingsTitle: 'Findings',
  freeBadge: 'Free',
  lockedBadge: 'Pro',
  lockedHint: 'Detail locked — unlock the report or subscribe',
  unlockCta: 'Unlock report',
  plansCta: 'See plans',
  scanAgain: 'Analyze another',
  severity: {
    P0: 'Critical',
    P1: 'High',
    P2: 'Medium',
    P3: 'Low',
  },
  findings: {
    headers: {
      title: 'Incomplete security headers',
      summary:
        'Missing or weak headers such as CSP / X-Frame-Options. Common on fast deploys.',
    },
    dependency: {
      title: 'Outdated dependency with a known CVE',
      summary:
        'A front-end library lags a published security patch. Updating shrinks attack surface.',
    },
    https: {
      title: 'Minor transport improvements',
      summary:
        'HTTPS is on, but review HSTS and canonical redirects before go-live.',
    },
    secrets: {
      title: 'Possible secret in the client bundle',
      summary:
        'Patterns consistent with API keys / service roles embedded in public JS — common in vibe-coded apps.',
    },
    auth: {
      title: 'AI-generated auth without line-by-line review',
      summary:
        'Login/session flows that smell like Lovable/Cursor templates: validate sessions, cookies, and reset before production.',
    },
    rls: {
      title: 'Weak RLS / open BaaS rules risk',
      summary:
        'Hints of weak Supabase/Firebase policies. Without strict RLS, anyone may read or write data.',
    },
    cors: {
      title: 'Permissive CORS on APIs',
      summary:
        'Overly open origins on sensitive endpoints. Restrict to production domains.',
    },
    release: {
      title: 'Incomplete release checklist',
      summary:
        'Missing critical smoke, rollback, and QA owner. Unlock the full actionable checklist.',
    },
  },
  teaserEyebrow: 'Analyzer',
  teaserTitle: 'Shipped with Cursor or Lovable?',
  teaserIntro:
    'Scan your URL or repo in seconds. See free hints; unlock the full report with a one-time payment or a subscription.',
  teaserCta: 'Try the analyzer',
} as const
