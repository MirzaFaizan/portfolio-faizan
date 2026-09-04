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
  "Klarna, Spotify, Bosch, and Hypertext via the VNTRS studio. Most of it is under NDA.";
