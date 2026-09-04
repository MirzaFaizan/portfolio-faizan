export const site = {
  name: "Faizan Ejaz",
  fullName: "Mirza Faizan Ejaz",
  role: "Senior Frontend Engineer · AI-native product builder",
  positioning:
    "Senior frontend engineer who ships AI that feels native — and thinks like a founder.",
  thesis:
    "I build compassionate products people actually use — including AI that respects a person's time, attention, and trust instead of getting in the way.",
  location: "Valencia, Spain",
  locationYear: "2025",
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
