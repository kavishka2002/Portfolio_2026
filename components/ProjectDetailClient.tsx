"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, X } from "lucide-react";
import ImageFrame from "./ImageFrame";
import type { Project } from "@/data/projects";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setActiveImg((i) => (i + 1) % project.gallery.length);
  const prev = () =>
    setActiveImg((i) => (i - 1 + project.gallery.length) % project.gallery.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {project.badge && (
          <span className="border border-amber/40 px-2 py-0.5 font-mono text-[10px] text-amber">
            {project.badge}
          </span>
        )}
        <span className="font-mono text-[11px] text-ink-muted">
          {project.year} · {project.category}
        </span>
      </div>

      <h1 className="font-display text-3xl text-ink sm:text-4xl">{project.name}</h1>
      <p className="mt-2 font-mono text-sm text-slate">{project.tagline}</p>

      {/* Main gallery image */}
      <button
        onClick={() => setLightbox(true)}
        className="mt-8 block w-full cursor-zoom-in"
      >
        <ImageFrame
          src={project.gallery[activeImg]}
          alt={`${project.name} screenshot ${activeImg + 1}`}
          className="h-64 w-full sm:h-96"
        />
      </button>

      {/* Thumbnails */}
      {project.gallery.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {project.gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveImg(i)}
              className={`shrink-0 ${i === activeImg ? "opacity-100" : "opacity-50"}`}
            >
              <ImageFrame src={src} alt="" label="" className="h-16 w-24" />
            </button>
          ))}
        </div>
      )}

      {/* Focus tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.focusTags.map((t) => (
          <span
            key={t}
            className="border border-slate/30 px-2.5 py-1 font-mono text-[11px] text-slate"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Overview / Problem / Solution */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-amber">Problem</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-amber">Solution</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{project.solution}</p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-amber">Key Features</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-[14px] text-ink-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture */}
      {project.architecture && (
        <div className="mt-10">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-amber">
            Architecture Overview
          </h2>
          <ul className="mt-3 space-y-2 border-l border-border/20 pl-4">
            {project.architecture.map((a) => (
              <li key={a} className="text-[14px] text-ink-muted">
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech stack */}
      <div className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-amber">Technology Stack</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="border border-border/20 px-2.5 py-1 font-mono text-[11px] text-ink-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-ink px-4 py-2 font-mono text-[12px] text-bg dark:bg-amber"
          >
            Live Demo <ArrowUpRight size={13} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 border border-border/25 px-4 py-2 font-mono text-[12px] text-ink hover:border-amber hover:text-amber"
          >
            <Github size={13} /> GitHub Repository
          </a>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightbox(false)}
          >
            <button
              className="absolute right-6 top-6 text-white/70 hover:text-white"
              onClick={() => setLightbox(false)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              className="absolute left-4 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <ImageFrame
                src={project.gallery[activeImg]}
                alt={`${project.name} screenshot ${activeImg + 1}`}
                className="h-[60vh] w-full"
              />
            </div>
            <button
              className="absolute right-4 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
