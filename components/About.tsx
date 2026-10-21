"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, Lightbulb, Stethoscope } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/profile";

const approach = [
  {
    icon: Lightbulb,
    title: "Start with the problem",
    text: "Understand the people and process before choosing a technical solution.",
  },
  {
    icon: Stethoscope,
    title: "Design for real workflows",
    text: "Build clear, practical experiences around the needs of their users.",
  },
  {
    icon: HeartPulse,
    title: "Keep learning",
    text: "Explore how software, data, and AI can support better digital health systems.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About me"
      title="Software with a human purpose."
      description="I’m a Health Information and Communication Technology undergraduate building practical experience through software projects."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="surface-card h-fit rounded-2xl p-6 sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            A little about me
          </p>
          <p className="mt-5 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Curious about how technology can make complex work clearer.
          </p>
          <p className="mt-5 text-sm leading-7 text-ink-muted">{profile.statement}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Health IT", "Full-stack development", "Mobile apps", "Medical AI"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/20 bg-surface-2/50 px-3 py-1.5 font-mono text-[10px] text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-3">
          {approach.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="surface-card group flex gap-4 rounded-xl p-5 sm:gap-5 sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber/20 bg-amber/10 text-amber transition-colors group-hover:bg-amber group-hover:text-bg">
                <Icon size={19} strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-muted">{text}</p>
              </div>
              <ArrowUpRight
                size={15}
                className="ml-auto mt-1 shrink-0 text-ink-muted/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
