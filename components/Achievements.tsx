import Image from "next/image";
import { Award } from "lucide-react";
import Section from "./Section";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="09 · Recognition" title="Achievements">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement) => (
          <article
            key={achievement.event}
            className="surface-card overflow-hidden rounded-2xl"
          >
            {achievement.image && (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={achievement.image}
                  alt={achievement.imageAlt ?? achievement.event}
                  fill
                  sizes="(max-width: 768px) 92vw, 45vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-amber/30 text-amber">
                <Award size={18} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-mono text-[11px] text-amber">
                  {achievement.name}
                  {achievement.year ? ` · ${achievement.year}` : ""}
                </p>
                <h3 className="mt-2 font-display text-lg text-ink">{achievement.event}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {achievement.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
