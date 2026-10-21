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
  coverPath: string | null;
  gallery: (string | null)[];
  focusTags: string[];
};

export const projects: Project[] = [
  {
    slug: "ridebuddy",
    index: "01",
    name: "RideBuddy",
    tagline: "Ride-sharing and transportation management",
    year: "2026",
    category: "Mobile · Transportation",
    status: "Academic",
    stack: ["Flutter", "Dart", "Location-based services"],
    overview:
      "A ride-sharing mobile application for transportation management, with a focus on user interaction and location-based services.",
    problem:
      "RideBuddy explores a digital way to support ride sharing and make travel coordination more efficient.",
    solution:
      "A mobile application concept focused on ride sharing, transportation management, user interaction, and location-based services.",
    features: [
      "Ride-sharing and transportation management",
      "User interaction",
      "Location-based services",
    ],
    architecture: ["Mobile application for ride-sharing and travel management"],
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
    focusTags: ["Ride Sharing", "Location Based", "Transportation"],
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
    liveUrl: "https://smart-clinic-peach.vercel.app",
    githubUrl: "https://github.com/kavishka2002/SmartClinicSystem",
    coverPath: "/projects/smart-clinic/dashboard.png",
    gallery: [
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
    status: "Showcased",
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
    githubUrlFrontend: "https://github.com/kavishka2002/FRONTEND_GLOW",
    githubUrlBackend: "https://github.com/kavishka2002/CBC_B",
    coverPath: "/projects/cosmetic-store/glowbeuty.jpg",
    gallery: ["/projects/cosmetic-store/glowbeuty.jpg"],
    focusTags: ["Full-Stack", "Auth & Checkout", "Admin Tooling"],
  },
  {
    slug: "school-management",
    index: "04",
    name: "School Management Web Application",
    tagline: "Student records system for MR Wilpita M.V",
    year: "2025",
    category: "Web · Education",
    status: "Showcased",
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
    githubUrlFrontend: "https://github.com/kavishka2002/School_frontend",
    githubUrlBackend: "https://github.com/kavishka2002/SCHOOL_BACKEND",
    coverPath: "/projects/school-management/smartclink5.jpg",
    gallery: [
      "/projects/school-management/smartclink5.jpg",
      "/projects/school-management/smartclink6.jpg",
    ],
    focusTags: ["CRUD Systems", "Data Filtering", "School Ops"],
  },
  {
    slug: "hospital-management-kamburupitiya",
    index: "05",
    name: "Hospital Management System",
    tagline: "Digital healthcare operations for Base Hospital Kamburupitiya",
    year: "2024",
    category: "Healthcare · Academic",
    status: "Academic",
    stack: [],
    overview:
      "A digital Hospital Management System developed for Base Hospital Kamburupitiya to support healthcare service management and administrative workflows.",
    problem:
      "Hospital services and administrative processes need reliable ways to manage patient information and day-to-day operations.",
    solution:
      "Developed a digital hospital management solution focused on patient information, hospital operations, and healthcare processes.",
    features: [
      "Patient information management",
      "Support for hospital operations",
      "Digital healthcare workflows",
    ],
    architecture: [],
    coverPath: "/projects/Hospital%20Managemnt%20system/hos1.png",
    gallery: [
      "/projects/Hospital%20Managemnt%20system/hos1.png",
      "/projects/Hospital%20Managemnt%20system/hos3.png",
    ],
    focusTags: ["Health Information Systems", "Hospital Operations"],
  },
  {
    slug: "fuelmate",
    index: "06",
    name: "FuelMate",
    tagline: "Vehicle fuel management mobile application",
    year: "—",
    category: "Mobile · Vehicle Management",
    status: "Academic",
    stack: [],
    overview:
      "A mobile application concept for tracking vehicle fuel usage, expenses, mileage, and related information.",
    problem:
      "Drivers need a convenient way to keep track of fuel consumption, vehicle expenses, and mileage.",
    solution:
      "A mobile application concept that brings fuel and vehicle information together to support easier tracking and management.",
    features: [
      "Fuel usage tracking",
      "Vehicle expense tracking",
      "Mileage tracking",
      "Vehicle information management",
    ],
    coverPath: "/projects/Fuilmate/1784956226063.jpg",
    gallery: [
      "/projects/Fuilmate/1784956226063.jpg",
      "/projects/Fuilmate/Screenshot%202026-06-13%20230018.png",
      "/projects/Fuilmate/Screenshot%202026-06-13%20231905.png",
      "/projects/Fuilmate/Screenshot%202026-06-14%20151941.png",
      "/projects/Fuilmate/Screenshot%202026-06-14%20160558.png",
      "/projects/Fuilmate/Screenshot%202026-06-17%20163230.png",
      "/projects/Fuilmate/Screenshot%202026-06-17%20185416.png",
      "/projects/Fuilmate/Screenshot%202026-06-17%20214137.png",
      "/projects/Fuilmate/Screenshot%202026-07-24%20135554.png",
    ],
    focusTags: ["Mobile Application", "Fuel Tracking", "Vehicle Management"],
  },
  {
    slug: "n-gems",
    index: "07",
    name: "N-GEMS",
    tagline: "National Government Electronic Medical System",
    year: "—",
    category: "Healthcare · Government",
    status: "Live",
    stack: [],
    overview:
      "A modern hospital management platform concept designed for government hospitals, with interfaces for key healthcare workflows.",
    problem:
      "Government hospitals need accessible digital workflows to support registration, reception, nursing, and healthcare staff.",
    solution:
      "Designed and developed a platform concept with interfaces for hospital registration, reception, nurses, and healthcare staff management.",
    features: [
      "Hospital registration interface",
      "Reception dashboard",
      "Nurse dashboard",
      "Healthcare staff management",
    ],
    liveUrl: "https://ngems.vercel.app/",
    coverPath: "/projects/NGEMS/1785754864718.jpg",
    gallery: [
      "/projects/NGEMS/1785754864718.jpg",
      "/projects/NGEMS/1785754865384.jpg",
      "/projects/NGEMS/1785754865431.jpg",
      "/projects/NGEMS/1785754865656.jpg",
      "/projects/NGEMS/1785754865846.jpg",
      "/projects/NGEMS/1785754866303.jpg",
      "/projects/NGEMS/1785754866635.jpg",
    ],
    focusTags: ["Digital Health", "Hospital Workflows", "Healthcare Interfaces"],
  },
  {
    slug: "spag-unity-website",
    index: "08",
    name: "SPAG Unity Official Website",
    tagline: "Website for a community-focused non-profit organization",
    year: "—",
    category: "Web · Non-Profit",
    status: "Academic",
    stack: [],
    overview:
      "A responsive, user-friendly official website for SPAG Unity, supporting its education, environment, and social care initiatives.",
    problem:
      "A non-profit organization benefits from a clear online presence that helps people discover its work and engage with its initiatives.",
    solution:
      "Developed an official website to strengthen SPAG Unity's online presence, improve user engagement, and support community-driven activities.",
    features: [
      "Responsive website experience",
      "Information about education initiatives",
      "Information about environment initiatives",
      "Information about social care initiatives",
    ],
    coverPath: "/projects/SPAG%20web/1753848126229.jpg",
    gallery: [
      "/projects/SPAG%20web/1753848126229.jpg",
      "/projects/SPAG%20web/1753848126229%20(1).jpg",
      "/projects/SPAG%20web/1753848126657.jpg",
      "/projects/SPAG%20web/1753848126710.jpg",
      "/projects/SPAG%20web/1753848126875.jpg",
      "/projects/SPAG%20web/1753848127012.jpg",
    ],
    focusTags: ["Responsive Web Design", "Community", "Non-Profit"],
  },
  {
    slug: "technical-issues-management",
    index: "09",
    name: "Technical Issues Management System",
    tagline: "IT support workflow system for the GWUIM Technology Department",
    year: "—",
    category: "Web · Information Systems",
    status: "Live",
    stack: [],
    overview:
      "A centralized system developed for the GWUIM Technology Department to report, track, and manage technical issues.",
    problem:
      "Technical issue reports and their resolution can be difficult to coordinate without a centralized workflow.",
    solution:
      "Developed a system to streamline issue reporting, improve communication, and support efficient resolution of technical problems.",
    features: [
      "Technical issue reporting",
      "Issue tracking and management",
      "Centralized communication",
      "Support for issue resolution workflows",
    ],
    liveUrl: "https://deptlap.vercel.app/",
    coverPath: "/projects/Dept%20Lap/Screenshot%202026-10-21%20162029.png",
    gallery: [
      "/projects/Dept%20Lap/Screenshot%202026-10-21%20162029.png",
      "/projects/Dept%20Lap/Screenshot%202026-10-21%20162156.png",
      "/projects/Dept%20Lap/Screenshot%202026-10-21%20162237.png",
      "/projects/Dept%20Lap/Screenshot%202026-10-21%20162256.png",
      "/projects/Dept%20Lap/Screenshot%202026-10-21%20162304.png",
      "/projects/Dept%20Lap/Screenshot%202026-10-21%20162313.png",
    ],
    focusTags: ["IT Support", "Issue Tracking", "Workflow Management"],
  },
  {
    slug: "pages-stationery-pos",
    index: "10",
    name: "POS System – Pages Stationery",
    tagline: "Sales and inventory management for a stationery business",
    year: "—",
    category: "Business · Point of Sale",
    status: "Academic",
    stack: [],
    overview:
      "A Point of Sale system developed to manage sales transactions, inventory, and business operations for Pages Stationery.",
    problem:
      "Managing transactions and stock manually can make day-to-day retail operations less efficient.",
    solution:
      "Developed a digital POS system to support transaction handling and stock management.",
    features: [
      "Sales transaction management",
      "Inventory management",
      "Business operations support",
    ],
    coverPath: "/projects/POS/1791129333764.jpg",
    gallery: [
      "/projects/POS/1791129333764.jpg",
      "/projects/POS/1791129334613.jpg",
      "/projects/POS/1791129341977.jpg",
      "/projects/POS/1791129344904.jpg",
      "/projects/POS/1791129345005.jpg",
      "/projects/POS/1791129345005%20(1).jpg",
    ],
    focusTags: ["Point of Sale", "Inventory", "Retail Operations"],
  },
  {
    slug: "medical-ai-model",
    index: "11",
    name: "Medical AI Model Development",
    tagline: "Medical question answering using real-world medical Q&A data",
    year: "2026",
    category: "Medical AI · Personal Project",
    status: "Academic",
    badge: "In progress",
    stack: ["Python", "PyTorch", "Hugging Face Transformers", "Scikit-learn"],
    overview:
      "A personal project to develop a domain-specific Medical AI model for medical question answering using the MedQuAD dataset.",
    problem:
      "Medical question-answering models require carefully prepared domain data and a structured training and evaluation process.",
    solution:
      "Processed and prepared MedQuAD data and implemented a machine-learning pipeline with training, validation, and testing datasets.",
    features: [
      "MedQuAD XML extraction",
      "Data cleaning and duplicate removal",
      "Dataset preparation",
      "Training, validation, and testing datasets",
      "Machine-learning pipeline implementation",
    ],
    architecture: [
      "Python data preparation",
      "PyTorch and Hugging Face Transformers",
      "Scikit-learn for machine-learning workflow support",
    ],
    coverPath: "/projects/Mediacl%20Ai/1790480894455.jpg",
    gallery: [
      "/projects/Mediacl%20Ai/1790480894455.jpg",
      "/projects/Mediacl%20Ai/1790480895760.jpg",
      "/projects/Mediacl%20Ai/1790480895894.jpg",
      "/projects/Mediacl%20Ai/1790480896002.jpg",
    ],
    focusTags: ["Medical AI", "Question Answering", "Healthcare Data"],
  },
  {
    slug: "shiftcare",
    index: "12",
    name: "ShiftCare",
    tagline: "Digital nursing shift handover platform",
    year: "2026",
    category: "Web · Healthcare Technology",
    status: "Live",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "REST APIs",
    ],
    overview:
      "ShiftCare is a digital platform designed to make nursing shift transitions more structured, reliable, and efficient, while reducing the risk of important information being missed during handovers.",
    problem:
      "Nursing shift transitions depend on important patient-care updates and pending tasks being communicated clearly between outgoing and receiving nurses.",
    solution:
      "Built a workflow-based platform for nurse accounts, shift scheduling, task management, digital handovers, receiving-nurse selection, confirmations, and notifications.",
    features: [
      "Secure nurse registration and authentication",
      "Shift scheduling and shift management",
      "Real-time shift statuses: Scheduled, On Duty, and Completed",
      "Task management within each shift",
      "Digital nursing shift handover",
      "Recommended receiving nurse selection",
      "Handover confirmation and tracking",
      "Shift and handover notifications",
      "Secure role-based data access",
    ],
    architecture: [
      "Next.js and TypeScript application",
      "REST APIs for application workflows",
      "MongoDB with Mongoose for data management",
      "JWT authentication and role-based access",
      "Tailwind CSS for the user interface",
    ],
    liveUrl: "https://shiftcare-delta.vercel.app/",
    githubUrl: "https://lnkd.in/gFTUZ7xB",
    coverPath: "/projects/Nursing/1791267042592.jpg",
    gallery: [
      "/projects/Nursing/1791267042592.jpg",
      "/projects/Nursing/1791267044250%20(1).jpg",
      "/projects/Nursing/1791267044433.jpg",
      "/projects/Nursing/1791267044566.jpg",
    ],
    focusTags: [
      "Healthcare IT",
      "Clinical Workflow",
      "Nursing Handover",
      "Role-Based Access",
    ],
  },
  {
    slug: "facility-management-base-hospital",
    index: "13",
    name: "Facility Management System",
    tagline: "Facility management system for Base Hospital Kamburupitiya",
    year: "—",
    category: "Healthcare · Facility Management",
    status: "Showcased",
    badge: "Successfully developed",
    stack: ["Java", "MySQL", "NetBeans"],
    overview:
      "A Java and MySQL facility management system developed for Base Hospital Kamburupitiya with a project team.",
    problem:
      "The project focused on supporting facility management at Base Hospital Kamburupitiya through a dedicated software system.",
    solution:
      "Developed a Java application backed by MySQL. The available screenshots show the system login screen and the project team's hospital visits.",
    features: [
      "Facility Management System for Base Hospital Kamburupitiya",
      "Java application with MySQL database",
      "System login interface",
    ],
    architecture: [
      "Java desktop application",
      "MySQL database",
      "Developed using NetBeans",
    ],
    coverPath: "/projects/Facility%20Management%20System/1727674591822.jpg",
    gallery: [
      "/projects/Facility%20Management%20System/1727674591822.jpg",
      "/projects/Facility%20Management%20System/1727674591605.jpg",
      "/projects/Facility%20Management%20System/1727674591908.jpg",
      "/projects/Facility%20Management%20System/1727674593040.jpg",
    ],
    focusTags: ["Hospital Operations", "Java", "MySQL"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
