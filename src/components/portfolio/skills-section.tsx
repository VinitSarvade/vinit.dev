import type { SkillGroup } from "./portfolio-data";
import { SkillIcon } from "./skill-icons";

interface SkillsSectionProps {
  skills: readonly SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        Skills
      </h2>
      <div className="space-y-3">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-[10px] font-mono font-medium text-muted-foreground mb-1.5">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-card border rounded text-[11px] font-medium text-muted-foreground transition-colors duration-150 hover:bg-accent/70"
                >
                  <SkillIcon skill={skill} category={group.category} />
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
