export type Achievement = {
  name: string;
  event: string;
  year?: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const achievements: Achievement[] = [
  {
    name: "Participant",
    event: "National Best Quality Software Awards (NBQSA)",
    year: "2026",
    description:
      "Participated in the NBQSA, showcasing software development skills and technology solutions.",
  },
  {
    name: "Participant",
    event: "MINISCOPE 2026 · GWUIM",
    year: "2026",
    description:
      "Presented technology-based solutions at the project showcase organized by Gampaha Wickramarachchi University of Indigenous Medicine.",
  },
  {
    name: "Successfully Developed",
    event: "Facility Management System · Base Hospital Kamburupitiya",
    description:
      "Completed a Java and MySQL facility management system with the project team. Thank you to everyone who helped make this project successful.",
    image: "/projects/Facility%20Management%20System/1727674591605.jpg",
    imageAlt:
      "The Facility Management System project team with hospital staff at Base Hospital Kamburupitiya",
  },
];
