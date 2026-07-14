export const faq = {
  items: [
    {
      q: '¿Qué ventajas ofrece la automatización de pruebas frente al testing manual?',
      a: 'La automatización permite ejecutar casos repetitivos de forma rápida y consistente, reduce errores humanos y libera a los testers para tareas estratégicas. Facilita regresiones, mejora cobertura y entrega resultados confiables en ciclos ágiles cortos.',
    },
    {
      q: '¿Cuánto tiempo se requiere para implementar pruebas automatizadas en mi proyecto?',
      a: 'Depende del tamaño y complejidad. Un proyecto pequeño suele requerir 2–4 semanas para la base y casos prioritarios; uno grande, entre 1 y 3 meses. Priorizamos un enfoque gradual empezando por flujos críticos.',
    },
    {
      q: '¿Qué herramientas y frameworks utilizan para la automatización de pruebas?',
      a: 'Para web: Cypress, Selenium y Playwright. Móvil: Appium y Detox. API: Postman, RestAssured o supertest. Unitarias: Jest, JUnit, PyTest, entre otros. Adaptamos el stack a tu proyecto.',
    },
    {
      q: '¿Cómo se integra FastQA con nuestro equipo de desarrollo actual?',
      a: 'Podemos actuar como consultores, capacitar a tu equipo, entregar llave en mano o formar un equipo mixto. Nos adaptamos a Scrum, Kanban y tus herramientas. Transferimos conocimiento y mejoramos el proceso gradualmente.',
    },
    {
      q: '¿Qué tipo de reportes y métricas proporcionan sobre las pruebas?',
      a: 'Reportes de paso/fallo, cobertura, tiempos de ejecución, tendencias y métricas de calidad con Allure, ExtentReports o soluciones a medida. Informes visuales para decidir con datos.',
    },
    {
      q: '¿Ofrecen soporte continuo después de implementar las soluciones de QA?',
      a: 'Sí. Ofrecemos mantenimiento de scripts, resolución de falsos positivos, optimización continua, soporte técnico y capacitación periódica en testing automatizado.',
    },
    {
      q: '¿Qué es el analizador de proyectos de FastQA?',
      a: 'Es una carcasa demo: pegas una URL o repo y ves un informe con 2–3 hallazgos gratis. El resto (secretos, auth vibe-coded, RLS, checklist de release) está bloqueado. Puedes desbloquear el informe completo con un pago único o suscribirte a Pro/Team. El escaneo real llegará después.',
    },
    {
      q: '¿El análisis actual revisa mi código de verdad?',
      a: 'No todavía. Hoy el flujo es comercial/demo para mostrar el producto. No subimos ni ejecutamos tu código. Cuando activemos el escaneo real, lo indicaremos claramente en /analizar.',
    },
  ],
} as const
