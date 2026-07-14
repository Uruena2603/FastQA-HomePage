# Graph Report - FastQA-HomePage  (2026-07-13)

## Corpus Check
- 80 files · ~73,870 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 353 nodes · 571 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b6402655`
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
1. `useT()` - 46 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 17 edges
4. `FastQA` - 12 edges
5. `SectionWrapper()` - 11 edges
6. `useCurrency()` - 9 edges
7. `useLanguage()` - 8 edges
8. `useTheme()` - 7 edges
9. `Sistema de Diseño — FastQA` - 7 edges
10. `Flujo de la landing` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --calls--> `useT()`  [EXTRACTED]
  src/components/Footer.tsx → src/i18n/LanguageContext.tsx
- `PricingTeaser()` --calls--> `useT()`  [EXTRACTED]
  src/components/PricingTeaser.tsx → src/i18n/LanguageContext.tsx
- `Team()` --calls--> `useT()`  [EXTRACTED]
  src/components/Team.tsx → src/i18n/LanguageContext.tsx
- `AnalyzerPage()` --calls--> `useT()`  [EXTRACTED]
  src/pages/Analyzer.tsx → src/i18n/LanguageContext.tsx
- `LegalLayout()` --calls--> `useT()`  [EXTRACTED]
  src/pages/Legal.tsx → src/i18n/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (13): analyzer, common, faq, footer, home, en, legal, nav (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (17): Button(), ButtonAsButton, ButtonAsLink, ButtonAsRouterLink, ButtonBaseProps, ButtonProps, ButtonVariant, getClasses() (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (29): About(), stats, values, AnalyzerTeaser(), Contact(), FAQ(), FaqEntry, Method() (+21 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (10): analyzer, common, faq, footer, home, legal, nav, pricing (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (36): 1. Brand & Logo oficial, 2. Dual theme (light / dark) — requisito de producto, 3. i18n (ES ↔ EN), 4. Tipografía, 5. React Bits, 6. Assets secundarios, Checklist QA de tema, Reglas de uso del logo (+28 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (25): Hero(), LogoProps, sizeClass, Navbar(), Aurora(), AuroraProps, DecryptedText(), DecryptedTextProps (+17 more)

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (24): dependencies, framer-motion, lenis, lucide-react, motion, ogl, react, react-dom (+16 more)

### Community 9 - "Community 9"
Cohesion: 0.13
Nodes (16): App(), CurrencyContext, CurrencyContextValue, CurrencyProvider(), DisplayCurrency, LanguageProvider(), convertUsdToCop(), ExchangeRateResult (+8 more)

### Community 15 - "Community 15"
Cohesion: 0.14
Nodes (9): Position, SpotlightCardProps, Team(), TeamExperienceItem, TeamMemberCopy, TEAM_MEMBERS, TeamMemberId, TeamMemberMeta (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (21): Footer(), CurrencyToggle(), ICONS, ProductCard(), ProductCardProps, PricingTeaser(), SeoHelmetProps, useCurrency() (+13 more)

### Community 17 - "Community 17"
Cohesion: 0.20
Nodes (4): ANIMATION_CONFIG, LogoItem, LogoLoop, LogoLoopProps

### Community 18 - "Community 18"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/node, @types/react (+5 more)

## Knowledge Gaps
- **154 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+149 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useT()` connect `Community 2` to `Community 1`, `Community 7`, `Community 9`, `Community 15`, `Community 16`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _154 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10083256244218317 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._