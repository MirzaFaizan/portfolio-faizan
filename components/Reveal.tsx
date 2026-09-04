"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Rendered element tag. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms, applied only when motion is allowed. */
  delay?: number;
};

/**
 * Progressive-enhancement reveal. Renders children immediately (SSR + no-JS
 * safe). When JS is present and motion is allowed, children fade/slide in as
 * they enter the viewport via a single shared IntersectionObserver pattern.
 */
export function Reveal({ children, as, className = "", delay = 0 }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Under reduced motion the CSS keeps .reveal fully visible, so no state
    // change is needed here.
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
