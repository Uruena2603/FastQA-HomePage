# Sistema de Diseño — FastQA

> Landing B2B de quality engineering, ciberseguridad y testing automatizado.
> React 19 + TypeScript + Tailwind v4 + Framer Motion + Lenis + Vite 8 + React Bits.
> **Tema dual obligatorio:** light y dark deben verse correctos y distintos (no “dark lavado”).

---

## 1. Brand & Logo oficial

| Atributo | Valor |
|---|---|
| **Brand name** | FastQA |
| **Logo oficial** | [`public/logo.png`](public/logo.png) — icono (anillo + flecha coral) + wordmark |
| **Colores del logo** | Slate navy `#223E54` · Coral `#D55C4D` |
| **Catálogo** | [`src/constants/assets.ts`](src/constants/assets.ts) → `BRAND_ASSETS.logo` |

### Reglas de uso del logo

1. **Siempre** usar `/logo.png` como fuente de verdad (Navbar, Hero, About, Footer, favicon, SEO).
2. El PNG ya incluye el wordmark **FastQA** — no duplicar el nombre en texto junto al lockup.
3. Sobre fondos **oscuros**, envolver el logo en placa clara (`surface="dark"` en `Logo.tsx`) para preservar contraste del navy.
4. Los SVG en `/assets/logo.svg` y `/assets/logo-white.svg` son **legacy** — no usarlos como marca principal.

---

## 2. Dual theme (light / dark) — requisito de producto

Ambos modos son ciudadanos de primera clase. El toggle (`ThemeToggle` + `ThemeProvider`) debe producir **dos experiencias claramente distintas**.

| Aspecto | Light | Dark |
|---|---|---|
| Fondo página | `#F7FAFC` / secondary `#E8F1F7` | `#050B14` / `#0B1524` |
| Cards | Blanco `#FFFFFF` | `#101C2C` |
| Texto | Navy `#223E54` | `#F1F5F9` |
| Hero | Gradiente claro + aurora suave; texto navy | Gradiente profundo + aurora intensa; texto blanco |
| Nav sobre hero | Texto navy / secondary | Texto blanco |
| CTA | Coral `#D55C4D` (igual en ambos) | Coral `#D55C4D` |
| Logo en hero | Directo sobre claro | Placa blanca semitransparente |

### Checklist QA de tema

- [ ] Al cambiar a **light**, el hero deja de verse “noche” (fondos claros, tipografía oscura).
- [ ] Al cambiar a **dark**, el hero recupera profundidad tech.
- [ ] Secciones Below-the-fold alternan `bg-primary` / `bg-secondary` legibles en ambos.
- [ ] El logo oficial se lee bien en nav (light) y en hero/footer (dark con placa).
- [ ] Botón secondary del hero usa tokens (`--color-hero-btn-secondary-*`), no blanco hardcodeado.

Implementación: tokens en [`src/styles/tokens.css`](src/styles/tokens.css) (`:root` = light, `.dark` = dark).

---

## 3. i18n (ES ↔ EN)

Mismo patrón que Prosavis-Web: `LanguageProvider` + `t('namespace.key')` + toggle que muestra el idioma destino (`EN` / `ES`).

| Pieza | Ruta |
|---|---|
| Provider / hooks | [`src/i18n/LanguageContext.tsx`](src/i18n/LanguageContext.tsx) |
| Toggle | [`src/i18n/LanguageToggle.tsx`](src/i18n/LanguageToggle.tsx) — a la izquierda del theme toggle en Navbar |
| Diccionarios | [`src/i18n/dictionaries/{es,en}/`](src/i18n/dictionaries/) |
| Persistencia | `localStorage` key `preferred-locale` (default `es`) |

Al cambiar idioma se actualiza `document.documentElement.lang` y toda la UI (nav, secciones, FAQ, legal, SEO).

---

## 4. Tipografía

| Rol | Fuente | Clase |
|---|---|---|
| Display | Space Grotesk | `font-display` |
| Body | Plus Jakarta Sans | `font-sans` |
| Labels tech | IBM Plex Mono | `font-mono` |

---

## 5. React Bits

| Componente | Uso |
|---|---|
| Aurora / Particles | Hero (re-montan al cambiar tema) |
| DecryptedText | H1 |
| SpotlightCard | Servicios |
| LogoLoop | Trust |

---

## 6. Assets secundarios

| Ruta | Uso |
|---|---|
| `/assets/client-logo-*.svg` | Trust strip |
| `/assets/clients/*.svg` | Trust strip (placeholders) |
| `/assets/logo.svg`, `logo-white.svg` | Legacy only |
