import { site } from "@/content/site";

/**
 * Person schema (JSON-LD) — what lets a search for "Faizan Ejaz" resolve to a
 * knowledge panel rather than a bare blue link. Derived from `site` so the
 * markup can never disagree with the copy on the page.
 */
export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}${site.portrait.src}`,
    jobTitle: "Senior Frontend Engineer",
    description: site.claim,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    worksFor: {
      "@type": "Organization",
      name: "Urban Sports Club",
    },
    knowsAbout: [
      "AI integration",
      "AI workflow orchestration",
      "Design systems",
      "Component libraries",
      "Frontend architecture",
      "Web accessibility",
      "React",
      "TypeScript",
      "Next.js",
    ],
    sameAs: [
      site.socials.github,
      site.socials.linkedin,
      site.socials.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Schema is a static object built at build time, so there is no user
      // input in this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
