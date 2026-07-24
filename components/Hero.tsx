"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-border/10 bg-blueprint px-5 pb-16 pt-28 sm:px-10 lg:px-14 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2 font-mono text-[12px] text-ink-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
            </span>
            {profile.availability} — currently building RideBuddy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-amber">Kavishka</span>
            <br />
            Sandaruwan.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 font-mono text-sm text-slate sm:text-base"
          >
            Full-Stack &amp; Mobile Application Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base"
          >
            {profile.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base"
          >
            {profile.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 bg-ink px-5 py-2.5 font-mono text-[13px] text-bg transition-opacity hover:opacity-85 dark:bg-amber dark:text-bg"
            >
              Explore Projects
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/cv.pdf"
              download="Kavishka-Sandaruwan-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-border/25 px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-amber hover:text-amber"
            >
              <FileDown size={14} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 font-mono text-[13px] text-ink-muted transition-colors hover:text-ink"
            >
              <Mail size={14} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right — profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64"
          >
            <div className="absolute inset-0 rounded-full bg-amber/15 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-border/25 bg-surface">
              <Image
                src="/images/profile.jpg"
                alt="Kavishka Sandaruwan"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <p className="mt-6 text-center font-mono text-[11px] text-ink-muted">
            /public/images/profile.jpg
          </p>
        </motion.div>
      </div>
    </section>
  );
}
