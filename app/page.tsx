import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectExplorer from "@/components/ProjectExplorer";
import SkillsMap from "@/components/SkillsMap";
import { ExperienceSection, EducationSection } from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import ResearchInterests from "@/components/ResearchInterests";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <WhatIBuild />
      <ProjectExplorer />
      <SkillsMap />
      <ResearchInterests />
      <ExperienceSection />
      <EducationSection />
      <Certifications />
      <Leadership />
      <Achievements />
      <Gallery />
      <Contact />
    </main>
  );
}
