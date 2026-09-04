# Faizan Ejaz — Portfolio

A single-page editorial portfolio for **Mirza Faizan Ejaz** ("Faizan Ejaz") — a
senior frontend engineer and AI-native product builder. The site itself is meant
to be the proof of the craft: an editorial "paper & ink" design, a signature
scroll-driven timeline, and zero-fluff copy in his own voice.

## Copy principle

The page is written to be **scanned, not read**. Headlines carry the whole
argument; body copy is optional detail. One claim ("AI that feels like part of
the product") is made once, in the hero, and everything after it is evidence
rather than restatement. Total body prose is ~600 words — deliberately budgeted,
since a visitor decides whether to make contact in well under a minute.

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
public/
  faizan-portrait.jpg   hero portrait (optimised; faizan.png is the original)
```

Sections run Hero → Thesis (01) → Brands (02) → Eras (03) → Capabilities (04) →
Graveyard (05) → Contact (06). Conversion cues: an availability pill and reply
promise in the hero, a mid-page CTA after Capabilities, and contact emails that
are prefilled complete and sendable — never blanks for the visitor to fill in.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

Requires Node 20+ (developed on Node 22).

## Deploys

Netlify, from `main`, via `netlify.toml`. Publish directory must be `.next` for
`@netlify/plugin-nextjs` — pointing it anywhere else fails the build with
"publish directory does not contain expected Next.js build output".

## Content is placeholder — confirm before publishing

The copy is written from public/known facts and Faizan's own framing, but a few
values are **placeholders you should confirm or swap** (all live in
`content/site.ts`):

- **Email** — `mirzafaizanejaz@gmail.com` (canonical placeholder).
- **Calendar link** — `https://cal.com/mirzafaizanejaz` (placeholder; point it at
  a real Cal.com/Calendly).
- **Site URL** — resolved at build time, no longer hardcoded. Netlify's `URL`
  env var wins, so canonical/OG/sitemap/JSON-LD follow a custom domain the
  moment one is attached. Falls back to `https://mirzafaizan.netlify.app`
  locally; override with `NEXT_PUBLIC_SITE_URL` if needed.
- **Availability** — `availability` / `replyPromise` are shown publicly in the
  hero and contact section. Keep them honest, or remove them.
- Socials are real: [GitHub](https://github.com/mirzafaizan),
  [LinkedIn](https://linkedin.com/in/mirzafaizanejaz),
  [Twitter/X](https://twitter.com/mirzafaizanejaz).

No metrics, testimonials, or client product details are fabricated — most client
work is under NDA, so the story and the site are the proof.
