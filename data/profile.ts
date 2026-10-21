export const profile = {
  name: "Kavishka Sandaruwan",
  role: "Full-Stack & Mobile Application Developer",
  location: "Matara District, Southern Province, Sri Lanka",
  intro:
    "An undergraduate pursuing a Bachelor of Health Science Honours in Health Information and Communication Technology, passionate about building useful digital solutions.",
  statement:
    "I transform real-world problems into practical software solutions using modern web technologies, mobile development, AI, and healthcare technology.",
  availability: "Open to opportunities",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/kavishka-sandaruwan",
  github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/kavishka2002",
  email: process.env.NEXT_PUBLIC_EMAIL || "kavishkasandaruwan68@gmail.com",
  phone: "+94 76 766 0922",
  siteUrl: "https://portfoliokavishka.netlify.app/",
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
    role: "Intern",
    period: "2023 · 6 months",
    location: "Akuressa, Southern Province, Sri Lanka",
    note:
      "Gained practical exposure to banking operations, customer service, and organizational workflows while developing professional communication skills in a structured corporate environment.",
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
      "Bachelor of Health Science Honours (BHSc Hons) in Health Information and Communication Technology",
    period: "Undergraduate",
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
  {
    institution: "G.C.E. Advanced Level Examination",
    program: "Advanced Level",
    period: "2021",
    areas: ["Results: B (2) | C (1)"],
  },
  {
    institution: "G.C.E. Ordinary Level Examination",
    program: "Ordinary Level",
    period: "2018",
    areas: ["Results: A (3) | B (5)"],
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
    provider: "Great Learning",
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
    role: "Sub-Association Director – Social Care · Founding Leadership Committee",
    period: "2025/2026",
    description:
      "Contributed to planning and coordinating social care initiatives and community-focused activities.",
    tags: ["Social Care", "Leadership", "Community Engagement"],
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
  { src: "/projects/Facility%20Management%20System/1727674591822.jpg", category: "Projects", caption: "Facility Management System login screen for Base Hospital Kamburupitiya" },
  { src: "/projects/Facility%20Management%20System/1727674591605.jpg", category: "Projects", caption: "Facility Management System project team at Base Hospital Kamburupitiya" },
  { src: "/projects/Facility%20Management%20System/1727674591908.jpg", category: "Projects", caption: "Facility Management System discussion with hospital staff" },
  { src: "/projects/Facility%20Management%20System/1727674593040.jpg", category: "Projects", caption: "Facility Management System project visit at Base Hospital Kamburupitiya" },
  { src: "/gallery/spag-edspark-1.jpg.jpg", category: "Events", caption: "SPAG unity founding Executive Board" },
  { src: "/gallery/spag-edspark-2.jpg.jpg", category: "Community", caption: "SPAG EdSpark — community engagement" },
  { src: "/gallery/spag-leadership.jpg.jpg", category: "Leadership", caption: "SPAG Unity Founding Leadership Committee" },
  { src: "/gallery/WhatsApp Image 2026-10-21 at 3.52.39 PM.jpeg", category: "Events", caption: "SPAG EdSpark G.C.E. O/L seminar — organizing team" },
  { src: "/gallery/WhatsApp Image 2026-10-21 at 3.52.39 PM (1).jpeg", category: "Community", caption: "SPAG Unity Kindred team at the World Children's Day celebration" },
  { src: "/gallery/WhatsApp Image 2026-10-21 at 3.52.41 PM.jpeg", category: "Events", caption: "SPAG EdSpark G.C.E. O/L seminar at Sri Chandrajothi Maha Vidyalaya, Yakkala" },
  { src: "/gallery/WhatsApp Image 2026-10-21 at 3.52.44 PM.jpeg", category: "Community", caption: "SPAG Unity Kindred community activity at Senarath Nawodya Maha Vidyalaya, Walapane" },
  { src: "/gallery/WhatsApp Image 2026-10-21 at 3.52.45 PM.jpeg", category: "Events", caption: "SPAG SPARK World Children's Day celebration in Walapane" },
  { src: "/gallery/WhatsApp Image 2026-10-21 at 3.52.45 PM (1).jpeg", category: "Events", caption: "SPAG EdSpark seminar session at Sri Chandrajothi Maha Vidyalaya, Yakkala" },
  { src: "/certificates/network.jpg", category: "Certificates", caption: "Cisco — Operating Systems" },
  { src: "/certificates/web.jpg", category: "Certificates", caption: "University of Moratuwa — Web Design for Beginners" },
];
