export type Capability = {
  id: string;
  title: string;
  body: string;
  /** The receipts — why you should believe it. */
  evidence: string;
};

export const capabilities: Capability[] = [
  {
    id: "design-systems",
    title: "Design systems & component libraries",
    body: "I build the shared vocabulary a whole team ships with: accessible, well-documented components and the tokens, patterns, and guardrails that keep a product coherent as it scales.",
    evidence: "Created & maintained the frontend component library at Pipedrive.",
  },
  {
    id: "product-frontend",
    title: "Product-minded frontend",
    body: "I don't just implement tickets — I think about the user, the funnel, and the trade-offs. Founding my own companies means I weigh engineering effort against real product value by instinct.",
    evidence: "Founder of Bloop & Eluring; frontend for Urban Sports Club today.",
  },
  {
    id: "shipping",
    title: "Shipping to real users",
    body: "From startups to Klarna, Spotify, and Bosch, I've shipped across wildly different quality bars — and learned to hit each one without over-engineering or cutting the corners that matter.",
    evidence: "Delivered client work through the VNTRS studio in Sweden.",
  },
  {
    id: "mentoring",
    title: "Mentoring & workshops",
    body: "Leverage is a team that gets better. I document decisions, run workshops, and mentor engineers so the good patterns outlive any single person — including me.",
    evidence: "Set the standards other engineers built on, day to day.",
  },
];
