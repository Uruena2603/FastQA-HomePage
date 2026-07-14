# Graph Report - FastQA-HomePage  (2026-07-13)

## Corpus Check
- 76 files · ~68,962 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 315 nodes · 523 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b17b92c8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `useT()` - 44 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 17 edges
4. `SectionWrapper()` - 10 edges
5. `useCurrency()` - 9 edges
6. `useLanguage()` - 8 edges
7. `useTheme()` - 7 edges
8. `Sistema de Diseño — FastQA` - 7 edges
9. `scripts` - 6 edges
10. `getProductById()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Trust()` --calls--> `useT()`  [EXTRACTED]
  src/components/Trust.tsx → src/i18n/LanguageContext.tsx
- `AnalyzerPage()` --calls--> `useT()`  [EXTRACTED]
  src/pages/Analyzer.tsx → src/i18n/LanguageContext.tsx
- `LegalLayout()` --calls--> `useT()`  [EXTRACTED]
  src/pages/Legal.tsx → src/i18n/LanguageContext.tsx
- `PricingPage()` --calls--> `useT()`  [EXTRACTED]
  src/pages/Pricing.tsx → src/i18n/LanguageContext.tsx
- `About()` --calls--> `useT()`  [EXTRACTED]
  src/components/About.tsx → src/i18n/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (12): analyzer, common, faq, footer, home, en, legal, nav (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (17): Button(), ButtonAsButton, ButtonAsLink, ButtonAsRouterLink, ButtonBaseProps, ButtonProps, ButtonVariant, getClasses() (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (24): About(), stats, values, AnalyzerTeaser(), Footer(), Method(), steps, CurrencyToggle() (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.16
Nodes (9): analyzer, common, faq, footer, home, legal, nav, pricing (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (14): 1. Brand & Logo oficial, 2. Dual theme (light / dark) — requisito de producto, 3. i18n (ES ↔ EN), 4. Tipografía, 5. React Bits, 6. Assets secundarios, Checklist QA de tema, Reglas de uso del logo (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (20): App(), Navbar(), ThemeToggle(), ThemeContext, ThemeProvider(), useTheme(), LanguageProvider(), LegalLayout() (+12 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (37): dependencies, framer-motion, lenis, lucide-react, motion, ogl, react, react-dom (+29 more)

### Community 9 - "Community 9"
Cohesion: 0.21
Nodes (10): CurrencyContext, CurrencyContextValue, CurrencyProvider(), DisplayCurrency, convertUsdToCop(), ExchangeRateResult, ExchangeRateSource, fetchFrankfurter() (+2 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (9): Hero(), Aurora(), AuroraProps, DecryptedText(), DecryptedTextProps, Direction, defaultColors, Particles() (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.15
Nodes (12): ICONS, ProductCardProps, Position, SpotlightCardProps, BillingInterval, PRICING_PRODUCTS, PricingProduct, PRODUCT_IDS (+4 more)

### Community 17 - "Community 17"
Cohesion: 0.12
Nodes (9): LogoProps, sizeClass, ANIMATION_CONFIG, LogoItem, LogoLoop, LogoLoopProps, Trust(), BRAND_ASSETS (+1 more)

### Community 18 - "Community 18"
Cohesion: 0.16
Nodes (13): Contact(), FAQ(), FaqEntry, SeoHelmetProps, buildMailtoDemoUrl(), buildWhatsappDemoUrl(), Locale, useLanguage() (+5 more)

## Knowledge Gaps
- **132 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+127 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useT()` connect `Community 2` to `Community 1`, `Community 7`, `Community 15`, `Community 16`, `Community 17`, `Community 18`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _132 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.12648221343873517 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11740890688259109 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._