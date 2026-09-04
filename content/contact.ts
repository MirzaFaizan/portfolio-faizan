export type Intent = {
  id: string;
  label: string;
  /** Prefilled email subject for the generated mailto: link. */
  subject: string;
  /** Prefilled email body. */
  body: string;
};

export const intents: Intent[] = [
  {
    id: "project",
    label: "Start a project",
    subject: "Let's start a project",
    body: "Hi Faizan,\n\nWe're building something and could use a senior frontend hand. Here's the gist:\n\n- What we're building:\n- Timeline:\n- Team & stack:\n\nWhen could we talk?",
  },
  {
    id: "ai",
    label: "Integrate AI into a product",
    subject: "AI integration / workflows",
    body: "Hi Faizan,\n\nWe want AI in the product — but it has to feel native, not bolted on. Here's where we are:\n\n- The product & users:\n- What we want AI to do:\n- Stack / constraints (Hugging Face, Microsoft, custom, etc.):\n\nWhen could we talk?",
  },
  {
    id: "idea",
    label: "Talk about an idea",
    subject: "An idea I'd like to talk through",
    body: "Hi Faizan,\n\nI've got an idea rattling around and would love a frontend/product perspective on it:\n\n- The idea:\n- What I'm unsure about:\n\nUp for a chat?",
  },
  {
    id: "challenge",
    label: "Send me a challenge",
    subject: "A challenge for you",
    body: "Hi Faizan,\n\nHere's a gnarly frontend or AI-integration problem we're stuck on:\n\n- The problem:\n- What we've tried:\n\nCurious how you'd approach it.",
  },
];
