import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { graveyard, graveyardIntro, type GraveyardStatus } from "@/content/graveyard";

const statusStyles: Record<
  GraveyardStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "live", dot: "bg-cobalt", text: "text-cobalt-ink" },
  beta: { label: "beta", dot: "bg-amber", text: "text-amber" },
  rip: { label: "rip", dot: "bg-ink-muted", text: "text-ink-muted" },
};

export function Graveyard() {
  return (
    <section
      aria-labelledby="graveyard-heading"
      className="border-t border-hairline py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel index="05">The graveyard</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="graveyard-heading"
            className="mt-10 max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance"
          >
            Things I built that didn&rsquo;t make it.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {graveyardIntro}
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-hairline border-y border-hairline">
          {graveyard.map((entry, i) => {
            const s = statusStyles[entry.status];
            return (
              <Reveal key={entry.name} as="li" delay={i * 50}>
                <div className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] ${s.text}`}
                      >
                        <span className={`size-1.5 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                      <span className="font-mono text-xs text-ink-muted">
                        {entry.years}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                      {entry.name}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-base leading-relaxed text-ink">
                      {entry.what}
                    </p>
                    <p className="border-l-2 border-hairline pl-4 font-mono text-sm leading-relaxed text-ink-muted">
                      {entry.lesson}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
