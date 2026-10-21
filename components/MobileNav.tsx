"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/nav";
import { useTheme } from "@/lib/theme-provider";
import { profile } from "@/data/profile";

const primary = navItems.filter((item) =>
  ["home", "projects", "skills", "contact"].includes(item.id)
);

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const handleMenuKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuToggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleMenuKeys);
    return () => window.removeEventListener("keydown", handleMenuKeys);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border/15 bg-surface/95 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a href="#home" className="font-display text-sm font-semibold text-ink">
          {profile.name}
          <span className="ml-2 font-mono text-[9px] font-normal text-amber">PORTFOLIO</span>
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="rounded-lg border border-border/20 p-2 text-ink-muted"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            ref={menuToggleRef}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            className="rounded-lg border border-border/20 p-2 text-ink-muted"
          >
            <Menu size={16} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-bg/98 px-5 pb-10 pt-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border/15 pb-4">
              <div>
                <p className="font-display text-sm font-semibold text-ink">{profile.name}</p>
                <p className="mt-1 font-mono text-[10px] text-ink-muted">Navigate portfolio</p>
              </div>
              <button
                ref={closeButtonRef}
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="rounded-lg border border-border/20 p-2 text-ink-muted"
              >
                <X size={17} />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="mt-5 flex flex-col gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.025 }}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
                  >
                    <Icon size={17} className="text-slate" />
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border/15 bg-surface/95 px-1 pb-[max(env(safe-area-inset-bottom),0.25rem)] pt-2 backdrop-blur-xl lg:hidden"
      >
        {primary.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg text-ink-muted transition-colors hover:text-amber"
            >
              <Icon size={16} strokeWidth={1.8} />
              <span className="font-mono text-[9px]">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
