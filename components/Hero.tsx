import Image from "next/image";
import { Container } from "./Container";
import { StatusDot } from "./StatusDot";
import { site } from "@/content/site";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-between pt-8 pb-14">
        {/* Top bar */}
        <div className="hero-beat hero-beat-1 flex items-start justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            {site.name}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            {site.location} · {site.timezone}
          </span>
        </div>

        {/* Main statement */}
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="hero-beat hero-beat-2 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper-raised px-4 py-2">
              <StatusDot tone="cobalt" label="Currently available" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
                {site.availability}
              </span>
            </p>

            <h1 className="hero-beat hero-beat-2 mt-8 font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.02em] text-balance">
              I make AI feel like{" "}
              <span className="hero-wonk text-cobalt">part of the product</span>{" "}
              — not a demo taped to the side.
            </h1>

            <p className="hero-beat hero-beat-3 mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {site.proof}
            </p>

            <div className="hero-beat hero-beat-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contact"
                className="group inline-flex min-h-[44px] items-center gap-3 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-cobalt focus-visible:bg-cobalt"
              >
                Let&rsquo;s talk
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
              <span className="font-mono text-xs leading-relaxed text-ink-muted">
                {site.replyPromise}
              </span>
            </div>
          </div>

          {/* Portrait — the fastest trust signal on the page. It sits on a solid
              ink field and fades into it, so the image needs no frame. */}
          <div className="hero-beat hero-beat-4 relative order-first max-w-[240px] bg-ink lg:order-none lg:max-w-none">
            <Image
              src={site.portrait.src}
              alt={site.portrait.alt}
              width={site.portrait.width}
              height={site.portrait.height}
              priority
              sizes="(min-width: 1024px) 30vw, 240px"
              className="hero-portrait-image aspect-square w-full object-cover object-[50%_30%] lg:aspect-[4/5]"
            />

            {/* A measured number, rendered in the two colours it measures. */}
            <p className="absolute bottom-4 left-4 font-mono text-xs whitespace-nowrap uppercase tracking-[0.14em] text-paper">
              {site.contrast.ratio}
              {/* The pair only fits once the portrait leaves its 240px cap. */}
              <span className="ml-2 hidden text-paper/70 lg:inline">
                {site.contrast.pair}
              </span>
            </p>
          </div>
        </div>

        {/* Receipts */}
        <dl className="hero-beat hero-beat-4 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-hairline pt-8">
          {site.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2.5">
              <dt className="order-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-medium tracking-tight text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </header>
  );
}
