export type Brand = {
  name: string;
  /** True when the work was delivered through the VNTRS studio (honest caveat). */
  viaVntrs?: boolean;
};

export const brands: Brand[] = [
  { name: "Pipedrive" },
  { name: "Klarna", viaVntrs: true },
  { name: "Spotify", viaVntrs: true },
  { name: "Bosch", viaVntrs: true },
  { name: "Hypertext", viaVntrs: true },
  { name: "Urban Sports Club" },
  { name: "VNTRS" },
];

export const brandsCaveat =
  "The Klarna, Spotify, Bosch, and Hypertext work was delivered through the VNTRS studio. Most engagements are under NDA, so I can talk about how I work — not client specifics.";
