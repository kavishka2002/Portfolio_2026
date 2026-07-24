"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { skillCategories } from "@/data/skills";

export default function SkillsMap() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="Technology Ecosystem"
      description="Select a category to see what it connects to."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Category selector */}
        <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`border px-4 py-2.5 text-left font-mono text-[13px] transition-colors lg:w-full ${
                c.id === activeId
                  ? "border-amber bg-amber/10 text-ink"
                  : "border-border/20 text-ink-muted hover:border-border/40"
              }`}
            >
              {c.label}
              <span className="ml-2 text-[11px] text-ink-muted">
                {c.items.length.toString().padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {/* Connection map */}
        <div className="relative border border-border/15 bg-surface p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-amber/40 font-mono text-xs text-amber">
              {active.label.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-display text-lg text-ink">{active.label}</p>
              <p className="font-mono text-[11px] text-ink-muted">{active.description}</p>
            </div>
          </div>

          <div className="relative ml-4 space-y-3 border-l border-border/20 pl-6">
            {active.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative flex items-center gap-3"
              >
                <span className="absolute -left-[27px] h-px w-5 bg-border/30" />
                <span className="absolute -left-[30px] h-1.5 w-1.5 rounded-full bg-amber" />
                <span className="font-mono text-sm text-ink">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
