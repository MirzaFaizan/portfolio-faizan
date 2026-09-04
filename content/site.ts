/**
 * Drives canonical, OG image, sitemap, robots, and JSON-LD URLs — so it has to
 * be the real origin, not a guess. Netlify injects `URL` as the site's primary
 * URL at build time, which follows a custom domain automatically once attached.
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "https://mirzafaizan.netlify.app"
).replace(/\/$/, "");

export const site = {
  name: "Faizan Ejaz",
  fullName: "Mirza Faizan Ejaz",
  role: "Senior Frontend Engineer · AI-native product builder",
  positioning: "Senior frontend engineer · AI-native product builder",
  /** The single claim the whole page stands on. Said once, here. */
  claim:
    "I make AI feel like part of the product — not a demo taped to the side.",
  /** One supporting line of proof. Nothing more. */
  proof:
    "Design systems at Pipedrive, AI products via VNTRS, two startups of my own.",
  /** Scannable receipts — read in about two seconds. */
  stats: [
    { value: "12", label: "years shipping" },
    { value: "7", label: "countries" },
    { value: "2", label: "startups of my own" },
  ],
  countries: [
    "Estonia",
    "Sweden",
    "England",
    "Finland",
    "Germany",
    "Spain",
    "Portugal",
  ],
  location: "Valencia, Spain",
  locationYear: "2025",
  timezone: "CET",
  availability: "Open to new projects",
  replyPromise: "I read every message myself and usually reply the same day.",
  portrait: {
    src: "/faizan-portrait.jpg",
    width: 1160,
    height: 1200,
    alt: "Faizan Ejaz, photographed outdoors in the snow",
  },
  /**
   * The measured WCAG ratio of --paper on --ink, computed from the tokens in
   * globals.css rather than asserted. The hero chip renders it in exactly those
   * two colours, so the annotation is a live sample of the number it states.
   * Recompute if either token moves.
   */
  contrast: {
    ratio: "16.46:1",
    pair: "paper on ink",
  },
  // Canonical placeholder — swap for a preferred inbox before publishing.
  email: "mirzafaizanejaz@gmail.com",
  // Placeholder scheduling link — replace with a real Cal.com / Calendly URL.
  calendarUrl: "https://cal.com/mirzafaizanejaz",
  url: SITE_URL,
  socials: {
    github: "https://github.com/mirzafaizan",
    linkedin: "https://linkedin.com/in/mirzafaizanejaz",
    twitter: "https://twitter.com/mirzafaizanejaz",
  },
} as const;

export type Site = typeof site;
