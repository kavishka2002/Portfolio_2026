"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Section from "./Section";
import ImageFrame from "./ImageFrame";
import { projects } from "@/data/projects";

export default function ProjectExplorer() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const active = projects.find((p) => p.slug === activeSlug)!;

  return (
    <Section
      id="projects"
      eyebrow="02 · Projects"
      title="Project Experience"
      description="Four systems, four different problems. Select one to open its case study."
    >
      <div className="grid gap-0 border border-border/15 lg:grid-cols-[280px_1fr]">
        {/* Left nav list */}
        <div className="border-b border-border/15 lg:border-b-0 lg:border-r">
          {projects.map((p) => (
            <button
              key={p.slug}
              onClick={() => setActiveSlug(p.slug)}
              className={`flex w-full items-center gap-3 border-b border-border/10 px-5 py-4 text-left transition-colors last:border-b-0 ${
                p.slug === activeSlug
                  ? "bg-surface-2"
                  : "bg-surface hover:bg-surface-2/60"
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  p.slug === activeSlug ? "text-amber" : "text-ink-muted"
                }`}
              >
                {p.index}
              </span>
              <div className="min-w-0">
                <p className="truncate font-mono text-[13px] text-ink">{p.name}</p>
                <p className="truncate text-[11px] text-ink-muted">{p.category}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Right preview */}
        <div className="relative overflow-hidden bg-surface p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
            >
              <ImageFrame
                src={active.coverPath}
                alt={`${active.name} cover screenshot`}
                className="mb-6 h-52 w-full sm:h-64"
              />

              <div className="mb-3 flex flex-wrap items-center gap-2">
                {active.badge && (
                  <span className="border border-amber/40 px-2 py-0.5 font-mono text-[10px] text-amber">
                    {active.badge}
                  </span>
                )}
                <span className="font-mono text-[11px] text-ink-muted">
                  {active.year} · {active.category}
                </span>
              </div>

              <h3 className="font-display text-2xl text-ink">{active.name}</h3>
              <p className="mt-1 font-mono text-[13px] text-slate">{active.tagline}</p>
              <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-muted">
                {active.overview}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {active.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-border/20 px-2 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="mt-6 grid gap-1.5 sm:grid-cols-2">
                {active.features.slice(0, 6).map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] text-ink-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${active.slug}`}
                  className="inline-flex items-center gap-1.5 bg-ink px-4 py-2 font-mono text-[12px] text-bg dark:bg-amber dark:text-bg"
                >
                  View Case Study
                  <ArrowUpRight size={13} />
                </Link>
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border/25 px-4 py-2 font-mono text-[12px] text-ink hover:border-amber hover:text-amber"
                  >
                    Live Demo
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {active.githubUrl && (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border/25 px-4 py-2 font-mono text-[12px] text-ink hover:border-amber hover:text-amber"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
