export const analyzer = {
  eyebrow: 'Analizador',
  title: 'Analiza tu proyecto en segundos',
  intro:
    'Pega la URL de tu app o un repo `owner/repo`. Te mostramos un informe demo: unos hallazgos gratis y el resto bloqueados detrás de un pago o suscripción.',
  inputLabel: 'URL o repositorio',
  inputPlaceholder: 'https://tu-app.vercel.app o tu-org/tu-repo',
  inputError: 'Usa una URL http(s) válida o el formato owner/repo.',
  submit: 'Analizar proyecto',
  analyzing: 'Analizando…',
  disclaimer:
    'Informe de demostración (carcasa). El escaneo real llegará después; hoy simulamos findings para el flujo de venta.',
  whatTitle: '¿Qué mira FastQA?',
  whatBody:
    'Pensado para proyectos de ingeniería y apps hechas con vibe coding (Cursor, Lovable, Bolt, Copilot): superficie pública, dependencias, indicios de secretos, auth generado por IA y checklist de release.',
  vibeNote:
    'El código de la IA se ve limpio. ¿Lo leíste línea a línea antes de shipear?',
  steps: {
    fetch: 'Resolviendo objetivo…',
    surface: 'Revisando superficie pública…',
    deps: 'Chequeando dependencias…',
    auth: 'Buscando riesgos de auth…',
    report: 'Armando informe…',
  },
  reportEyebrow: 'Informe demo',
  reportFor: 'Objetivo',
  scoreLabel: 'Score FastQA',
  gradeLabel: 'Grade',
  findingsTitle: 'Hallazgos',
  freeBadge: 'Gratis',
  lockedBadge: 'Pro',
  lockedHint: 'Detalle bloqueado — desbloquea el informe o suscríbete',
  unlockCta: 'Desbloquear informe',
  plansCta: 'Ver planes',
  scanAgain: 'Analizar otro',
  severity: {
    P0: 'Crítico',
    P1: 'Alto',
    P2: 'Medio',
    P3: 'Bajo',
  },
  findings: {
    headers: {
      title: 'Headers de seguridad incompletos',
      summary:
        'Faltan o están débiles cabeceras como CSP / X-Frame-Options. Exposición típica en deploys rápidos.',
    },
    dependency: {
      title: 'Dependencia desactualizada con CVE conocido',
      summary:
        'Una librería del front está detrás de un parche de seguridad publicado. Actualizar reduce superficie de ataque.',
    },
    https: {
      title: 'Mejoras menores de transporte',
      summary:
        'HTTPS activo, pero conviene revisar HSTS y redirecciones canónicas antes del go-live.',
    },
    secrets: {
      title: 'Posible secreto en el bundle del cliente',
      summary:
        'Patrones compatibles con API keys / service roles embebidos en JS público — típico en apps vibe-coded.',
    },
    auth: {
      title: 'Auth generado por IA sin revisión línea a línea',
      summary:
        'Flujos de login/sesión con olor a plantilla Lovable/Cursor: valida sesiones, cookies y reset antes de producción.',
    },
    rls: {
      title: 'Riesgo de reglas RLS / BaaS abiertas',
      summary:
        'Indicios de políticas débiles en Supabase/Firebase. Sin RLS estricto, cualquiera puede leer o escribir datos.',
    },
    cors: {
      title: 'CORS permisivo en APIs',
      summary:
        'Orígenes demasiado abiertos en endpoints sensibles. Restringe a dominios de producción.',
    },
    release: {
      title: 'Checklist de release incompleto',
      summary:
        'Faltan smoke crítico, rollback y owner de QA. Desbloquea el checklist accionable completo.',
    },
  },
  teaserEyebrow: 'Analizador',
  teaserTitle: '¿Shippeaste con Cursor o Lovable?',
  teaserIntro:
    'Escanea tu URL o repo en segundos. Verás indicios gratis; el informe completo se desbloquea con un pago único o una suscripción.',
  teaserCta: 'Probar el analizador',
} as const
