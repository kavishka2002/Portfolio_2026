"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Braces,
  Code2,
  Database,
  HeartPulse,
  Layers3,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import Section from "./Section";
import { skillCategories } from "@/data/skills";

const icons: Record<string, typeof Braces> = {
  frontend: Code2,
  backend: Server,
  programming: Braces,
  mobile: Smartphone,
  database: Database,
  ai: BrainCircuit,
  cloud: HeartPulse,
  tools: Wrench,
};

export default function SkillsMap() {
  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="Tools I use to build."
      description="A practical toolkit shaped by coursework, independent learning, and the projects in this portfolio."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[category.id] ?? Wrench;
          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
              className="surface-card rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate/10 text-slate">
                  <Icon size={19} strokeWidth={1.7} />
                </div>
                <span className="font-mono text-[10px] text-ink-muted">
                  {String(category.items.length).padStart(2, "0")} skills
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-ink">
                {category.label}
              </h3>
              <p className="mt-1 text-xs leading-5 text-ink-muted">{category.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/20 bg-surface-2/50 px-2.5 py-1.5 font-mono text-[10px] text-ink-muted sm:text-[11px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
