import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import Img from "./Img";
import { Badge, SectionHeading } from "./ui";
import ContactForm from "./ContactForm";
import { profile, socials } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { timeline } from "@/data/experience";

const wrap = "mx-auto max-w-6xl px-6 py-24 md:py-36";

export function About() {
  return (
    <section id="about" className={wrap}>
      <SectionHeading index="01" kicker="ABOUT" title="Software, health, and intelligent systems." />
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:mt-16">
          <Img src={profile.photo} alt="Profile photograph" className="aspect-[4/5] w-full rounded-2xl border border-line" />
        </Reveal>
        <div className="space-y-6 md:col-span-7 md:col-start-6">
          {profile.about.map((p, i) => <Reveal key={i} delay={i * 0.08}><p className={i === 0 ? "text-2xl leading-snug md:text-3xl" : "text-lg leading-relaxed text-mute"}>{p}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className={wrap}>
      <SectionHeading index="02" kicker="SKILLS" title="What I work with." />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05} className="bg-bg p-7">
            <h3 className="font-mono text-xs tracking-[0.18em] text-accent">{g.title.toUpperCase()}</h3>
            {g.established.length > 0 && <div className="mt-5"><p className="text-xs text-mute">Used in projects</p><div className="mt-2 flex flex-wrap gap-2">{g.established.map((s) => <span key={s} className="rounded-full bg-fg/10 px-3 py-1 text-sm">{s}</span>)}</div></div>}
            {g.learning.length > 0 && <div className="mt-5"><p className="text-xs text-mute">Learning / exploring</p><div className="mt-2 flex flex-wrap gap-2">{g.learning.map((s) => <Badge key={s}>{s}</Badge>)}</div></div>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className={wrap}>
      <SectionHeading index="03" kicker="PROJECTS" title="Selected work." />
      <div className="space-y-24 md:space-y-32">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link href={`/projects/${p.slug}`} className={`group grid items-center gap-8 md:grid-cols-12 ${i % 2 ? "" : ""}`}>
              <div className={`overflow-hidden rounded-2xl border border-line md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <Img src={p.image} alt={`${p.title} preview`} className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <p className="font-mono text-xs tracking-[0.18em] text-accent">{p.category.toUpperCase()} · {p.status.toUpperCase()}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{p.title}</h3>
                <p className="mt-4 text-mute">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm group-hover:text-accent">View project <ArrowUpRight size={16} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className={wrap}>
      <SectionHeading index="04" kicker="RESEARCH & TIMELINE" title="Research and learning journey." />
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          {research.map((r) => (
            <Reveal key={r.title} className="rounded-2xl border border-line p-6">
              <p className="font-mono text-xs tracking-[0.15em] text-teal">{r.kind.toUpperCase()} · {r.status.toUpperCase()}</p>
              <h3 className="mt-2 text-xl font-medium">{r.title}</h3>
              <p className="mt-2 text-mute">{r.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">{r.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <div className="mt-4 flex gap-4 text-sm">
                {r.projectSlug && <Link className="hover:text-accent" href={`/projects/${r.projectSlug}`}>Details →</Link>}
                {r.doi && <a className="hover:text-accent" href={r.doi} target="_blank" rel="noopener noreferrer">DOI</a>}
                {r.pdf && <a className="hover:text-accent" href={r.pdf} target="_blank" rel="noopener noreferrer">PDF</a>}
              </div>
            </Reveal>
          ))}
        </div>
        <ol className="relative space-y-8 border-l border-line pl-8">
          {timeline.map((t, i) => (
            <Reveal key={i}><li className="relative">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-mute">{t.period} · {t.type}</p>
              <h3 className="mt-1 text-lg font-medium">{t.title}</h3>
              <p className="text-sm text-teal">{t.org}</p><p className="mt-1 text-sm text-mute">{t.note}</p>
            </li></Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={wrap}>
      <SectionHeading index="05" kicker="CONTACT" title="Let's build something useful." />
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal><p className="text-xl text-mute">I'm open to conversations about software development, HealthTech, and Medical AI — projects, learning opportunities, or collaboration.</p>
          <div className="mt-8 flex flex-wrap gap-3">{socials.map((s) => <a key={s.label} href={s.href} target={s.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm hover:border-accent hover:text-accent">{s.label === "GitHub" && <Github size={16} />}{s.label}</a>)}</div>
        </Reveal>
        <Reveal delay={0.1}><ContactForm email={profile.email} /></Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-mute md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {profile.name} — {profile.tagline}</p>
        <div className="flex items-center gap-5">{socials.map((s) => <a key={s.label} href={s.href} target={s.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" className="hover:text-fg">{s.label}</a>)}<a href="#home" className="hover:text-fg">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
