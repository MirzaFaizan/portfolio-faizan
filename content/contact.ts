export type Intent = {
  id: string;
  label: string;
  /** Prefilled email subject for the generated mailto: link. */
  subject: string;
  /** Prefilled body — complete and sendable as-is. Never make them fill blanks. */
  body: string;
};

export const intents: Intent[] = [
  {
    id: "project",
    label: "Hire me for a project",
    subject: "A project we'd like your help on",
    body: "Hi Faizan,\n\nWe're building something and could use a senior frontend hand. Do you have 20 minutes this week for a call?\n\nThanks,",
  },
  {
    id: "ai",
    label: "Make our AI feel native",
    subject: "Making our AI feel native",
    body: "Hi Faizan,\n\nWe want AI in our product, but it has to feel native rather than bolted on. Can we talk through how you'd approach it?\n\nThanks,",
  },
  {
    id: "idea",
    label: "Talk through an idea",
    subject: "An idea I'd like to talk through",
    body: "Hi Faizan,\n\nI have an idea I'd love a frontend and product perspective on. Up for a chat?\n\nThanks,",
  },
  {
    id: "challenge",
    label: "Send me a hard problem",
    subject: "A hard problem for you",
    body: "Hi Faizan,\n\nWe're stuck on a gnarly frontend problem and I'm curious how you'd approach it. Got 20 minutes?\n\nThanks,",
  },
];
