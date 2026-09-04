import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

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
            className="mt-10 max-w-4xl font-display text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.01em] text-balance"
          >
            I build{" "}
            <span className="text-cobalt">compassionate products</span> people
            actually use — including AI that feels like part of the app, not a
            demo taped on the side.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
            The best interface is invisible: it gets out of the way and lets
            people do the thing they came to do. That includes orchestrating AI
            workflows and integrating models so the intelligence disappears into
            the experience. I&rsquo;ve chased that standard across Estonia,
            Sweden, England, Finland, Germany, Spain, and Portugal — through two
            startups of my own, and more late-night deploys than I can count —
            and I&rsquo;m still chasing it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
