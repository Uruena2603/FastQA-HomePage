export const team = {
  eyebrow: 'Equipo',
  title: 'Ingenieros detrás de la certificación',
  intro:
    'Perfiles públicos de los principales ingenieros que impulsan FastQA: calidad en el SDLC, automatización de pruebas, entrega de producto y aseguramiento de seguridad — la base de nuestras garantías y del certificado digital.',
  contributionLabel: 'Aporte a certificación y garantías',
  experienceLabel: 'Experiencia clave',
  expertiseLabel: 'Experticia',
  educationLabel: 'Formación',
  members: {
    nicolas: {
      fullName: 'Nicolás Ceballos Brito',
      role: 'CTO · Prosavis',
      fastQaRole: 'Ingeniería de producto y calidad en el SDLC',
      headline:
        'Ingeniero en Sistemas y Telecomunicaciones · Full-stack, datos/IA y liderazgo de producto',
      bio: 'Ingeniero en Sistemas y Telecomunicaciones (UCP, 2021–2025) con experiencia en software, análisis de datos e IA. Como CTO de Prosavis dirige desarrollo, estrategia y lanzamiento de la plataforma móvil de servicios en Colombia: equipo de producto, roadmap, marketing digital y partnerships. También es Cross-Platform Mobile Developer en Neacsu Horizont Ventures y pasó por el AI Engineer Training Venture Studio (Modin.ai / Teilur.ai). Semillero Industria 4.0 — Testing Automatizado (2024), representante estudiantil en el Consejo Académico (2023–2025) y participante del XXIX Verano de Investigación del Pacífico.',
      education:
        'Ingeniería de Sistemas y Telecomunicaciones — Universidad Católica de Pereira (2021–2025). Semillero Coders · Consejo Académico · Semillero Testing Automatizado.',
      contribution:
        'Prácticas de QA en el ciclo de vida, CI/CD y liderazgo de producto orientado a releases confiables detrás de las garantías FastQA.',
      experience: [
        {
          role: 'CTO',
          company: 'Prosavis',
          period: 'Jul 2025 – Presente',
          highlight:
            'Dirige desarrollo, estrategia y lanzamiento; gestiona equipo de producto, roadmap y partnerships.',
        },
        {
          role: 'Cross-Platform Mobile Developer',
          company: 'Neacsu Horizont Ventures',
          period: 'Jul 2025 – Presente',
          highlight:
            'Ciclo de vida completo: arquitectura, Flutter/React Native, APIs, CI/CD y testing automatizado.',
        },
        {
          role: 'AI Engineer Training · Venture Studio',
          company: 'Modin.ai / Teilur.ai',
          period: 'Mar – Ago 2025',
          highlight: 'MVPs impulsados por GenAI en entorno venture studio.',
        },
      ],
    },
    'juan-alejandro': {
      fullName: 'Juan Alejandro Urueña Serna',
      role: 'Owner · FastQA-HomePage',
      fastQaRole: 'Full-stack y automatización de pruebas',
      headline:
        'Ing. Sistemas y Telecomunicaciones · Full-stack (Python/React) · CRM, funnels, datos e IA',
      bio: 'Ingeniero de Sistemas y Telecomunicaciones (UCP) con foco en soluciones digitales escalables: full-stack, automatización, CRM/funnels y datos/IA. Owner del repositorio FastQA-HomePage. Ha construido embudos digitales (landing → captura → emails → venta) con SEO básico y Meta Pixel. Practica QA automatizado con Cypress y Selenium, y ha diseñado pipelines y modelos (RNN/LSTM/CNN/TCN) para mantenimiento predictivo.',
      education:
        'Ingeniería de Sistemas y Telecomunicaciones — Universidad Católica de Pereira (2021–2025). Bachiller — Liceo Taller San Miguel.',
      contribution:
        'Tooling de QA automatizado (Cypress/Selenium) y la carcasa comercial que vende el informe y la revisión certificada FastQA.',
      experience: [
        {
          role: 'Owner / Full-stack',
          company: 'FastQA-HomePage',
          period: '2025 – Presente',
          highlight: 'Landing comercial Vite + React: precios, analizador demo y flujo de certificación.',
        },
        {
          role: 'Promotor comercial captación',
          company: 'Prosavis',
          period: 'Dic 2025 – Presente',
          highlight: 'Captación de proveedores y clientes reales para la plataforma.',
        },
        {
          role: 'Agente de servicio al cliente',
          company: 'ZIPFIXX',
          period: 'Jun 2024 – Jul 2025',
          highlight: 'Atención al cliente y operaciones de soporte.',
        },
      ],
    },
    camilo: {
      fullName: 'Camilo Castañeda Yepes',
      role: 'App Lead Developer · Prosavis',
      fastQaRole: 'Entrega de producto e implementación',
      headline:
        'Ingeniero de Sistemas y Telecomunicaciones · Software, servidores, ML, datos y mobile',
      bio: 'Ingeniero de Sistemas y Telecomunicaciones egresado de la UCP. App Lead Developer en Prosavis. Experiencia con SQL, Windows Server y AWS básico; fue desarrollador en TÓtal Report / JW Project House (May 2024–Sep 2025). Investigó mantenimiento predictivo con ML en la UCP (diseño de BD, software y datos sintéticos para pruebas de modelos). Monitor académico de Metodología de la Programación y participante en maratones ACIS/REDIS y grupos de investigación de programación y software testing.',
      education:
        'Ingeniería de Sistemas y Telecomunicaciones — Universidad Católica de Pereira (2021–2025). Maratones nacionales de programación competitiva.',
      contribution:
        'Ownership de entrega, implementación robusta y cultura de testing en producto real para las garantías de certificación FastQA.',
      experience: [
        {
          role: 'App Lead Developer',
          company: 'Prosavis',
          period: 'Oct 2025 – Presente',
          highlight: 'Liderazgo de entrega en la app; actividad en CRM WhatsApp y producto móvil.',
        },
        {
          role: 'Desarrollador / Implementation',
          company: 'TÓtal Report · JW Project House',
          period: 'May 2024 – Sep 2025',
          highlight:
            'Extracción multi-fuente, cloud, soporte y documentación orientada a ISO 27001.',
        },
        {
          role: 'Researcher (PdM + ML)',
          company: 'Universidad Católica de Pereira',
          period: 'Ene 2024 – Ene 2025',
          highlight: 'Diseño de BD, software y datos sintéticos para pruebas iniciales de modelos ML.',
        },
      ],
    },
    'juan-david': {
      fullName: 'Juan David García Acevedo',
      role: 'Security · Red Team / Bug bounty',
      fastQaRole: 'Aseguramiento de seguridad y calidad',
      headline:
        'Ingeniero en Sistemas y Telecomunicaciones · PLN, ciberseguridad ofensiva y CI/CD',
      bio: 'Ingeniero con tesis meritoria (5.0) sobre extracción de indicios de ideas suicidas mediante PLN (MEIS). Especializado en ciberseguridad ofensiva (Red Team), CTFs en Hack The Box (@liandd) y bug bounty. Certificaciones eJPT, Web-RTA, AD-RTS y CRTA. InfraDev Engineer en HOCd SAS y App Lead Developer en Infinipus (agentes IA conversacionales, N8N, Docker/Linux, CI/CD). En Prosavis reportó y ayudó a remediar un information leakage vía VDP.',
      education:
        'Ingeniería de Sistemas y Telecomunicaciones — UCP. Tesis meritoria MEIS. Técnico en Programación de Software — SENA. Monitor académico OOP Java.',
      contribution:
        'Visión ofensiva de seguridad que endurece las garantías FastQA: secretos, auth, superficie de ataque y evidencia de vulnerabilidades.',
      experience: [
        {
          role: 'InfraDev Engineer',
          company: 'HOCd SAS',
          period: 'Abr 2026 – Presente',
          highlight: 'Infraestructura y desarrollo orientado a operación segura.',
        },
        {
          role: 'App Lead Developer',
          company: 'Infinipus',
          period: 'Mar 2026 – Presente',
          highlight: 'Agentes IA WhatsApp, N8N, CRM, VPS Docker/Linux, audit logs y CI/CD.',
        },
        {
          role: 'Bug Bounty / VDP',
          company: 'Prosavis',
          period: 'Ene 2026 – Presente',
          highlight: 'Auditoría web; hallazgo de information leakage (severidad moderada), remedado.',
        },
      ],
    },
  },
} as const
