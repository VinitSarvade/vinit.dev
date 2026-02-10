import type { Education } from "./portfolio-data";

interface EducationSectionProps {
  education: readonly Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:150ms] space-y-3">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-medium text-foreground text-sm">
              {edu.degree}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {edu.school}
            </p>
            <p className="text-[10px] text-muted-foreground mt-1 font-mono">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
