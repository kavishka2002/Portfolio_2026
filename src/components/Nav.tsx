"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const els = navigation.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  const link = (id: string) => `/#${id}`;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/60 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/#home" className="font-mono text-sm font-semibold tracking-widest">{profile.monogram}<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((n) => (
            <li key={n.id}><a href={link(n.id)} aria-current={active === n.id ? "true" : undefined} className={`text-sm transition-colors ${active === n.id ? "text-fg" : "text-mute hover:text-fg"}`}>{n.label}</a></li>
          ))}
          {profile.cv && <li><a href={profile.cv} download className="rounded-full border border-line px-4 py-1.5 text-sm hover:border-accent hover:text-accent">CV</a></li>}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg/95 px-6 py-4 md:hidden">
          {navigation.map((n) => <li key={n.id}><a onClick={() => setOpen(false)} href={link(n.id)} className="block py-3 text-lg">{n.label}</a></li>)}
          {profile.cv && <li><a href={profile.cv} download className="block py-3 text-lg text-accent">Download CV</a></li>}
        </ul>
      )}
    </header>
  );
}
