export type Era = {
  id: string;
  years: string;
  place: string;
  /** Short mono coordinate shown in the scroll readout, e.g. "Islamabad · 2014". */
  coordinate: string;
  role: string;
  title: string;
  /** 2–4 sentences: what he learned / how he thinks. The thinking is the proof. */
  body: string[];
};

export const eras: Era[] = [
  {
    id: "learner",
    years: "2012–2017",
    place: "Islamabad",
    coordinate: "Islamabad · 2014",
    role: "Learner",
    title: "Teaching myself the web, one broken build at a time",
    body: [
      "I started in Islamabad — MS Access, C++, and BASIC — then the web, which felt limitless because you could ship something and a stranger could use it the same night.",
      "So I taught myself, took freelance work, and learned to finish. The project I'm still quietly proud of was a students' online laundry service that actually worked — real orders, real people, real bugs at 2am.",
      "That era taught me the only lesson that ever mattered: shipping to a real human beats a perfect plan. Feedback is oxygen. From there, the road only got longer — new cities, new teams, same itch to ship.",
    ],
  },
  {
    id: "founder",
    years: "2018–2019",
    place: "Tallinn",
    coordinate: "Tallinn · 2018",
    role: "Founder — the failure era, worn proudly",
    title: "Betting on myself in Estonia",
    body: [
      "I moved to Tallinn to start up. I built Bloop, a \"Fitbit for animals\" — a cow collar for herd health — and Eluring, a femtech product. Big swings, small team, my own money on the line.",
      "Neither became a company. But this is the era I'm proudest of, because it's where I learned to hold a whole product in my head: hardware, users, money, and the gap between what people say and what they do.",
      "To keep the lights on I started contracting for US web teams. Founding didn't make me rich — it made me a far better engineer, because I'd finally felt the weight of every decision.",
    ],
  },
  {
    id: "craftsman",
    years: "2020–2024",
    place: "Estonia → Sweden",
    coordinate: "Stockholm · 2021",
    role: "Craftsman",
    title: "Learning to build things that outlast me",
    body: [
      "I contracted across the Estonian startup ecosystem, then joined Sweden's VNTRS studio. Through them I built for Klarna, Spotify, and Bosch, alongside smaller startups — including Hypertext, where AI wasn't a feature bolted on later; it was the product.",
      "I was an early adopter of GitHub Copilot and similar tools, and started helping companies integrate AI properly: Hugging Face, Microsoft, and the workflows around them — so the result felt native to the app, not like a demo taped to the side.",
      "Then Pipedrive, as a Senior Frontend Engineer, where I created and maintained the frontend component library and design system — the shared vocabulary dozens of engineers build with every day. Frontend stopped being about screens and started being about leverage: the right abstraction, documented well, quietly makes everyone around you faster.",
    ],
  },
  {
    id: "now",
    years: "2025–",
    place: "Valencia, Spain",
    coordinate: "Valencia · 2025",
    role: "Now",
    title: "Frontend for a product people move their bodies with",
    body: [
      "Today I'm in Valencia, working on Urban Sports Club — a workout app that's big in Germany — bringing the same obsession with craft, accessibility, and real-user empathy to something people touch every day.",
      "Twelve-plus years in, the through-line hasn't changed: build compassionate products, make AI feel inevitable when it belongs, sweat the details, and still not give up.",
    ],
  },
];
