import { Container } from "./Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-between pt-8 pb-14">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            {site.name}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            {site.location} · {site.locationYear}
          </span>
        </div>

        {/* Main statement */}
        <div className="max-w-5xl py-16">
          <p className="mb-8 max-w-2xl font-mono text-sm text-cobalt-ink">
            {site.positioning}
          </p>
          <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.02em] text-balance">
            I&rsquo;ve been shipping on the web since before I could drive.{" "}
            <span className="text-cobalt">Still not giving up.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {site.thesis}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="group inline-flex min-h-[44px] items-center gap-3 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-cobalt focus-visible:bg-cobalt"
            >
              Tell me what you&rsquo;re building
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <a
              href="#eras"
              className="inline-flex min-h-[44px] items-center font-mono text-sm text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:decoration-cobalt"
            >
              Read the long game
            </a>
          </div>
        </div>

        {/* Footer hint */}
        <div className="flex items-end justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            {site.role}
          </span>
          <span
            aria-hidden="true"
            className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ink-muted sm:inline"
          >
            Scroll ↓
          </span>
        </div>
      </Container>
    </header>
  );
}
