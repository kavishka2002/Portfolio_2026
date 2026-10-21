import type { Project } from "@/types";
// All project content lives here. Empty links are hidden; null images show designed placeholders.
const TBD = "To be added — edit this entry in src/data/projects.ts.";
const base = { problem: TBD, role: "[Describe your contribution]", challenges: [{ challenge: "[Challenge]", solution: "[Solution]" }], lessons: ["[Lesson learned]"], image: null, gallery: [null, null, null] as (string | null)[] };
export const projects: Project[] = [
  { ...base, slug: "ridebuddy-fuelmate", title: "RideBuddy / FuelMate", category: "Mobile application", status: "In progress",
    summary: "A Flutter-based ride and fuel-related mobile application.",
    overview: "A Flutter mobile app project around rides and fuel. Verify and update this description with the real scope.",
    features: ["[Verified feature 1]", "[Verified feature 2]", "[Verified feature 3]"],
    stack: ["Flutter", "Supabase", "PostgreSQL"],
    workflow: ["Flutter client", "Supabase backend", "PostgreSQL data", "Realtime / location (if implemented)"] },
  { ...base, slug: "n-gems-hms", title: "N-GEMS Hospital Management System", category: "Healthcare software", status: "In progress",
    summary: "A hospital management web application built with Next.js, Tailwind CSS and Firebase.",
    overview: "A healthcare software project. List only modules you actually implemented.",
    features: ["[Implemented module 1]", "[Implemented module 2]"], stack: ["Next.js", "Tailwind CSS", "Firebase"],
    workflow: ["Next.js web client", "Firebase Authentication", "Firestore data", "Role-based screens (if implemented)"] },
  { ...base, slug: "medical-ai", title: "Medical AI / Healthcare AI", category: "AI experiments", status: "Prototype",
    summary: "Learning-focused machine learning experiments and prototypes for healthcare data.",
    overview: "Experiments and prototypes, not finished products. Add datasets, models and metrics only when real.",
    features: ["[Experiment 1]", "[Experiment 2]"], stack: ["Python", "Machine learning"],
    workflow: ["Dataset", "Preprocessing", "Model training", "Evaluation"],
    extra: [{ label: "Datasets", text: "[Add]" }, { label: "Models", text: "[Add]" }, { label: "Evaluation metrics", text: "[Add real results only]" }] },
  { ...base, slug: "health-it-research", title: "Voice-Based Clinical History-Taking (Sinhala)", category: "Research", status: "In progress",
    summary: "Uncertainty-aware voice-based clinical history-taking for Sinhala-speaking patients using next-best-question selection.",
    overview: "Research in progress. Completion has not been verified.", problem: "[Describe the research problem]",
    features: ["Next-best-question selection", "Uncertainty-aware reasoning", "Voice interaction in Sinhala"],
    stack: ["Python", "Speech technologies", "Machine learning"],
    workflow: ["Patient speech", "Speech recognition", "Uncertainty estimation", "Next-best-question selection", "Clinical history"],
    extra: [{ label: "Objectives", text: "[Add]" }, { label: "Methodology", text: "[Add]" }, { label: "Current progress", text: "[Add]" }, { label: "Future work", text: "[Add]" }] },
];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
