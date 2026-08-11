# Artificialss Showcase — Next.js Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A small, standalone landing page adapted from **Artificialss's** real marketing site
([artificialss.ai](https://artificialss.ai)) — built to show the front-end patterns and visual identity of that
site without carrying over any of its business logic, multi-page content, or backend integrations.

This is a public reference build: browse the code, clone it, and run it locally to see the patterns in action.

## What's in here

A single home page with three pieces, all reused/adapted from the production site's real design:

- **Header** — sticky, dark, curved bottom border that arcs around the logo, contact mailto link, light/dark toggle
- **Hero** — animated planet-and-spaceship logo, headline, subtitle, CTA button
- **Footer** — logo, public social links, copyright

## What's deliberately left out

The real site is a large, multi-page Next.js app with i18n (English/Spanish), Firebase Analytics/Firestore,
Supabase, GraphQL-style contact forms, and pages for legal services, an AI academy, and several client
portfolios. None of that is here. Specifically **not included**:

- No environment variables, API keys, or service credentials of any kind
- No analytics or tracking (Firebase Analytics, `trackEvent` calls)
- No backend-wired contact form — the header/footer "contact" affordances are plain `mailto:` links
- No i18n/dictionary system, no multi-page navigation, no CMS or database

This repo is safe to clone, run, and read top to bottom — there is nothing here that talks to a server Artificialss
controls.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.ts`) |
| Icons | lucide-react + a few hand-written inline SVGs for brand marks (GitHub/X/LinkedIn/YouTube, which lucide no longer ships) |
| Theme | next-themes (class-based dark mode) |

## Brand Identity

The color palette, fonts (Inter + Space Grotesk via `next/font/google`), border radius, and the animated
SVG logo (a planet orbited by a small spaceship, built with SMIL `animateMotion`) are ported directly from the
real site's design tokens — same look, zero backend.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Fonts, ThemeProvider, Header/Footer shell, metadata
│   ├── page.tsx         # Renders HeroSection
│   └── globals.css      # Brand color tokens (light/dark), Tailwind v4 @theme
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   └── hero-section.tsx
│   ├── ui/
│   │   ├── button.tsx        # Minimal Button/ButtonLink, no external UI library
│   │   ├── logo.tsx           # Animated SVG logo
│   │   └── social-icons.tsx   # Inline brand SVGs (GitHub/X/LinkedIn/YouTube)
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts          # cn() className helper (clsx + tailwind-merge)
```

## Run it locally

```shell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```shell
npm run build   # production build
npm run lint     # ESLint
```

## License

MIT — see [LICENSE](LICENSE). Free to use, modify, and distribute.

---

Built with Next.js by **Artificialss**
