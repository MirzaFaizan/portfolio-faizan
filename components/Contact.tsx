"use client";

import { useMemo, useState } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { intents } from "@/content/contact";
import { site } from "@/content/site";

export function Contact() {
  const [selected, setSelected] = useState(intents[0].id);

  const activeIntent = intents.find((i) => i.id === selected) ?? intents[0];

  const mailto = useMemo(() => {
    const params = new URLSearchParams({
      subject: activeIntent.subject,
      body: activeIntent.body,
    });
    return `mailto:${site.email}?${params.toString()}`;
  }, [activeIntent]);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-hairline py-24 sm:py-32"
    >
      <Container>
        <SectionLabel index="07">Contact</SectionLabel>
        <h2
          id="contact-heading"
          className="mt-10 max-w-4xl font-display text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-balance"
        >
          Tell me what you&rsquo;re building.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Pick a starting point — I&rsquo;ll pre-fill an email so you can skip
          the blank-page problem. I usually reply within a day or two.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Intent chooser */}
          <div>
            <fieldset>
              <legend className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                What&rsquo;s this about?
              </legend>
              <div
                role="radiogroup"
                aria-label="Choose what your message is about"
                className="mt-5 flex flex-wrap gap-3"
              >
                {intents.map((intent) => {
                  const isSelected = intent.id === selected;
                  return (
                    <label
                      key={intent.id}
                      className={`inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-5 py-2.5 text-base transition-colors ${
                        isSelected
                          ? "border-cobalt bg-cobalt text-paper"
                          : "border-hairline bg-paper-raised text-ink hover:border-ink"
                      }`}
                    >
                      <input
                        type="radio"
                        name="intent"
                        value={intent.id}
                        checked={isSelected}
                        onChange={() => setSelected(intent.id)}
                        className="sr-only"
                      />
                      {intent.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-8 rounded-lg border border-hairline bg-paper-raised p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                Preview · subject
              </p>
              <p className="mt-2 font-medium text-ink">{activeIntent.subject}</p>
              <p className="mt-4 whitespace-pre-line font-mono text-sm leading-relaxed text-ink-muted">
                {activeIntent.body}
              </p>
            </div>

            <a
              href={mailto}
              className="group mt-8 inline-flex min-h-[44px] items-center gap-3 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-cobalt focus-visible:bg-cobalt"
            >
              Write the email
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>

          {/* Direct channels */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                Or reach me directly
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-[44px] items-center text-lg text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:decoration-cobalt"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-lg text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:decoration-cobalt"
                  >
                    Book a call
                    <span className="font-mono text-xs text-ink-muted">
                      (calendar)
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                Elsewhere
              </p>
              <ul className="mt-5 flex flex-col gap-3 font-mono text-sm">
                <li>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:decoration-cobalt"
                  >
                    GitHub · github.com/mirzafaizan
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:decoration-cobalt"
                  >
                    LinkedIn · in/mirzafaizanejaz
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:decoration-cobalt"
                  >
                    Twitter/X · @mirzafaizanejaz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
