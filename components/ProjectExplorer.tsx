"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import Section from "./Section";
import ImageFrame from "./ImageFrame";
import { projects } from "@/data/projects";

const featuredSlugs = ["shiftcare", "smart-clinic", "n-gems", "technical-issues-management"];
const orderedProjects = [...projects].sort((a, b) => {
  const aIndex = featuredSlugs.indexOf(a.slug);
  const bIndex = featuredSlugs.indexOf(b.slug);
  const aRank = aIndex === -1 ? featuredSlugs.length : aIndex;
  const bRank = bIndex === -1 ? featuredSlugs.length : bIndex;
  return aRank - bRank;
});

export default function ProjectExplorer() {
  return (
    <Section
      id="projects"
      eyebrow="02 · Selected work"
      title="Projects built around real needs."
      description="Web, mobile, business, and healthcare systems—each one a chance to explore a problem and build a practical response."
    >
      <div className="mb-7 flex items-center justify-between gap-4 border-b border-border/15 pb-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
          Portfolio projects
        </p>
        <p className="font-mono text-[11px] text-ink-muted">
          {String(projects.length).padStart(2, "0")} case studies
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {orderedProjects.map((project, index) => {
          const sourceUrl =
            project.githubUrl ??
            project.githubUrlFrontend ??
            project.githubUrlBackend;

          return (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className="project-card surface-card group overflow-hidden rounded-2xl"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="project-image block overflow-hidden border-b border-border/15"
                aria-label={`View ${project.name} case study`}
              >
                <ImageFrame
                  src={project.coverPath}
                  alt={`${project.name} project preview`}
                  label={project.status}
                  className="aspect-[16/10] w-full border-0"
                />
              </Link>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-amber/25 bg-amber/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-amber">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-ink-muted">{project.year}</span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 min-h-[3rem] text-sm leading-6 text-ink-muted">
                  {project.tagline}
                </p>
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-ink-muted/90">
                  {project.overview}
                </p>

                {project.stack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.stack.slice(0, 4).map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[9px] text-ink-muted"
                      >
                        {technology}
                      </li>
                    ))}
                    {project.stack.length > 4 && (
                      <li className="px-1 py-1 font-mono text-[9px] text-ink-muted">
                        +{project.stack.length - 4}
                      </li>
                    )}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border/15 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-ink transition-colors hover:text-amber"
                  >
                    Case study <ArrowUpRight size={13} />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-muted transition-colors hover:text-amber"
                    >
                      <Globe2 size={13} /> Live site
                    </a>
                  )}
                  {sourceUrl && (
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-muted transition-colors hover:text-amber"
                    >
                      <Github size={13} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
