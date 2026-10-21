import type { ResearchItem } from "@/types";
// Never mark anything "Published" unless it truly is. Add doi / pdf only when real.
export const research: ResearchItem[] = [
  { title: "Uncertainty-aware voice-based clinical history-taking for Sinhala-speaking patients", kind: "Research project", status: "In progress",
    summary: "Research in progress on next-best-question selection for voice-based clinical history-taking in Sinhala.",
    tags: ["Health IT", "Medical AI", "Sinhala speech", "Uncertainty"], projectSlug: "health-it-research" },
  { title: "[Add a literature review, poster or paper]", kind: "Learning", status: "Personal learning",
    summary: "Placeholder entry. Add real work in src/data/research.ts.", tags: ["Medical Informatics"] },
];
