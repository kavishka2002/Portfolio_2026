// Edit your personal details here. Empty strings are hidden automatically (no dead links).
export const profile = {
  name: "Kavishka Sandaruwan",
  monogram: "KS",
  tagline: "Building intelligent digital experiences.",
  intro: "Software developer exploring the intersection of software engineering, healthcare technology, and artificial intelligence.",
  about: [
    "I am an IT undergraduate developing practical software engineering skills through full-stack and mobile projects.",
    "I am especially interested in Health Information Technology, Medical AI, and healthcare data analytics, including privacy-preserving approaches to digital health.",
    "I like building practical solutions: start with a real problem, keep the design simple, and improve it step by step.",
  ],
  siteUrl: "https://example.com", // TODO: your deployed URL
  email: "",        // TODO: e.g. "you@example.com"
  github: "https://github.com/kavishka2002",
  linkedin: "",     // TODO: LinkedIn profile URL
  cv: "",           // TODO: e.g. "/cv/Kavishka-Sandaruwan-CV.pdf" (file in public/cv/)
  photo: null as string | null, // TODO: e.g. "/images/profile/profile.webp"
};
export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: profile.email ? `mailto:${profile.email}` : "" },
].filter((s) => s.href);
