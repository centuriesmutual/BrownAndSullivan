# Brown & Sullivan — Compliance Directory Platform

> Compliance Counsel for Regulated Distribution.
> Established **MMXXVI**. Headquartered in the State of Texas.
> Licensed in **XXXVII** States.

A production-grade Next.js 14 (App Router) implementation of the Brown & Sullivan compliance directory: a searchable, authoritative registry of compliance artifacts, regulatory frameworks, agent licensure, carrier appointments, consent records, and audit-ready evidence packages.

The visual system holds two opposing tensions simultaneously — a **white-shoe Alabama law firm** (serif headlines, Roman numerals, hairline rules) and a **Reading Rainbow ABC primer** (chunky block letters, geometric grid blocks, kindergarten-reference confidence) — but rendered **strictly monochrome**: pure black, pure white, one cream paper, one ink-wash gray. **No rainbow. No color. All rigor.**

## Stack

- **Next.js 14** App Router with React Server Components
- **TypeScript** (strict mode)
- **Tailwind CSS** with extended theme: monochrome palette, custom grid templates, custom animations
- **CSS Grid–first** layout — `grid-template-areas`, named lines, asymmetric spans
- **next/font/google** for typography:
  - **Cormorant Garamond** — display / headlines (serif, lawyerly)
  - **Archivo Black** — block letters / section anchors (chunky uppercase)
  - **Source Serif 4** — body (library-grade)
  - **JetBrains Mono** — metadata / reference codes (card-catalog feel)
- **Framer Motion** dependency installed for restrained, paper-turn transitions
- **Lucide icons** available (used minimally)
- **shadcn-style** components, hand-built to the monochrome system

## Getting Started

```bash
pnpm install     # or: npm install
pnpm dev         # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The project verifies clean against `pnpm typecheck`, `pnpm lint`, and `pnpm build` (Next.js 14, all 10 routes prerendered or rendered on demand).

## Routes

- `/` — Home (10 sections: hero, the index, the operating system, evidence package, outbound call lifecycle, scripts, lead lifecycle, integrations, jurisdictions, call to counsel)
- `/directory` — Full browse of cataloged entries with server-side `?q=` filter (the only dynamic route)
- `/compliance` — TCPA, CMS, HIPAA, FTC TSR, State DOI, SOC 2 program pages
- `/audit` — Audit & evidence package workflow (7 stages, 5 compartments)
- `/scripts` — Versioned scripts library — ACA, Cross-Sell, Medicare, Compliance, Verification
- `/integrations` — RingCentral, Box.com, HealthSherpa, AHIP, CMS · MARx, State NIPR
- `/agents` — Producer registry: NPN ledger, AHIP cycle, licensure map, carrier appointments
- `/about` — Firm-style about page (principles, jurisdictions, careers, press)
- `/contact` — Counsel-style intake form

## Project Structure

```
app/                    # App Router pages and root layout
components/
  layout/               # UtilityBar, Header, Footer, SearchShortcut (⌘K)
  sections/             # 9 home-page sections, each in its own file
  ui/                   # Button, BlockTile, LibraryCard, SectionHeader, PageTitle
content/                # Seeded data (directory, scripts, integrations, alphabet)
lib/                    # cn(), toRoman(), states, primary nav
```

## Design Tokens

- Pure ink: `#0A0A0A` (`bg-ink`, `text-ink`)
- Ink wash: `#2C2C2C` (`text-ink-wash`)
- Pure paper: `#FAFAFA` (`bg-paper`, `text-paper`)
- Cream paper: `#F4EFE6` (`bg-paper-cream`, `text-paper-cream`)
- No other colors are permitted.

## Interaction

- Hover states are **inversions** (black ↔ cream), never colored highlights.
- Block-letter tiles depress on hover (`block-press` utility) — wooden-block press feel.
- ⌘K (or Ctrl-K) opens the **card-catalog drawer** search modal with a `drawer-pull` animation.
- Page mounts run a `paper-fade` keyframe (220ms ease-out).
- No parallax. No glassmorphism. No gradients. No neon. _This is a law firm._

## Content

All content is seeded against the operational architecture: RingCentral telephony bridge, Box.com retention, HealthSherpa enrollment, AHIP certification, CMS MARx submission, and State NIPR licensure — plus the canonical sales-script catalog:

- `ACA_Outbound_Standard_Open`
- `ACA_Qualification_Standard`
- `ACA_Plan_Presentation`
- `ACA_Voice_Verification_Pre_Transfer`
- `ACA_to_Medicare_Crosssell`
- `Medicare_TPMO_Disclosure`
- `Medicare_SOA_Verbal`
- `Medicare_Needs_Analysis`
- `Medicare_Presentation_Standard`
- `Medicare_Voice_Verification_Final`
- `Consent_Revocation_Standard`

Operations entries cover the **Advanced Call Handling Methods** from the spec: skills-based routing with licensing enforcement, predictive routing, whisper coaching, callback deflection, real-time compliance monitoring, post-call quality scoring, omnichannel continuity, voice biometric verification, screen sharing for enrollment guidance, and auto-documentation.

Update `content/directory.ts`, `content/scripts.ts`, `content/integrations.ts`, `content/agents.ts`, and `content/alphabet.ts` to extend the catalog.

## Scripts

- `pnpm dev` — local dev server
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm lint` — Next.js ESLint
- `pnpm typecheck` — `tsc --noEmit`

## Disclaimer

This site does not constitute legal advice. The Brown & Sullivan Compliance Directory is presented for demonstration purposes and is not a substitute for engaged counsel admitted in your jurisdiction.

© MMXXVI · Brown & Sullivan · All rights reserved.
