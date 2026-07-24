export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces people actually use.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs and application logic.",
    items: ["Node.js", "Express.js", "REST APIs", "Firebase Functions"],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Offline-first native experiences.",
    items: ["Flutter", "Dart", "SQFlite", "Native MethodChannels"],
  },
  {
    id: "database",
    label: "Database",
    description: "Where the data actually lives.",
    items: ["MongoDB", "PostgreSQL", "Firebase Firestore"],
  },
  {
    id: "cloud",
    label: "Cloud & Hosting",
    description: "Shipping and keeping things running.",
    items: ["Vercel", "Supabase", "Firebase"],
  },
  {
    id: "ai",
    label: "AI Integration",
    description: "Language models inside real products.",
    items: ["Google Gemini API"],
  },
  {
    id: "maps",
    label: "Maps & Location",
    description: "Getting people where they're going.",
    items: ["Google Maps API", "GPS", "PDR"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    description: "The rest of the toolbox.",
    items: ["Git & GitHub", "Google OAuth", "Nodemailer"],
  },
];

export type FocusArea = {
  area: string;
  detail: string;
};

// Qualitative focus areas — not fabricated proficiency percentages.
export const focusAreas: FocusArea[] = [
  { area: "Full-Stack Development", detail: "React / Next.js + Node.js" },
  { area: "Mobile Development", detail: "Flutter, offline-first architecture" },
  { area: "Healthcare Technology", detail: "Clinic & patient workflow systems" },
  { area: "AI Integration", detail: "Gemini-powered assistants" },
  { area: "Database Systems", detail: "MongoDB, PostgreSQL, Firestore" },
  { area: "Cloud Platforms", detail: "Supabase, Firebase, Vercel" },
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
      "Flutter apps built offline-first, syncing cleanly once connectivity returns.",
  },
  {
    index: "03",
    title: "Healthcare Information Systems",
    description:
      "Clinic and patient-workflow platforms that respect how care teams actually work.",
  },
  {
    index: "04",
    title: "AI-Powered Applications",
    description:
      "Practical AI features — assistants and insights — grounded in real user tasks.",
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
