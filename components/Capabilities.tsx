import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="border-t border-hairline py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel index="04">How I work</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="capabilities-heading"
            className="mt-10 max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance"
          >
            Not a list of skills. A way of working.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.id} delay={i * 60} className="bg-paper-raised">
              <article className="flex h-full flex-col p-8 sm:p-10">
                <span className="font-mono text-xs text-ink-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-ink">
                  {cap.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">
                  {cap.body}
                </p>
                <p className="mt-6 flex items-start gap-2.5 border-t border-hairline pt-5 font-mono text-xs leading-relaxed text-cobalt-ink">
                  <span aria-hidden="true" className="mt-1 size-1.5 shrink-0 rounded-full bg-cobalt" />
                  <span>{cap.evidence}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
