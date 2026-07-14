export const pricing = {
  eyebrow: 'Pricing',
  title: 'Plans, engineer reviews & QA docs',
  intro:
    'Pick a subscription, a certified engineer review, or the digital playbook. Prices in COP and USD with live conversion.',
  homeEyebrow: 'Pricing',
  homeTitle: 'Start selling quality today',
  homeIntro:
    'Unlock the analyzer report, subscribe to Pro, or book an engineer review. Shown in COP and USD.',
  homeAllPlans: 'See all plans',
  currencyLabel: 'Display currency',
  rateLoading: 'Updating USD → COP rate…',
  rateHint: '1 USD ≈ {{rate}} COP · {{source}}',
  rateLive: 'live rate',
  rateFallback: 'reference rate',
  featured: 'Recommended',
  perMonth: 'per month',
  oneTime: 'one-time',
  viewDetails: 'View details',
  buyNow: 'Buy',
  learnMore: 'Learn more',
  backToPricing: 'Back to pricing',
  backToProduct: 'Back to product',
  comparePlans: 'Compare plans',
  continueCheckout: 'Continue to checkout',
  checkoutSummary: 'Summary',
  checkoutEyebrow: 'Checkout',
  checkoutTitle: 'Confirm your order',
  checkoutIntro:
    'Payment shell: the button does not charge yet. When we wire a gateway, this flow stays in place.',
  paymentShellLabel: 'Simulated payment · {{currency}}',
  formName: 'Full name',
  formNamePlaceholder: 'Jane Doe',
  formEmail: 'Work email',
  formEmailPlaceholder: 'you@company.com',
  formCompany: 'Company (optional)',
  formCompanyPlaceholder: 'Acme Inc.',
  payShellCta: 'Pay {{price}} (coming soon)',
  shellThanksTitle: 'Interest recorded',
  shellThanksDesc:
    'We do not process payments yet. We will reach out when checkout goes live, or contact us from the Contact section.',
  shellNotice: 'Real payments coming soon — this is a commercial shell',
  offersCount: 'active offers',
  sectionSubscriptions: 'Subscriptions',
  sectionServices: 'Engineer review',
  sectionDigital: 'Document / digital product',
  sectionIntros: {
    subscription:
      'Ongoing FastQA access: automation, reporting, and support by plan.',
    service:
      'Sessions with engineers to validate, certify, and harden quality before production.',
    digital:
      'Playbook, full analyzer report unlock, and other assets to standardize QA on day one.',
  },
  categories: {
    subscription: 'Subscription',
    service: 'Service',
    digital: 'Digital',
  },
  enterpriseTitle: 'Need enterprise or a custom package?',
  enterpriseDesc:
    'SSO, SLAs, high execution volume, or a dedicated squad. We quote with no obligation.',
  enterpriseCta: 'Talk to sales',
  products: {
    starter: {
      name: 'Starter',
      blurb: 'For startups automating smoke tests and basic reports.',
      longDesc:
        'Entry plan to FastQA: limited monthly runs, results dashboard, and regression templates for one web product.',
      features: [
        'Up to 2 active projects',
        '500 runs / month',
        'HTML reports + CSV export',
        'Email support (48h)',
      ],
    },
    pro: {
      name: 'Pro',
      blurb: 'Most popular: CI/CD, more parallelism, and Slack alerts.',
      longDesc:
        'For teams shipping often. Wire pipelines, parallelize suites, and get alerts when staging or production breaks.',
      features: [
        'Up to 10 projects',
        '5,000 runs / month',
        'CI/CD (GitHub, GitLab)',
        'Slack / email alerts',
        'Priority support (24h)',
      ],
    },
    team: {
      name: 'Team',
      blurb: 'For squads: unlimited seats, roles, and shared workspace.',
      longDesc:
        'Scale FastQA across engineering: workspaces, roles, extended history, and a high run quota for multiple products.',
      features: [
        'Unlimited projects',
        '20,000 runs / month',
        'Roles & permissions',
        '12-month history',
        'Guided onboarding (1 session)',
      ],
    },
    review: {
      name: 'Certified review',
      blurb: 'Engineers validate your app, deliver findings, and a FastQA certificate.',
      longDesc:
        'Quality engineers review your product (functional, critical regression, release risk). Deliverable: prioritized report + FastQA review certificate.',
      features: [
        'Kickoff & scope within 48h',
        'Functional review + critical smoke',
        'Prioritized report (P0–P3)',
        '60-min walkthrough',
        'Digital FastQA certificate',
      ],
    },
    audit: {
      name: 'Express audit',
      blurb: '5-day diagnosis: QA gaps, test debt, and a roadmap.',
      longDesc:
        'Short audit of your QA strategy: coverage, pipelines, environments, and automation debt. Ideal before funding or go-live.',
      features: [
        'Delivery in ~5 business days',
        'QA maturity scorecard',
        '30/60/90-day roadmap',
        'Release checklist',
      ],
    },
    playbook: {
      name: 'FastQA Playbook',
      blurb: 'PDF pack: processes, templates, and quality-assurance checklists.',
      longDesc:
        'Ready-to-download QA playbook with case templates, definition of done, release checklist, and a guide to your first automated suite.',
      features: [
        'PDF + Notion/Docs templates',
        'Release checklist',
        'Bug severity matrix',
        'Smoke vs regression guide',
        'Minor updates for 6 months',
      ],
    },
    'unlock-report': {
      name: 'Unlock full report',
      blurb: 'All analyzer findings: P0–P3, secrets, auth risks, and a release checklist.',
      longDesc:
        'Unlock the full FastQA analyzer demo report: P0–P3 severity, hints of exposed secrets, vibe-coded auth risks, misconfigs (RLS/CORS), and an actionable release checklist. Ideal if you want detail without subscribing yet. Recurring alternative: Pro or Team plans.',
      features: [
        'Full report without blur',
        'Prioritized P0–P3 findings',
        'Secrets & auth hints',
        'Release checklist',
        'Upsell-ready to Pro/Team',
      ],
    },
  },
} as const
