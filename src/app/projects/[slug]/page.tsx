import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui";
import { Footer } from "@/components/Sections";
import { projects, getProject } from "@/data/projects";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.summary, openGraph: { title: p.title, description: p.summary } } : {};
}
const H = ({ children }: { children: React.ReactNode }) => <h2 className="font-mono text-xs tracking-[0.2em] text-accent">{String(children).toUpperCase()}</h2>;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length], next = projects[(i + 1) % projects.length];
  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 2);
  return (
    <>
      <article className="mx-auto max-w-5xl px-6 pb-24 pt-28">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-mute hover:text-fg"><ArrowLeft size={16} /> All projects</Link>
        <p className="mt-8 font-mono text-xs tracking-[0.18em] text-accent">{p.category.toUpperCase()} · {p.status.toUpperCase()}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-xl text-mute">{p.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-sm hover:border-accent"><Github size={16} /> Repository</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-sm hover:border-accent"><ExternalLink size={16} /> Live demo</a>}
        </div>
        <Img src={p.image} alt={`${p.title} hero`} className="mt-10 aspect-[16/8] w-full rounded-2xl border border-line" />

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal><H>Overview</H><p className="mt-3 text-mute">{p.overview}</p></Reveal>
          <Reveal><H>Problem</H><p className="mt-3 text-mute">{p.problem}</p></Reveal>
          <Reveal><H>My contribution</H><p className="mt-3 text-mute">{p.role}</p></Reveal>
          <Reveal><H>Technology</H><div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div></Reveal>
        </div>

        <Reveal className="mt-16"><H>Main features</H>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">{p.features.map((f) => <li key={f} className="rounded-xl border border-line p-4 text-mute">{f}</li>)}</ul></Reveal>

        <Reveal className="mt-16"><H>Architecture / workflow</H>
          <ol className="mt-4 flex flex-col gap-2 md:flex-row md:items-stretch">
            {p.workflow.map((w, k) => (<li key={w} className="flex flex-1 items-center gap-2"><div className="flex-1 rounded-xl border border-line bg-panel p-4 text-sm"><span className="font-mono text-xs text-accent">{String(k + 1).padStart(2, "0")}</span><p className="mt-1">{w}</p></div>{k < p.workflow.length - 1 && <span aria-hidden className="hidden text-mute md:block">→</span>}</li>))}
          </ol></Reveal>

        {p.extra && <div className="mt-16 grid gap-6 md:grid-cols-2">{p.extra.map((e) => <Reveal key={e.label}><H>{e.label}</H><p className="mt-3 text-mute">{e.text}</p></Reveal>)}</div>}

        <Reveal className="mt-16"><H>Gallery</H>
          <div className="mt-4 grid gap-4 md:grid-cols-3">{p.gallery.map((g, k) => <Img key={k} src={g} alt={`${p.title} screenshot ${k + 1}`} className="aspect-[4/3] w-full rounded-xl border border-line" />)}</div></Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal><H>Challenges & solutions</H>{p.challenges.map((c) => <div key={c.challenge} className="mt-3 text-mute"><p className="text-fg">{c.challenge}</p><p>{c.solution}</p></div>)}</Reveal>
          <Reveal><H>Lessons learned</H><ul className="mt-3 list-disc space-y-1 pl-5 text-mute">{p.lessons.map((l) => <li key={l}>{l}</li>)}</ul></Reveal>
        </div>

        <nav aria-label="Project navigation" className="mt-20 grid gap-4 border-t border-line pt-8 md:grid-cols-2">
          <Link href={`/projects/${prev.slug}`} className="rounded-xl border border-line p-5 hover:border-accent"><span className="text-xs text-mute">← Previous</span><p className="mt-1">{prev.title}</p></Link>
          <Link href={`/projects/${next.slug}`} className="rounded-xl border border-line p-5 text-right hover:border-accent"><span className="text-xs text-mute">Next →</span><p className="mt-1">{next.title}</p></Link>
        </nav>
        <p className="mt-8 text-xs text-mute">Related: {related.map((r, k) => <span key={r.slug}>{k > 0 && ", "}<Link className="hover:text-fg" href={`/projects/${r.slug}`}>{r.title}</Link></span>)}</p>
      </article>
      <Footer />
    </>
  );
}
