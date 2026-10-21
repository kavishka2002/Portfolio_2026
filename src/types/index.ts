export type Status = "In progress" | "Prototype" | "Completed" | "Planned";
export interface Project {
  slug: string; title: string; category: string; status: Status; summary: string;
  overview: string; problem: string; role: string; features: string[]; stack: string[];
  workflow: string[]; challenges: { challenge: string; solution: string }[]; lessons: string[];
  extra?: { label: string; text: string }[];
  /** null = designed placeholder. Set a path like "/images/projects/ngems/cover.webp" */
  image: string | null; gallery: (string | null)[];
  github?: string; demo?: string;
}
export interface SkillGroup { title: string; established: string[]; learning: string[] }
export interface TimelineItem { period: string; title: string; org: string; note: string; type: "Education" | "Project" | "Certification" | "Experience" }
export interface ResearchItem { title: string; kind: "Research project" | "Literature review" | "Publication" | "Poster" | "Learning"; status: "In progress" | "Published" | "Planned" | "Personal learning"; summary: string; tags: string[]; projectSlug?: string; doi?: string; pdf?: string }
