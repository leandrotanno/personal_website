import Layout from "@/components/Layout";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";
import { sectionConfig } from "@/utils/constants";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      {sectionConfig.showProjectsSection && <ProjectsSection />}
      {sectionConfig.showSkillsSection && <SkillsSection />}
      {sectionConfig.showAboutSection && <AboutSection />}
      {sectionConfig.showContactSection && <ContactSection />}
    </Layout>
  );
}
