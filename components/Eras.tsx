"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { eras } from "@/content/eras";

export function Eras() {
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [enhanced, setEnhanced] = useState(false);
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;

      setEnhanced(true);

      const rect = list.getBoundingClientRect();
      const focusLine = window.innerHeight * 0.4;

      // Section-in-view (for the floating readout visibility).
      setInView(rect.top < window.innerHeight * 0.75 && rect.bottom > 120);

      // Spine fill: how far the focus line has travelled through the list.
      const progress = (focusLine - rect.top) / rect.height;
      setFill(Math.max(0, Math.min(1, progress)) * 100);

      // Active era: last item whose top has crossed the focus line.
      let next = 0;
      itemRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= focusLine) next = i;
      });
      setActive(next);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const activeEra = eras[active];

  return (
    <section
      id="eras"
      aria-labelledby="eras-heading"
      className="relative border-t border-hairline py-24 sm:py-32"
    >
      {/* Mobile sticky coordinate bar */}
      {enhanced && inView ? (
        <div
          aria-hidden="true"
          className="sticky top-0 z-30 -mx-6 mb-8 flex items-center gap-2 border-b border-hairline bg-paper/90 px-6 py-2.5 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:hidden"
        >
          <span className="size-1.5 rounded-full bg-amber" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
            {activeEra.coordinate}
          </span>
        </div>
      ) : null}

      <Container>
        <SectionLabel index="03">The long game</SectionLabel>
        <h2
          id="eras-heading"
          className="mt-10 max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance"
        >
          Twelve years, four countries, one stubborn idea.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Most of the work is under NDA — so instead of screenshots, here&rsquo;s
          how I got here and how it taught me to think. That&rsquo;s the part
          that transfers.
        </p>

        <div className="mt-16 lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Desktop sticky coordinate readout */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              {enhanced ? (
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
                    You are here
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-amber" />
                    <span
                      key={activeEra.coordinate}
                      className="font-mono text-sm uppercase tracking-[0.12em] text-ink"
                    >
                      {activeEra.coordinate}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-cobalt-ink">
                    {activeEra.role}
                  </span>
                </div>
              ) : (
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
                  {eras[0].coordinate} → {eras[eras.length - 1].coordinate}
                </span>
              )}
            </div>
          </div>

          {/* Timeline spine + eras */}
          <ol ref={listRef} className="relative">
            {/* Spine base line */}
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-3 bottom-3 w-px bg-hairline"
            />
            {/* Spine fill (draws as you scroll) */}
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-3 w-px bg-cobalt"
              style={{ height: `calc((100% - 1.5rem) * ${fill / 100})` }}
            />

            {eras.map((era, i) => {
              const isActive = enhanced && i === active;
              return (
                <li
                  key={era.id}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="relative pl-10 pb-16 last:pb-0"
                >
                  {/* Node marker on the spine */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-2 size-[11px] rounded-full border-2 bg-paper transition-colors duration-500 ${
                      isActive
                        ? "border-cobalt"
                        : "border-hairline"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-sm uppercase tracking-[0.12em] text-cobalt-ink">
                      {era.coordinate}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {era.years} · {era.place}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-amber" />
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                      {era.role}
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-2xl font-display text-2xl font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:text-[1.75rem]">
                    {era.title}
                  </h3>
                  <div className="mt-4 max-w-2xl space-y-4">
                    {era.body.map((para, p) => (
                      <p key={p} className="text-base leading-relaxed text-ink-muted sm:text-lg">
                        {para}
                      </p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
