import type { SkillGroup } from "./portfolio-data";
import { SkillIcon } from "./skill-icons";
import { Tile } from "./tile";

const CATEGORY_COLOR: Record<string, string> = {
  Frontend: "#F2A93B",
  Mobile: "#E2705A",
  Backend: "#5FB4E8",
  Testing: "#8ED081",
  AI: "#C792EA",
  Other: "#9AA3B2",
};

interface SkillsSectionProps {
  skills: readonly SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Tile id="skills" title="Skills" index={2}>
      {/* CSS multi-column masonry: groups of very different sizes pack without gaps. */}
      <div className="-mb-4 columns-1 gap-x-6 sm:columns-2 lg:columns-3">
        {skills.map((group) => (
          <div key={group.category} className="mb-4 inline-block w-full break-inside-avoid align-top">
            <h3 className="mb-2 flex items-center gap-2 font-mono text-[11.5px] font-normal text-text-2">
              <span
                aria-hidden="true"
                className="inline-block size-2 rounded-[2px]"
                style={{ background: CATEGORY_COLOR[group.category] ?? "#999" }}
              />
              {group.category}
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-panel-2 px-2.5 py-1 font-mono text-[12.5px] leading-tight text-text-2 transition hover:-translate-y-px hover:border-amber hover:text-amber"
                >
                  <SkillIcon skill={skill} category={group.category} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Tile>
  );
}
