import { ArrowUpRight, BookOpen, FlaskConical } from "lucide-react";
import Section from "./Section";
import { ongoingResearch, researchInterests } from "@/data/research";

export default function ResearchInterests() {
  return (
    <Section
      id="research"
      eyebrow="04 · Research"
      title="Questions at the edge of health and technology."
      description="My academic interests center on practical, responsible applications of information technology in healthcare."
    >
      <article className="surface-card overflow-hidden rounded-2xl">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden border-b border-border/15 bg-slate/5 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border border-amber/15" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-violet/15" />
            <div className="relative flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.17em] text-amber">
              <FlaskConical size={15} /> Current research · {ongoingResearch.status}
            </div>
            <h3 className="relative mt-6 max-w-xl font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {ongoingResearch.title}
            </h3>
            <p className="relative mt-4 text-sm leading-7 text-ink-muted">
              {ongoingResearch.summary}
            </p>
            <div className="relative mt-6 inline-flex items-center gap-2 font-mono text-[10px] text-ink-muted">
              Ongoing academic work <ArrowUpRight size={13} className="text-amber" />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              Research themes
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ongoingResearch.themes.map((theme) => (
                <li
                  key={theme}
                  className="rounded-full border border-amber/25 bg-amber/5 px-3 py-2 font-mono text-[10px] text-ink"
                >
                  {theme}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              Areas of interest
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {researchInterests.map((interest) => (
                <li key={interest} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <BookOpen size={15} className="mt-0.5 shrink-0 text-slate" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Section>
  );
}
