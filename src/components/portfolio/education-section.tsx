import type { Education } from "./portfolio-data";
import { Tile } from "./tile";

interface EducationSectionProps {
  education: readonly Education[];
  className?: string;
}

export function EducationSection({ education, className }: EducationSectionProps) {
  return (
    <Tile id="education" title="Education" className={className} index={3}>
      {education.map((edu) => (
        <div key={edu.degree} className="border-t border-line py-3 first:border-t-0 first:pt-0 last:pb-0">
          <h3 className="font-display text-base font-semibold text-foreground">{edu.degree}</h3>
          <p className="text-sm text-text-2">{edu.school}</p>
          <p className="mt-0.5 font-mono text-xs text-amber">{edu.period}</p>
        </div>
      ))}
    </Tile>
  );
}
