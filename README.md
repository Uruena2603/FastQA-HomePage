# FastQA

Landing de **FastQA** — quality engineering, pruebas automatizadas y ciberseguridad aplicada a software.

## Stack

- React 19 + TypeScript · Vite 8 · Tailwind CSS 4
- Framer Motion + Lenis · react-router-dom · react-helmet-async
- **React Bits** (Aurora, Particles, DecryptedText, SpotlightCard, LogoLoop) + `ogl` + `motion`
- **i18n ES ↔ EN** (`LanguageProvider` + toggle en Navbar; patrón Prosavis)

Ver [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) para tokens, assets, tema dual e i18n.

## Assets

- **Logo oficial:** [`public/logo.png`](./public/logo.png) — único lockup de marca (ver `BRAND_ASSETS.logo`)
- Trust: `public/assets/client-logo-*.svg` + `public/assets/clients/*`
- Legacy marks (no usar): `public/assets/logo.svg`, `logo-white.svg`

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Deploy

Vercel (`vercel.json` SPA rewrite). Output: `dist/`.
