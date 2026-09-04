import { Container } from "./Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline py-16">
      <Container>
        <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl text-balance">
          Twelve years in, still shipping, still learning, still not giving up.
        </p>
        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.fullName}
          </span>
          <span>
            {site.location} · Built with Next.js &amp; a lot of coffee
          </span>
        </div>
      </Container>
    </footer>
  );
}
