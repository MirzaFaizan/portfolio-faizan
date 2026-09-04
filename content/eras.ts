export type Era = {
  id: string;
  years: string;
  place: string;
  /** Short mono coordinate shown in the scroll readout, e.g. "Islamabad · 2014". */
  coordinate: string;
  role: string;
  /** Scannable headline — carries the point on its own. */
  title: string;
  /** One sentence of proof. If it needs two, it isn't sharp enough yet. */
  line: string;
};

export const eras: Era[] = [
  {
    id: "learner",
    years: "2012–2017",
    place: "Islamabad",
    coordinate: "Islamabad · 2014",
    role: "Learner",
    title: "Taught myself the web in Islamabad",
    line: "Freelance work, then a students' laundry service real people actually used — my first honest feedback loop.",
  },
  {
    id: "founder",
    years: "2018–2019",
    place: "Tallinn",
    coordinate: "Tallinn · 2018",
    role: "Founder",
    title: "Bet on myself in Estonia. Lost.",
    line: "Bloop, a Fitbit for cattle, and Eluring, femtech. Neither made it — and it's still the era I'm proudest of.",
  },
  {
    id: "craftsman",
    years: "2020–2024",
    place: "Estonia → Sweden",
    coordinate: "Stockholm · 2021",
    role: "Craftsman",
    title: "Learned to build things that outlast me",
    line: "VNTRS, then Pipedrive: Klarna and Spotify work, early AI products at Hypertext, and the design system dozens of engineers shipped with daily.",
  },
  {
    id: "now",
    years: "2025–",
    place: "Valencia, Spain",
    coordinate: "Valencia · 2025",
    role: "Now",
    title: "Frontend people move their bodies with",
    line: "Urban Sports Club, from Valencia — same obsession with craft, accessibility, and real-user empathy.",
  },
];
