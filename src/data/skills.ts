import type { SkillGroup } from "@/types";
// "established" = used in real projects. "learning" = exploring. Move items honestly.
export const skills: SkillGroup[] = [
  { title: "Frontend", established: ["Next.js", "React", "TypeScript", "Tailwind CSS"], learning: ["Three.js", "Framer Motion"] },
  { title: "Backend", established: [], learning: ["FastAPI", "Python APIs"] },
  { title: "Mobile", established: ["Flutter"], learning: [] },
  { title: "Databases & Cloud", established: ["Firebase", "Supabase", "PostgreSQL"], learning: [] },
  { title: "AI & Data Science", established: [], learning: ["Python", "Machine learning tools", "Healthcare data analytics"] },
  { title: "Tools", established: ["Git", "GitHub"], learning: [] },
];
