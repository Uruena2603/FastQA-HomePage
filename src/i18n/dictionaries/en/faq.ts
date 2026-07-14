export const faq = {
  items: [
    {
      q: 'What are the advantages of test automation versus manual testing?',
      a: 'Automation runs repetitive cases quickly and consistently, reduces human error, and frees testers for strategic work. It enables regression suites, improves coverage, and delivers reliable results in short agile cycles.',
    },
    {
      q: 'How long does it take to implement automated tests on my project?',
      a: 'It depends on size and complexity. A small project often needs 2–4 weeks for foundations and priority cases; a larger one, 1–3 months. We take a gradual approach starting with critical flows.',
    },
    {
      q: 'Which tools and frameworks do you use for test automation?',
      a: 'Web: Cypress, Selenium, and Playwright. Mobile: Appium and Detox. API: Postman, RestAssured, or supertest. Unit: Jest, JUnit, PyTest, and more. We adapt the stack to your project.',
    },
    {
      q: 'How does FastQA integrate with our current development team?',
      a: 'We can consult, train your team, deliver turnkey solutions, or form a blended team. We fit Scrum, Kanban, and your tooling—transferring knowledge and improving process gradually.',
    },
    {
      q: 'What reports and metrics do you provide?',
      a: 'Pass/fail rates, coverage, execution times, trends, and quality metrics via Allure, ExtentReports, or custom solutions—visual reports so you decide with data.',
    },
    {
      q: 'Do you offer ongoing support after QA solutions are in place?',
      a: 'Yes. We offer script maintenance, false-positive resolution, continuous optimization, technical support, and periodic training on automated testing.',
    },
    {
      q: 'What is the FastQA project analyzer?',
      a: 'It is a demo shell: paste a URL or repo and see a report with 2–3 free findings. The rest (secrets, vibe-coded auth, RLS, release checklist) is locked. Unlock the full report with a one-time payment or subscribe to Pro/Team. Real scanning comes later.',
    },
    {
      q: 'Does the current analysis really review my code?',
      a: 'Not yet. Today the flow is a commercial demo. We do not upload or execute your code. When real scanning goes live, we will state it clearly on /analizar.',
    },
  ],
} as const
