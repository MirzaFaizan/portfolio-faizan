export type Capability = {
  id: string;
  title: string;
  body: string;
  /** The receipts — why you should believe it. */
  evidence: string;
};

export const capabilities: Capability[] = [
  {
    id: "ai-native",
    title: "AI that feels like the product",
    body: "I orchestrate AI workflows and integrate models so the intelligence disappears into the experience.",
    evidence:
      "Early Copilot adopter · Hugging Face & Microsoft integrations · AI product work at Hypertext",
  },
  {
    id: "design-systems",
    title: "Design systems that scale",
    body: "Accessible components, tokens, and guardrails — the shared vocabulary a whole team ships with.",
    evidence: "Built and owned Pipedrive's frontend component library",
  },
  {
    id: "product-instinct",
    title: "Product instinct, not ticket-taking",
    body: "I've founded companies, so I weigh effort against real value — and I'll tell you when to build less.",
    evidence: "Founder of Bloop & Eluring",
  },
  {
    id: "craft",
    title: "Accessible, or it isn't done",
    body: "Keyboard users, screen readers, slow networks, tired people. The details aren't polish — they're the product.",
    evidence: "Shipped to Klarna, Spotify, and Bosch quality bars",
  },
];
