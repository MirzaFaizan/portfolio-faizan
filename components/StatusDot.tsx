const styles: Record<string, string> = {
  amber: "bg-amber",
  cobalt: "bg-cobalt",
  ink: "bg-ink",
};

export function StatusDot({
  tone = "amber",
  label,
}: {
  tone?: "amber" | "cobalt" | "ink";
  label?: string;
}) {
  return (
    <span
      className={`inline-block size-2 shrink-0 rounded-full ${styles[tone]}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
