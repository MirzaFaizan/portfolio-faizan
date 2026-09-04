import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const reasons = [
  {
    title: "I think in products, not tickets",
    body: "Having founded companies and felt the weight of every decision, I ask why before how — and I'll tell you when the smartest move is to build less.",
  },
  {
    title: "I make teams faster",
    body: "Design systems, documented patterns, and workshops are my default. I leave a codebase — and a team — in better shape than I found it.",
  },
  {
    title: "I sweat accessibility & craft",
    body: "Compassionate means everyone: keyboard users, screen readers, slow networks, tired people. The details aren't polish, they're the product.",
  },
];

export function WhyMe() {
  return (
    <section
      aria-labelledby="why-heading"
      className="border-t border-hairline py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel index="06">Why work with me</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="why-heading"
            className="mt-10 max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance"
          >
            For founders and teams who care how it&rsquo;s built.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 70}>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sm text-cobalt-ink">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-medium leading-tight tracking-tight text-ink">
                  {reason.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-muted">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
