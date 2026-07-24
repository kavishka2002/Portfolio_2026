export const profile = {
  name: "Kavishka Sandaruwan",
  role: "Full-Stack & Mobile Application Developer",
  location: "Matara District, Southern Province, Sri Lanka",
  intro:
    "An undergraduate in Health Information and Communication Technology passionate about building intelligent, scalable, and user-focused digital solutions.",
  statement:
    "I transform real-world problems into practical software solutions using modern web technologies, mobile development, AI, and healthcare technology.",
  availability: "Open to opportunities",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/kavishka-sandaruwan-125382297/",
  github: process.env.NEXT_PUBLIC_GITHUB || undefined,
  email: process.env.NEXT_PUBLIC_EMAIL || undefined,
  resumePath: "/cv.pdf",
};

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location: string;
  note?: string;
};

export const experience: ExperienceItem[] = [
  {
    org: "Bank of Ceylon",
    role: "Former Trainee — Internship",
    period: "Jan 2023 — Present",
    location: "Akuressa, Southern Province, Sri Lanka",
  },
];

export type EducationItem = {
  institution: string;
  program: string;
  period: string;
  areas: string[];
};

export const education: EducationItem[] = [
  {
    institution: "Gampaha Wickramarachchi University of Indigenous Medicine",
    program:
      "Bachelor of Health Science Honours in Information and Communication Technology",
    period: "Apr 2023 — Apr 2027",
    areas: [
      "Information Technology",
      "Health Information Technology",
      "Software Development",
      "Mobile Application Development",
      "Cybersecurity",
      "Data Privacy",
      "Healthcare Information Systems",
    ],
  },
];

export type Certification = {
  name: string;
  provider: string;
  date?: string;
  credentialId?: string;
  fileHref?: string;
};

export const certifications: Certification[] = [
  {
    name: "Operating Systems",
    provider: "Cisco",
    date: "Mar 2024",
    fileHref: "/certificates/network.jpg",
  },
  {
    name: "Web Design for Beginners",
    provider: "University of Moratuwa",
    credentialId: "PlnlaaYEOl",
    fileHref: "/certificates/web.jpg",
  },
  {
    name: "Android Application Development",
    provider: "GreatLearning",
    fileHref: "/certificates/android.jpg",
  },
  {
    name: "Full-Stack Web Development (MERN)",
    provider: "SKYREK",
    fileHref: "/certificates/mern.jpg",
  },
  {
    name: "Python for Beginners",
    provider: "University of Moratuwa",
    date: "Oct 2023",
    credentialId: "EPqewzCfSy",
    fileHref: "/certificates/python.jpg",
  },
];

export type LeadershipItem = {
  org: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export const leadership: LeadershipItem[] = [
  {
    org: "SPAG Unity",
    role: "Founding Leadership Committee",
    period: "2025/2026",
    description:
      "Part of the founding Executive Board, Sub-Association Coordinators, and Functional Coordinators driving strategy and operations across Edify, Kindred, and Environs.",
    tags: ["Leadership", "Collaboration", "Strategy", "Community Engagement"],
  },
  {
    org: "SPAG EdSpark",
    role: "O/L Seminar Series",
    period: "May 21",
    description:
      "Organized by the SPAG Unity – Edify Sub Association at Yakkala Chandrajothi Maha Vidyalaya Auditorium, empowering students through an O/L seminar series.",
    tags: ["Youth Empowerment", "Community Service", "Education"],
  },
];

export const certificationTraining = {
  name: "Full-Stack Web Development (MERN) Certification",
  provider: "SKYREK",
  areas: [
    "React.js Development",
    "Node.js & Express.js Backend Development",
    "MongoDB Database Management",
    "REST API Development",
    "Full-Stack Application Architecture",
  ],
};

export const galleryCategories = ["Projects", "Events", "Leadership", "Certificates", "Community"] as const;

export type GalleryImage = {
  src: string;
  category: (typeof galleryCategories)[number];
  caption: string;
};

export const gallery: GalleryImage[] = [
  { src: "/gallery/spag-edspark-1.jpg.jpg", category: "Events", caption: "SPAG EdSpark O/L seminar series" },
  { src: "/gallery/spag-edspark-2.jpg.jpg", category: "Community", caption: "SPAG EdSpark — community engagement" },
  { src: "/gallery/spag-leadership.jpg.jpg", category: "Leadership", caption: "SPAG Unity Founding Leadership Committee" },
  { src: "/certificates/network.jpg", category: "Certificates", caption: "Cisco — Operating Systems" },
  { src: "/certificates/web.jpg", category: "Certificates", caption: "University of Moratuwa — Web Design for Beginners" },
];
