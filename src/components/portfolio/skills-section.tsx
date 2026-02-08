import type { SkillGroup } from "./portfolio-data";

interface SkillsSectionProps {
  skills: readonly SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:100ms] space-y-4">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
        Skills
      </h2>
      <div className="space-y-3">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-[10px] font-mono font-medium text-gray-400 dark:text-zinc-500 mb-1.5">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded text-[11px] font-medium text-gray-600 dark:text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
