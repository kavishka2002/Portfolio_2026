import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Kavishka Sandaruwan`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-bg px-5 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted hover:text-amber"
        >
          <ArrowLeft size={14} />
          back to projects
        </Link>
        <ProjectDetailClient project={project} />
      </div>
    </main>
  );
}
