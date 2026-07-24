export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  year: string;
  category: string;
  status: "Showcased" | "Live" | "Academic";
  badge?: string;
  stack: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture?: string[];
  challenges?: string;
  learned?: string;
  liveUrl?: string;
  githubUrl?: string;
  githubUrlFrontend?: string;
  githubUrlBackend?: string;
  coverPath: string;
  gallery: string[];
  focusTags: string[];
};

export const projects: Project[] = [
  {
    slug: "ridebuddy",
    index: "01",
    name: "RideBuddy",
    tagline: "Smart Fuel & Vehicle Assistant",
    year: "2026",
    category: "Mobile · AI · Offline-first",
    status: "Showcased",
    badge: "MINISCOPE 2026 Showcase Project",
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Google Gemini API",
      "SQFlite",
      "Google Maps API",
      "GPS + PDR",
      "Native MethodChannels",
    ],
    overview:
      "RideBuddy is an intelligent vehicle-management companion that helps drivers track fuel, find nearby services, and stay safe — even without a signal.",
    problem:
      "Vehicle owners juggle scattered paperwork for service intervals, insurance, and license renewals, and lose connectivity right when they need help finding fuel or a repair garage.",
    solution:
      "A Flutter app with an offline-first architecture: trips, mileage, and reminders are captured locally in SQFlite and reconciled with Supabase the moment a connection returns, while an AI assistant surfaces fuel insights on request.",
    features: [
      "AI-powered vehicle assistant & fuel insights",
      "Nearby fuel stations, service centers & repair garages",
      "GPS-based navigation & location services",
      "Smart reminders for service, insurance & license renewals",
      "Mileage tracking and vehicle analytics",
      "Multiple vehicle management",
      "Offline-first experience with automatic synchronization",
      
    ],
    architecture: [
      "Flutter (Dart) client with SQFlite as the local source of truth",
      "Supabase (PostgreSQL, Realtime, Edge Functions) as the sync backend",
      "Google Gemini API for AI-assisted fuel & vehicle insights",
      "Google Maps API + GPS/PDR for indoor-aware navigation",
      "Native MethodChannels bridging to GSM for emergency SMS alerts",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    coverPath: "/projects/ridebuddy/ridebuddy.jpg",
    gallery: [
      "/projects/ridebuddy/ride.jpg",
      "/projects/ridebuddy/ridebuddy.jpg",
      "/projects/ridebuddy/ridebuddy1.jpeg",
      "/projects/ridebuddy/ridebuddy2.jpeg",
      "/projects/ridebuddy/ridebuddy3.jpeg",
      "/projects/ridebuddy/ridebudyy.jpg",
    ],
    focusTags: ["Offline First", "AI Powered", "Location Aware", "Safety Focused"],
  },
  {
    slug: "smart-clinic",
    index: "02",
    name: "Smart Clinic Management System",
    tagline: "End-to-end digital healthcare operations",
    year: "2026",
    category: "Web · Healthcare Tech",
    status: "Live",
    stack: ["Next.js", "Firebase", "Vercel"],
    overview:
      "A fully integrated clinic operations platform covering appointments, records, prescriptions, and pharmacy inventory in one workflow.",
    problem:
      "Clinics often run scheduling, patient records, and pharmacy stock as disconnected paper or spreadsheet processes, slowing down care and losing visibility into stock levels.",
    solution:
      "A Next.js application with Firebase authentication and data, giving admins, doctors, and staff role-specific dashboards over a single, real-time patient and pharmacy workflow.",
    features: [
      "Online appointment booking system",
      "Doctor schedule and availability management",
      "Patient records and medical history management",
      "Prescription and consultation tracking",
      "Real-time patient queue management",
      "Secure authentication powered by Firebase",
      "Responsive dashboards for Admin, Doctors, and Staff",
      "Medicine stock management with low-stock alerts",
      "Prescription-based medicine issuing",
      "Consultation, doctor performance & pharmacy analytics",
    ],
    architecture: [
      "Next.js for the frontend and API layer",
      "Firebase for authentication and real-time data",
      "Vercel for deployment and hosting",
    ],
    liveUrl: "https://lnkd.in/g5YBJ5y5",
    githubUrl: "https://lnkd.in/gVqAafir",
    coverPath: "/projects/smart-clinic/cover.png",
    gallery: [
      "/projects/smart-clinic/cover.png",
      "/projects/smart-clinic/dashboard.png",
      "/projects/smart-clinic/appointments.png",
      "/projects/smart-clinic/pharmacy.png",
    ],
    focusTags: ["Real-Time Queue", "Role-Based Dashboards", "Pharmacy Inventory", "Reporting"],
  },
  {
    slug: "cosmetic-store",
    index: "03",
    name: "Cosmetic Store",
    tagline: "MERN e-commerce web app",
    year: "2025",
    category: "Web · E-commerce",
    status: "Live",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Nodemailer", "Google OAuth", "Tailwind CSS"],
    overview:
      "A full-stack e-commerce application for buying and selling cosmetics, with secure authentication and an admin panel for order and user management.",
    problem:
      "Small cosmetics sellers need a straightforward, secure storefront with real checkout and account recovery, not a heavyweight commerce platform.",
    solution:
      "A MERN-stack store with Google login and Nodemailer-based password recovery, backed by an admin panel for products, orders, and users.",
    features: [
      "Add, edit & remove products",
      "Cart & checkout functionality",
      "Admin panel for order & user management",
      "Google login & secure password reset via Nodemailer",
      "Data stored securely in MongoDB",
    ],
    architecture: [
      "React.js frontend",
      "Node.js + Express.js backend",
      "MongoDB database",
      "Nodemailer + Google OAuth for email & auth",
    ],
    liveUrl: "https://lnkd.in/daSbGC7g",
    githubUrl: "https://lnkd.in/dXabVkyB",
    coverPath: "/projects/cosmetic-store/glowbeuty.jpg",
    gallery: [
      "/projects/cosmetic-store/glowbeuty.jpg",
      "/projects/cosmetic-store/schoolmangemnt.jpg",
      "/projects/cosmetic-store/smartclink5.jpg",
    ],
    focusTags: ["Full-Stack", "Auth & Checkout", "Admin Tooling"],
  },
  {
    slug: "school-management",
    index: "04",
    name: "School Management Web Application",
    tagline: "Student records system for MR Wilpita M.V",
    year: "2025",
    category: "Web · Education",
    status: "Live",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    overview:
      "A student-records system built for MR Wilpita M.V School to simplify how staff add, filter, and maintain student information.",
    problem:
      "School staff needed a simple way to manage student records by class without relying on scattered paper registers.",
    solution:
      "A MERN application where staff can add, edit, filter by class, and remove student records, with data stored securely in MongoDB.",
    features: [
      "Add and manage student details",
      "Filter students by class or grade",
      "Edit and update student information",
      "Delete students from the database",
      "Data stored securely in MongoDB",
    ],
    architecture: [
      "React.js frontend",
      "Node.js + Express.js backend",
      "MongoDB database",
    ],
    liveUrl: "https://lnkd.in/dKvsgv4B",
    githubUrl: "https://lnkd.in/dtCQ3BMN",
    coverPath: "/projects/school-management/smartclink5.jpg",
    gallery: [
      "/projects/school-management/smartclink5.jpg",
      "/projects/school-management/smartclink6.jpg",
    ],
    focusTags: ["CRUD Systems", "Data Filtering", "School Ops"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
