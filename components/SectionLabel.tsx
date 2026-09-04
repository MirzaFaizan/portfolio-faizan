export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
      <span className="text-cobalt-ink">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-hairline" />
      <span>{children}</span>
    </div>
  );
}
