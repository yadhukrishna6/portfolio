/**
 * Home Page — assembles all portfolio sections in order.
 * Each section is a self-contained component handled in /components/sections/.
 */
import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutSection }      from "@/components/sections/AboutSection";
import { SkillsSection }     from "@/components/sections/SkillsSection";
import { ProjectsSection }   from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection }    from "@/components/sections/ContactSection";
import { Footer }            from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
