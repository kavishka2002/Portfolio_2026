"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experience, education, certificationTraining } from "@/data/profile";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="04 · Experience" title="Professional Experience">
      <ol className="relative ml-2 space-y-10 border-l border-border/20 pl-8">
        {experience.map((item, i) => (
          <motion.li
            key={item.org + item.period}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1 h-2.5 w-2.5 rounded-full border-2 border-amber bg-bg" />
            <p className="font-mono text-[11px] text-ink-muted">{item.period}</p>
            <h3 className="mt-1 font-display text-lg text-ink">{item.org}</h3>
            <p className="text-[13px] text-slate">{item.role}</p>
            <p className="mt-1 text-[13px] text-ink-muted">{item.location}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" eyebrow="05 · Education" title="Education">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <ol className="relative ml-2 space-y-10 border-l border-border/20 pl-8">
          {education.map((item, i) => (
            <motion.li
              key={item.institution}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[38px] top-1 h-2.5 w-2.5 rounded-full border-2 border-slate bg-bg" />
              <p className="font-mono text-[11px] text-ink-muted">{item.period}</p>
              <h3 className="mt-1 font-display text-lg text-ink">{item.institution}</h3>
              <p className="mt-1 text-[13px] text-ink-muted">{item.program}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.areas.map((a) => (
                  <span
                    key={a}
                    className="border border-border/20 px-2 py-1 font-mono text-[10px] text-ink-muted"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="border border-border/15 bg-surface p-6 h-fit">
          <p className="font-mono text-[11px] uppercase tracking-widest text-amber">
            Certification
          </p>
          <h3 className="mt-2 font-display text-lg text-ink">
            {certificationTraining.name}
          </h3>
          <p className="mt-1 font-mono text-[12px] text-slate">
            {certificationTraining.provider}
          </p>
          <ul className="mt-4 space-y-1.5">
            {certificationTraining.areas.map((a) => (
              <li key={a} className="flex gap-2 text-[13px] text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
