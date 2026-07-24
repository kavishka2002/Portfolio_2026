"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { whatIBuild } from "@/data/skills";

export default function WhatIBuild() {
  return (
    <Section
      id="what-i-build"
      eyebrow="What I Build"
      title="Six kinds of problems I keep coming back to"
    >
      <div className="grid gap-px overflow-hidden border border-border/15 bg-border/15 sm:grid-cols-2 lg:grid-cols-3">
        {whatIBuild.map((item, i) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative bg-surface p-6 transition-colors hover:bg-surface-2"
          >
            <span className="font-mono text-xs text-ink-muted transition-colors group-hover:text-amber">
              {item.index}
            </span>
            <h3 className="mt-3 font-display text-lg text-ink">{item.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
              {item.description}
            </p>
            <div className="absolute bottom-0 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
