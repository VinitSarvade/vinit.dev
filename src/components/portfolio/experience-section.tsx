import { Button } from "@/components/ui/button";
import { LuChevronDown } from "react-icons/lu";
import type { Experience } from "./portfolio-data";

interface ExperienceSectionProps {
  experience: readonly Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:250ms] space-y-6">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        Experience
      </h2>

      <div className="relative">
        <div
          id="experience-collapsible"
          className="max-h-[50vh] overflow-hidden transition-[max-height] duration-500 ease-in-out"
        >
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-foreground text-sm">
                    {job.role}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground shrink-0 ml-4">
                    {job.period}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  {job.company} · {job.location}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-outside ml-3 marker:text-border">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlay */}
        <div
          id="experience-gradient"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent transition-opacity duration-500"
        />
      </div>

      <div className="flex justify-center">
        <Button
          id="experience-toggle"
          variant="outline"
          size="sm"
          aria-expanded={false}
          aria-controls="experience-collapsible"
          className="rounded-full px-5 text-xs font-mono font-medium text-muted-foreground bg-linear-to-b from-card to-muted border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] dark:hover:shadow-[0_2px_6px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span id="experience-toggle-text">Show more</span>
          <LuChevronDown id="experience-toggle-icon" className="size-3.5 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
}
