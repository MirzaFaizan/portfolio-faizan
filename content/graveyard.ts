export type GraveyardStatus = "rip" | "beta" | "live";

export type GraveyardEntry = {
  name: string;
  status: GraveyardStatus;
  years: string;
  what: string;
  /** One honest line: the post-mortem / lesson. */
  lesson: string;
};

export const graveyard: GraveyardEntry[] = [
  {
    name: "Bloop",
    status: "rip",
    years: "2018–2019",
    what: "A \"Fitbit for animals\" — a smart collar for cattle herd health.",
    lesson:
      "Hardware punishes optimism. I learned to validate the boring logistics before falling in love with the demo.",
  },
  {
    name: "Eluring",
    status: "rip",
    years: "2018–2019",
    what: "A femtech product built with more conviction than distribution.",
    lesson:
      "A good product nobody can find is a hobby. Now I design for how people actually discover things.",
  },
  {
    name: "Campus Laundry",
    status: "rip",
    years: "2014–2016",
    what: "A students' online laundry service back in Pakistan that genuinely worked.",
    lesson:
      "My first taste of real users. Small, unglamorous, and the most honest feedback loop I ever had.",
  },
  {
    name: "Assorted freelance experiments",
    status: "rip",
    years: "2013–",
    what: "The side projects and pitches that never made it out of the garage.",
    lesson:
      "Most ideas should die. Killing them quickly is a skill, not a defeat.",
  },
];

export const graveyardIntro =
  "A proud little cemetery. Every headstone taught me something I use now — which is the whole point.";
