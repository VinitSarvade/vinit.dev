import type { Education } from "./portfolio-data";

interface EducationSectionProps {
  education: readonly Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:150ms] space-y-3">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-900 dark:text-zinc-100 text-sm">
              {edu.degree}
            </h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
              {edu.school}
            </p>
            <p className="text-[10px] text-gray-400 dark:text-zinc-500 mt-1 font-mono">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
