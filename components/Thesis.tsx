import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { site } from "@/content/site";

export function Thesis() {
  return (
    <section
      aria-labelledby="thesis-heading"
      className="border-t border-hairline py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel index="01">The through-line</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="thesis-heading"
            className="mt-10 max-w-3xl font-display text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.01em] text-balance"
          >
            The best interface disappears.{" "}
            <span className="text-cobalt">So does the best AI.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            I build compassionate products — the kind that respect a
            person&rsquo;s time, attention, and trust.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <ul className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-hairline pt-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            {site.countries.map((country, i) => (
              <li key={country} className="flex items-center gap-3">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-hairline">
                    /
                  </span>
                ) : null}
                {country}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
