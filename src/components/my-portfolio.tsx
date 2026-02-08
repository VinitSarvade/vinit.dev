import { Separator } from "@/components/ui/separator";
import { AboutSection } from "./portfolio/about-section";
import { EducationSection } from "./portfolio/education-section";
import { ExperienceSection } from "./portfolio/experience-section";
import { ProfileHeader } from "./portfolio/profile-header";
import { ProjectsSection } from "./portfolio/projects-section";
import { PORTFOLIO_DATA } from "./portfolio/portfolio-data";
import { SkillsSection } from "./portfolio/skills-section";
import { ThemeToggle } from "./portfolio/theme-toggle";

export function MyPortfolio() {
  return (
    <div className="animate-fade-in-up h-[calc(100vh-2rem)] bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        {/* Sidebar */}
        <div className="md:col-span-4 bg-gray-50/50 dark:bg-zinc-900/50 border-r border-gray-200 dark:border-zinc-800 p-8 flex flex-col gap-8 overflow-y-auto transition-colors duration-300">
          <ProfileHeader
            name={PORTFOLIO_DATA.profile.name}
            role={PORTFOLIO_DATA.profile.role}
            location={PORTFOLIO_DATA.contact.location}
            socials={PORTFOLIO_DATA.profile.socials}
          />

          <Separator className="bg-gray-200 dark:bg-zinc-800" />

          <SkillsSection skills={PORTFOLIO_DATA.skills} />
          <EducationSection education={PORTFOLIO_DATA.education} />
          <ThemeToggle />
        </div>

        {/* Main Content */}
        <div className="md:col-span-8 p-8 md:p-10 space-y-10 overflow-y-auto bg-white dark:bg-zinc-950 transition-colors duration-300">
          <AboutSection about={PORTFOLIO_DATA.about} />
          <ExperienceSection experience={PORTFOLIO_DATA.experience} />
          <ProjectsSection projects={PORTFOLIO_DATA.projects} />
        </div>
      </div>
    </div>
  );
}
