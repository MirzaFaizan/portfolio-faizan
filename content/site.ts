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
  // Canonical placeholder — swap for a preferred inbox before publishing.
  email: "mirzafaizanejaz@gmail.com",
  // Placeholder scheduling link — replace with a real Cal.com / Calendly URL.
  calendarUrl: "https://cal.com/mirzafaizanejaz",
  url: "https://faizanejaz.com",
  socials: {
    github: "https://github.com/mirzafaizan",
    linkedin: "https://linkedin.com/in/mirzafaizanejaz",
    twitter: "https://twitter.com/mirzafaizanejaz",
  },
} as const;

export type Site = typeof site;
