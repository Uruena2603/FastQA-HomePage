export const pricing = {
  eyebrow: 'Monetización',
  title: 'Planes, revisiones y documentos QA',
  intro:
    'Elige suscripción, revisión certificada con ingenieros o el playbook digital. Precios en COP y USD con conversión en vivo.',
  homeEyebrow: 'Precios',
  homeTitle: 'Empieza a vender calidad hoy',
  homeIntro:
    'Desbloquea el informe del analizador, suscríbete a Pro o agenda una revisión con ingenieros. Todo en COP y USD.',
  homeAllPlans: 'Ver todos los planes',
  currencyLabel: 'Moneda de visualización',
  rateLoading: 'Actualizando tasa USD → COP…',
  rateHint: '1 USD ≈ {{rate}} COP · {{source}}',
  rateLive: 'tasa en vivo',
  rateFallback: 'tasa de referencia',
  featured: 'Recomendado',
  perMonth: 'por mes',
  oneTime: 'pago único',
  viewDetails: 'Ver detalle',
  buyNow: 'Comprar',
  learnMore: 'Más información',
  backToPricing: 'Volver a precios',
  backToProduct: 'Volver al producto',
  comparePlans: 'Comparar planes',
  continueCheckout: 'Continuar al pago',
  checkoutSummary: 'Resumen',
  checkoutEyebrow: 'Checkout',
  checkoutTitle: 'Confirma tu pedido',
  checkoutIntro:
    'Carcasa de pago: el botón aún no cobra. Cuando integremos pasarela, este flujo quedará listo.',
  paymentShellLabel: 'Pago simulado · moneda {{currency}}',
  formName: 'Nombre completo',
  formNamePlaceholder: 'María Pérez',
  formEmail: 'Correo de trabajo',
  formEmailPlaceholder: 'tu@empresa.com',
  formCompany: 'Empresa (opcional)',
  formCompanyPlaceholder: 'Acme SAS',
  payShellCta: 'Pagar {{price}} (próximamente)',
  shellThanksTitle: 'Interés registrado',
  shellThanksDesc:
    'Aún no procesamos pagos. Te contactaremos cuando el checkout esté activo, o escríbenos desde Contacto.',
  shellNotice: 'Pagos reales próximamente — esta es una carcasa comercial',
  offersCount: 'ofertas activas',
  sectionSubscriptions: 'Suscripciones',
  sectionServices: 'Revisión con ingenieros',
  sectionDigital: 'Documento / producto digital',
  sectionIntros: {
    subscription:
      'Acceso continuo a la plataforma FastQA: automatización, reportes y soporte según el plan.',
    service:
      'Sesiones con ingenieros para validar, certificar y endurecer tu calidad antes de producción.',
    digital:
      'Playbook, desbloqueo del informe del analizador y otros activos para estandarizar QA desde el día uno.',
  },
  categories: {
    subscription: 'Suscripción',
    service: 'Servicio',
    digital: 'Digital',
  },
  enterpriseTitle: '¿Necesitas enterprise o un paquete a medida?',
  enterpriseDesc:
    'SSO, SLAs, volúmenes altos de ejecución o un squad dedicado. Cotizamos sin compromiso.',
  enterpriseCta: 'Hablar con ventas',
  products: {
    starter: {
      name: 'Starter',
      blurb: 'Para startups que quieren automatizar smoke tests y reportes básicos.',
      longDesc:
        'Plan de entrada a FastQA: ejecuciones mensuales limitadas, panel de resultados y plantillas de regresión para un producto web.',
      features: [
        'Hasta 2 proyectos activos',
        '500 ejecuciones / mes',
        'Reportes HTML + export CSV',
        'Soporte por correo (48h)',
      ],
    },
    pro: {
      name: 'Pro',
      blurb: 'El plan más elegido: CI/CD, más paralelismo y alertas a Slack.',
      longDesc:
        'Para equipos que ya despliegan seguido. Integra pipelines, paraleliza suites y recibe alertas cuando algo se rompe en staging o producción.',
      features: [
        'Hasta 10 proyectos',
        '5.000 ejecuciones / mes',
        'Integración CI/CD (GitHub, GitLab)',
        'Alertas Slack / email',
        'Soporte prioritario (24h)',
      ],
    },
    team: {
      name: 'Team',
      blurb: 'Para squads: seats ilimitados, roles y workspace compartido.',
      longDesc:
        'Escala FastQA a toda la ingeniería: workspaces, roles, historial extendido y cupo alto de ejecuciones para varios productos.',
      features: [
        'Proyectos ilimitados',
        '20.000 ejecuciones / mes',
        'Roles y permisos',
        'Historial 12 meses',
        'Onboarding asistido 1 sesión',
      ],
    },
    review: {
      name: 'Revisión certificada',
      blurb: 'Ingenieros validan tu app, entregan findings y certificado FastQA.',
      longDesc:
        'Un equipo de quality engineers revisa tu producto (funcional, regresión crítica y riesgos de release). Entregable: informe priorizado + certificado de revisión FastQA.',
      features: [
        'Kickoff y alcance en 48h',
        'Revisión funcional + smoke crítico',
        'Informe priorizado (P0–P3)',
        'Sesión de walkthrough 60 min',
        'Certificado digital FastQA',
      ],
    },
    audit: {
      name: 'Auditoría express',
      blurb: 'Diagnóstico en 5 días: gaps de QA, deuda de tests y roadmap.',
      longDesc:
        'Auditoría corta para saber qué falta en tu estrategia de QA: cobertura, pipelines, ambientes y deuda de automatización. Ideal antes de un funding o un go-live.',
      features: [
        'Entrega en ~5 días hábiles',
        'Scorecard de madurez QA',
        'Roadmap 30/60/90 días',
        'Checklist de release',
      ],
    },
    playbook: {
      name: 'Playbook QA FastQA',
      blurb: 'Documento PDF: procesos, plantillas y checklist de quality assurance.',
      longDesc:
        'Producto digital listo para descargar: playbook de QA con plantillas de casos, definición de done, checklist de release y guía para armar tu primera suite automatizada.',
      features: [
        'PDF + plantillas Notion/Docs',
        'Checklist de release',
        'Matriz de severidad de bugs',
        'Guía smoke vs regresión',
        'Actualizaciones menores 6 meses',
      ],
    },
    'unlock-report': {
      name: 'Desbloquear informe completo',
      blurb: 'Todos los hallazgos del analizador: P0–P3, secretos, auth y checklist de release.',
      longDesc:
        'Desbloquea el informe demo completo del analizador FastQA: severidad P0–P3, indicios de secretos expuestos, riesgos de auth vibe-coded, misconfigs (RLS/CORS) y un checklist de release accionable. Ideal si quieres el detalle sin suscribirte aún. Alternativa recurrente: planes Pro o Team.',
      features: [
        'Informe completo sin blur',
        'Hallazgos priorizados P0–P3',
        'Indicios de secretos y auth',
        'Checklist de release',
        'Compatible con upsell a Pro/Team',
      ],
    },
  },
} as const
