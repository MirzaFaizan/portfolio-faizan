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
      "Hardware punishes optimism. Validate the boring logistics before you fall for the demo.",
  },
  {
    name: "Eluring",
    status: "rip",
    years: "2018–2019",
    what: "Femtech, built with more conviction than distribution.",
    lesson:
      "A product nobody can find is a hobby. Now I design for how people actually discover things.",
  },
];

export const graveyardIntro =
  "A proud little cemetery. Every headstone taught me something I still use.";
