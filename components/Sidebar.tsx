"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { navItems } from "@/lib/nav";
import { useTheme } from "@/lib/theme-provider";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 z-40 hidden h-screen w-[272px] flex-col border-r border-border/15 bg-surface/80 backdrop-blur-xl lg:flex"
    >
      {/* Profile */}
      <div className="flex items-center gap-3 border-b border-border/10 px-6 py-6">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border/30 bg-surface-2">
          <div className="flex h-full w-full items-center justify-center font-display text-sm text-amber">
            KS
          </div>
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-medium text-ink">
            {profile.name}
          </p>
          <p className="truncate font-mono text-[11px] text-ink-muted">
            Full-Stack &amp; Mobile Dev
          </p>
        </div>
      </div>

      {/* Path breadcrumb — signature element */}
      <div className="border-b border-border/10 px-6 py-3">
        <p className="font-mono text-[11px] text-ink-muted">
          ~/kavishka<span className="text-amber">/{active}</span>
        </p>
      </div>

      {/* File-tree nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="relative ml-3 border-l border-border/15">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                <span
                  className={`absolute -left-px top-0 h-full w-px transition-colors ${
                    isActive ? "bg-amber" : "bg-transparent"
                  }`}
                />
                <a
                  href={`#${item.id}`}
                  className={`group flex items-center gap-2.5 py-2 pl-4 pr-3 text-[13px] transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <Icon
                    size={15}
                    strokeWidth={1.75}
                    className={isActive ? "text-amber" : "text-ink-muted group-hover:text-slate"}
                  />
                  <span className="font-mono">{item.label.toLowerCase()}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer: socials + theme */}
      <div className="border-t border-border/10 px-6 py-5">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-mono text-moss">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
          </span>
          {profile.availability}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded p-1.5 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <Linkedin size={16} strokeWidth={1.75} />
            </a>
            <a
              href={profile.github ?? "#contact"}
              aria-label="GitHub"
              className="rounded p-1.5 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <Github size={16} strokeWidth={1.75} />
            </a>
            <a
              href={profile.email ? `mailto:${profile.email}` : "#contact"}
              aria-label="Email"
              className="rounded p-1.5 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <Mail size={16} strokeWidth={1.75} />
            </a>
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-border/20 p-1.5 text-ink-muted transition-colors hover:text-amber"
          >
            {theme === "dark" ? (
              <Sun size={15} strokeWidth={1.75} />
            ) : (
              <Moon size={15} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
