"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { navItems } from "@/lib/nav";
import { useTheme } from "@/lib/theme-provider";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      initial={{ x: -18, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-0 top-0 z-40 hidden h-screen w-[252px] flex-col border-r border-border/15 bg-surface/90 backdrop-blur-xl lg:flex"
    >
      <a href="#home" className="flex items-center gap-3 border-b border-border/15 px-5 py-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-amber/30 bg-surface-2">
          <Image
            src="/images/profile.jpg"
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-0.5 truncate font-mono text-[9px] text-ink-muted">
            Health IT · Software
          </p>
        </div>
      </a>

      <div className="border-b border-border/15 px-5 py-3">
        <p className="font-mono text-[10px] text-ink-muted">
          portfolio<span className="text-amber"> / {active}</span>
        </p>
      </div>

      <nav aria-label="Main navigation" className="flex-1 overflow-y-auto px-3 py-4">
        <p className="mb-3 px-3 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-muted/70">
          Explore
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] transition-colors ${
                    isActive
                      ? "bg-amber/10 font-medium text-ink"
                      : "text-ink-muted hover:bg-surface-2 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-amber"
                    />
                  )}
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    className={isActive ? "text-amber" : "text-ink-muted group-hover:text-slate"}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border/15 px-5 py-4">
        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] text-moss">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          {profile.availability}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <Github size={15} />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <Linkedin size={15} />
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <Mail size={15} />
              </a>
            )}
          </div>
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="rounded-lg border border-border/20 p-2 text-ink-muted transition-colors hover:border-amber/50 hover:text-amber"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
