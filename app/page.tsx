import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectExplorer from "@/components/ProjectExplorer";
import SkillsMap from "@/components/SkillsMap";
import { ExperienceSection, EducationSection } from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatIBuild />
      <ProjectExplorer />
      <SkillsMap />
      <ExperienceSection />
      <EducationSection />
      <Certifications />
      <Leadership />
      <Gallery />
      <Contact />
    </main>
  );
}
