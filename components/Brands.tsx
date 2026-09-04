import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { brands, brandsCaveat } from "@/content/brands";

export function Brands() {
  return (
    <section
      aria-labelledby="brands-heading"
      className="border-t border-hairline py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel index="02">Along the way</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="brands-heading"
            className="mt-10 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.01em]"
          >
            I&rsquo;ve built for teams you know.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <li key={brand.name} className="flex flex-col gap-2">
                <span className="font-display text-2xl font-medium tracking-tight text-ink sm:text-[1.75rem]">
                  {brand.name}
                </span>
                {brand.viaVntrs ? (
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
                    via VNTRS
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-14 max-w-2xl border-l-2 border-hairline pl-5 font-mono text-sm leading-relaxed text-ink-muted">
            {brandsCaveat}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
