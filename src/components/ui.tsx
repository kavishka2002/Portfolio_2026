import Link from "next/link";
export function SectionHeading({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-xs tracking-[0.2em] text-accent">{index} — {kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}
export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mute">{children}</span>
);
export function Button({ href, children, variant = "primary", external }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; external?: boolean }) {
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${variant === "primary" ? "bg-fg text-bg hover:bg-accent" : "border border-line text-fg hover:border-accent hover:text-accent"}`;
  return external ? <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a> : <Link className={cls} href={href}>{children}</Link>;
}
