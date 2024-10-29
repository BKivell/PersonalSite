// app/page.tsx

import BradSection from "@/components/BradSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <BradSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}