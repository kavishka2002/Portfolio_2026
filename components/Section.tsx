"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 lg:mb-14"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
