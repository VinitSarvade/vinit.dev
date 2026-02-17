import { Separator } from "@/components/ui/separator";
import { AboutSection } from "./portfolio/about-section";
import { CertificatesSection } from "./portfolio/certificates-section";
import { EducationSection } from "./portfolio/education-section";
import { ExperienceSection } from "./portfolio/experience-section";
import { ProfileHeader } from "./portfolio/profile-header";
import { ProjectsSection } from "./portfolio/projects-section";
import { PORTFOLIO_DATA } from "./portfolio/portfolio-data";
import { SkillsSection } from "./portfolio/skills-section";
import { ThemeToggle } from "./portfolio/theme-toggle";

export function MyPortfolio() {
  return (
    <div className="animate-fade-in-up bg-background border rounded-lg overflow-clip">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Sidebar */}
        <div className="md:col-span-4 bg-muted/50 border-r">
          <div className="md:sticky md:top-4 p-5 md:p-8 flex flex-col gap-6 md:gap-8 relative">
            <div className="absolute top-5 right-5 md:top-8 md:right-8 z-10">
              <ThemeToggle />
            </div>

            <ProfileHeader
              name={PORTFOLIO_DATA.profile.name}
              role={PORTFOLIO_DATA.profile.role}
              location={PORTFOLIO_DATA.contact.location}
              socials={PORTFOLIO_DATA.profile.socials}
            />

            <Separator />

            <SkillsSection skills={PORTFOLIO_DATA.skills} />
            <EducationSection education={PORTFOLIO_DATA.education} />
            <CertificatesSection certificates={PORTFOLIO_DATA.certificates} />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-8 p-5 md:p-10 space-y-8 md:space-y-10 bg-background">
          <AboutSection about={PORTFOLIO_DATA.about} />
          <ExperienceSection experience={PORTFOLIO_DATA.experience} />
          <ProjectsSection projects={PORTFOLIO_DATA.projects} />
        </div>
      </div>
    </div>
  );
}
