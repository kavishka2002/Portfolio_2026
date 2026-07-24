import {
  Home,
  User,
  FolderGit2,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Images,
  Mail,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "leadership", label: "Leadership", icon: Users },
  { id: "gallery", label: "Gallery", icon: Images },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

export type NavId = (typeof navItems)[number]["id"];
