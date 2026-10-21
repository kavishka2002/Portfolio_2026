"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { leadership } from "@/data/profile";

export default function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="08 · Beyond Code"
      title="Leadership & Community"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {leadership.map((item, i) => (
          <motion.div
            key={item.org + item.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border border-border/15 bg-surface p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg text-ink">{item.org}</h3>
              <span className="font-mono text-[11px] text-ink-muted">{item.period}</span>
            </div>
            <p className="mt-1 font-mono text-[13px] text-slate">{item.role}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="border border-border/20 px-2 py-1 font-mono text-[10px] text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
