"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/nav";
import { useTheme } from "@/lib/theme-provider";
import { profile } from "@/data/profile";

const primary = navItems.filter((n) =>
  ["home", "projects", "skills", "contact"].includes(n.id)
);

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      {/* Floating top header */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border/15 bg-surface/85 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="font-mono text-[12px] text-ink-muted">
          ~/<span className="text-amber">kavishka</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-border/20 p-1.5 text-ink-muted"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-border/20 p-1.5 text-ink-muted"
          >
            <Menu size={17} />
          </button>
        </div>
      </header>

      {/* Full menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <p className="font-display text-sm text-ink">{profile.name}</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-border/20 p-1.5 text-ink-muted"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 font-mono text-sm text-ink-muted transition-colors active:bg-surface-2"
                  >
                    <Icon size={17} strokeWidth={1.75} className="text-slate" />
                    {item.label.toLowerCase()}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-border/15 bg-surface/90 px-2 py-2 backdrop-blur-xl lg:hidden">
        {primary.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex flex-col items-center gap-1 px-3 py-1.5 text-ink-muted"
            >
              <Icon size={18} strokeWidth={1.75} />
              <span className="font-mono text-[10px]">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
