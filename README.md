# Faizan Ejaz — Portfolio

A single-page editorial portfolio for **Mirza Faizan Ejaz** ("Faizan Ejaz") — a
senior frontend engineer and design-systems specialist who thinks like a
founder. The site itself is meant to be the proof of the craft: an editorial
"paper & ink" design, a signature scroll-driven timeline, and zero-fluff copy in
his own voice.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **next/font/google** — Fraunces (display), Inter (body), JetBrains Mono (mono)
- **next/og** — dynamically generated Open Graph image, favicon, robots & sitemap
- No animation libraries. Motion is a tiny `IntersectionObserver` + a scroll
  handler, both gated behind `prefers-reduced-motion` and progressive
  enhancement (the site is fully readable with JavaScript disabled).

## Design system

Defined as CSS variables + Tailwind theme tokens in `app/globals.css`:

| Token       | Value     | Use                              |
| ----------- | --------- | -------------------------------- |
| `paper`     | `#F5F1E8` | warm off-white background        |
| `ink`       | `#141312` | primary text                     |
| `ink-muted` | `#5C574E` | secondary text (AA on paper)     |
| `hairline`  | `#DED7C7` | borders / rules                  |
| `cobalt`    | `#2A2AE0` | primary accent (a nod to `#00f`) |
| `amber`     | `#D98A00` | small status dots only           |

Light-first by design (deliberately not a dark-mode dev cliché).

## Signature interaction

The **"long game" timeline spine** in the eras section (`components/Eras.tsx`):
a vertical line that draws itself as you scroll, plus a persistent mono
**coordinate readout** (`Islamabad · 2014` → `Tallinn · 2018` →
`Stockholm · 2021` → `Valencia · 2025`) that updates with the active era.
Desktop shows a sticky "you are here" readout; mobile shows a sticky top
coordinate bar. All of it is disabled under `prefers-reduced-motion`, where the
per-era static labels carry the same information.

## Project structure

```
app/
  layout.tsx            fonts + metadata + skip link
  page.tsx              composes the homepage sections
  globals.css           design tokens + base styles + reveal/reduced-motion
  opengraph-image.tsx   generated OG image
  icon.tsx              generated favicon
  robots.ts / sitemap.ts
components/              one file per section + shared primitives
content/                typed data: eras, brands, graveyard, capabilities, contact, site
```

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

Requires Node 20+ (developed on Node 22).

## Content is placeholder — confirm before publishing

The copy is written from public/known facts and Faizan's own framing, but a few
values are **placeholders you should confirm or swap** (all live in
`content/site.ts`):

- **Email** — `mirzafaizanejaz@gmail.com` (canonical placeholder).
- **Calendar link** — `https://cal.com/mirzafaizanejaz` (placeholder; point it at
  a real Cal.com/Calendly).
- **Site URL** — `https://faizanejaz.com` (used for canonical/OG/sitemap; update
  to the real domain).
- Socials are real: [GitHub](https://github.com/mirzafaizan),
  [LinkedIn](https://linkedin.com/in/mirzafaizanejaz),
  [Twitter/X](https://twitter.com/mirzafaizanejaz).

No metrics, testimonials, or client product details are fabricated — most client
work is under NDA, so the story and the site are the proof.

## Publish to GitHub

This repo has no remote yet. To publish:

```bash
# create an empty repo on GitHub first (no README), then:
git remote add origin https://github.com/mirzafaizan/portfolio-faizan.git
git push -u origin main
```
