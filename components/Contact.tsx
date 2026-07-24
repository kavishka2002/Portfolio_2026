"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          09 · Contact
        </p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Let&apos;s Build Something Meaningful
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
          I&apos;m always interested in connecting with people who are passionate about
          technology, innovation, software development, and meaningful digital solutions.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-[13px] text-bg dark:bg-amber"
          >
            <Linkedin size={15} />
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
          <a
            href={profile.github ?? "#"}
            className="inline-flex items-center gap-2 border border-border/25 px-5 py-2.5 font-mono text-[13px] text-ink hover:border-amber hover:text-amber"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={profile.email ? `mailto:${profile.email}` : undefined}
            className="inline-flex items-center gap-2 border border-border/25 px-5 py-2.5 font-mono text-[13px] text-ink-muted"
          >
            <Mail size={15} />
            {profile.email ?? "Email address coming soon"}
          </a>
        </div>

        <p className="mt-16 font-mono text-[11px] text-ink-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </section>
  );
}
