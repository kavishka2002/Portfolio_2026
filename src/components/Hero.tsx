"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "./ui";
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(110,168,255,0.12),transparent_55%)]" />
      <HeroScene />
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="relative mx-auto w-full max-w-6xl px-6 pt-24">
        <motion.p variants={item} className="font-mono text-xs tracking-[0.25em] text-accent">SOFTWARE DEVELOPER · HEALTH IT · MEDICAL AI</motion.p>
        <motion.h1 variants={item} className="mt-5 text-5xl font-semibold uppercase leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
          {profile.name.split(" ")[0]}<br /><span className="text-fg/60">{profile.name.split(" ")[1]}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-xl text-fg/90 md:text-2xl">{profile.tagline}</motion.p>
        <motion.p variants={item} className="mt-4 max-w-lg text-mute">{profile.intro}</motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <Button href="#projects">Explore My Work</Button>
          {profile.cv ? <Button href={profile.cv} variant="ghost" external>Download CV</Button> : <Button href="#about" variant="ghost">About Me</Button>}
        </motion.div>
      </motion.div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute transition-colors hover:text-fg"><ArrowDown className="animate-bounce motion-reduce:animate-none" size={20} /></a>
    </section>
  );
}
