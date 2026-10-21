export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Development",
    description: "Frontend development and user interface design.",
    items: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "UI/UX Design Principles"],
  },
  {
    id: "backend",
    label: "Backend Development",
    description: "Server-side application development and APIs.",
    items: ["Node.js", "Express.js", "RESTful API Development", "Python Programming Fundamentals"],
  },
  {
    id: "programming",
    label: "Languages & Programming",
    description: "Languages used in web, mobile, and machine-learning projects.",
    items: ["JavaScript", "TypeScript", "Python", "Dart"],
  },
  {
    id: "mobile",
    label: "Mobile Application Development",
    description: "Mobile development for Android and Flutter.",
    items: ["Android", "Flutter"],
  },
  {
    id: "database",
    label: "Database Management",
    description: "Relational and document database systems.",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    description: "Tools used in the in-progress medical AI project.",
    items: ["PyTorch", "Hugging Face Transformers", "Scikit-learn"],
  },
  {
    id: "cloud",
    label: "Health Information Technology",
    description: "Digital health systems and healthcare information workflows.",
    items: ["Health Information Technology", "Healthcare Data Analytics", "Medical Informatics"],
  },
  {
    id: "tools",
    label: "Tools & Fundamentals",
    description: "Development tools and computing fundamentals.",
    items: ["Git", "GitHub", "Version Control", "Operating Systems Fundamentals"],
  },
];

export type FocusArea = {
  area: string;
  detail: string;
};

// Qualitative focus areas — not fabricated proficiency percentages.
export const focusAreas: FocusArea[] = [
  { area: "Full-Stack Development", detail: "MERN stack and Next.js" },
  { area: "Mobile Development", detail: "Android and Flutter" },
  { area: "Healthcare Technology", detail: "Health information systems" },
  { area: "Medical Informatics", detail: "Healthcare data and information" },
  { area: "Artificial Intelligence", detail: "AI applications in healthcare" },
  { area: "Digital Health", detail: "Privacy-aware clinical systems" },
];

export const whatIBuild = [
  {
    index: "01",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end MERN and Next.js systems — from data model to deployed dashboard.",
  },
  {
    index: "02",
    title: "Mobile Applications",
    description:
      "Mobile applications for Android and Flutter.",
  },
  {
    index: "03",
    title: "Healthcare Information Systems",
    description:
      "Clinic and patient-workflow platforms that respect how care teams actually work.",
  },
  {
    index: "04",
    title: "Medical AI & Healthcare Data",
    description:
      "Exploring machine-learning workflows and AI applications in healthcare.",
  },
  {
    index: "05",
    title: "Smart Automation",
    description:
      "Reminders, alerts, and syncing logic that remove manual busywork.",
  },
  {
    index: "06",
    title: "Real-World Digital Solutions",
    description:
      "Software scoped to an actual problem — a school, a clinic, a driver — not a demo.",
  },
];
