import { fillYears, yearsOfExperience } from "@/lib/experience";
import { AboutSection } from "./portfolio/about-section";
import { AiWorkSection } from "./portfolio/ai-work-section";
import { CertificatesSection } from "./portfolio/certificates-section";
import { ContactSection } from "./portfolio/contact-section";
import { EducationSection } from "./portfolio/education-section";
import { ExperienceSection } from "./portfolio/experience-section";
import { Hero } from "./portfolio/hero";
import { PORTFOLIO_DATA } from "./portfolio/portfolio-data";
import { ProjectsSection } from "./portfolio/projects-section";
import { SiteFooter } from "./portfolio/site-footer";
import { SkillsSection } from "./portfolio/skills-section";
import { TopBar } from "./portfolio/top-bar";

export function MyPortfolio() {
  const { profile, contact, experience } = PORTFOLIO_DATA;
  const years = yearsOfExperience(experience);
  const about = PORTFOLIO_DATA.about.map((p) => fillYears(p, years));
  const linkedin = profile.socials.find((s) => s.name === "LinkedIn")!.url;

  return (
    <>
      <TopBar />
      <main id="main-content" className="mx-auto max-w-[1180px] px-5">
        <div className="grid gap-3.5 pt-7 pb-10">
          <Hero
            name={profile.name}
            role={profile.role}
            tagline={fillYears(profile.tagline, years)}
            taglineHighlight={profile.taglineHighlight}
            lead={about[0]}
            socials={profile.socials}
            resume={profile.resume}
            current={experience[0]}
            availability={profile.availability}
            location={contact.location}
            timezone={contact.timezone}
          />

          <div className="grid grid-cols-12 gap-3.5">
            <AboutSection
              about={about.slice(1)}
              pillars={PORTFOLIO_DATA.pillars}
              className="col-span-12 lg:col-span-7"
            />
            <AiWorkSection items={PORTFOLIO_DATA.aiWork} className="col-span-12 lg:col-span-5" />
          </div>

          <SkillsSection skills={PORTFOLIO_DATA.skills} />

          <div className="grid grid-cols-12 gap-3.5">
            <EducationSection education={PORTFOLIO_DATA.education} className="col-span-12 lg:col-span-4" />
            <CertificatesSection
              certificates={PORTFOLIO_DATA.certificates}
              className="col-span-12 lg:col-span-8"
            />
          </div>

          <ExperienceSection experience={experience} />
          <ProjectsSection projects={PORTFOLIO_DATA.projects} />

          <ContactSection
            headline={contact.headline}
            blurb={contact.blurb}
            email={contact.email}
            linkedin={linkedin}
          />
        </div>
      </main>
      <SiteFooter name={profile.name} location={contact.location} socials={profile.socials} />
    </>
  );
}
