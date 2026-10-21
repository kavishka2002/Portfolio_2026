"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: profile.email ? `mailto:${profile.email}` : "", icon: Mail },
].filter((item) => item.href);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-20 overflow-hidden border-b border-border/15 px-5 pb-20 pt-24 sm:px-10 sm:pb-24 sm:pt-28 lg:min-h-[740px] lg:px-14 lg:pb-28 lg:pt-32"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute -right-48 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-slate/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/25 bg-moss/5 px-3.5 py-2 font-mono text-[11px] text-moss sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
            </span>
            {profile.availability}
            <span className="mx-1 h-3 w-px bg-border/30" />
            {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-3 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[4.7rem]"
          >
            Kavishka
            <br />
            <span className="hero-highlight">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl font-display text-xl font-medium leading-snug text-ink sm:text-2xl"
          >
            Building useful software at the intersection of{" "}
            <span className="text-slate">technology</span> and{" "}
            <span className="text-violet">healthcare.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-5 max-w-xl text-[15px] leading-7 text-ink-muted sm:text-base"
          >
            {profile.intro} I enjoy turning practical problems into thoughtful web and mobile
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="button-primary">
              Explore my projects <ArrowUpRight size={15} />
            </a>
            {profile.resumePath && (
              <a href={profile.resumePath} download className="button-secondary">
                <FileDown size={15} /> View my CV
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-9 flex flex-wrap items-center gap-2"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="social-link"
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center"
          aria-label="Profile portrait"
          role="group"
        >
          <div className="hero-portrait-stage">
            <div className="hero-portrait-backplate" aria-hidden="true" />
            <div className="hero-portrait-connector" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-portrait-shell">
              <Image
                src="/images/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 55vw, 330px"
                className="hero-portrait-image"
              />
              <div className="hero-portrait-sheen" aria-hidden="true" />
            </div>

            <div className="absolute left-0 top-[20%] z-10 rounded-xl border border-border/25 bg-surface/90 px-3 py-2 shadow-lg backdrop-blur">
              <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">Focus</p>
              <p className="mt-1 text-xs font-medium text-ink">Digital Health</p>
            </div>
            <div className="absolute bottom-[12%] right-0 z-10 rounded-xl border border-border/25 bg-surface/90 px-3 py-2 shadow-lg backdrop-blur">
              <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">Building with</p>
              <p className="mt-1 text-xs font-medium text-ink">Web · Mobile · AI</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-amber lg:flex"
      >
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  );
}
