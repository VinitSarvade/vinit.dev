import { LuChevronDown } from "react-icons/lu";
import type { Experience } from "./portfolio-data";
import { Tile } from "./tile";

interface ExperienceSectionProps {
  experience: readonly Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Tile id="experience" title="Experience">
      {experience.map((job, index) => (
        <details
          key={`${job.company}-${job.period}`}
          open={index === 0}
          data-state={index === 0 ? "open" : "closed"}
          className="group border-t border-line first:border-t-0"
        >
          <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 rounded-lg px-2 py-4 transition-colors hover:bg-panel-2 sm:grid-cols-[170px_1fr_auto] [&::-webkit-details-marker]:hidden">
            <span className="col-span-full font-mono text-[12.5px] tabular-nums text-muted-foreground sm:col-span-1">
              {job.period}
            </span>
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-[1.1rem] font-semibold tracking-[-0.01em] text-foreground">
                {job.role}
              </h3>
              <span className="font-mono text-[12.5px] text-amber">@ {job.company}</span>
              <span className="text-[13.5px] text-muted-foreground">{job.location}</span>
              {index === 0 && (
                <span className="rounded bg-amber-soft px-1.5 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-amber">
                  Current
                </span>
              )}
            </span>
            <LuChevronDown
              aria-hidden="true"
              className="size-4 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
            />
          </summary>

          {/* Wrapper carries no padding so its height can animate cleanly from zero. */}
          <div data-body className="overflow-hidden">
          <div className="grid gap-5 px-2 pt-1 pb-6 sm:grid-cols-[170px_1fr]">
            <div aria-hidden="true" className="rail relative hidden sm:block" />
            <div>
              {job.summary && (
                <p className="mb-3 max-w-[76ch] text-[14.5px] text-foreground">{job.summary}</p>
              )}
              <ul className="m-0 grid max-w-[76ch] list-none gap-2 p-0">
                {job.description.map((line) => (
                  <li
                    key={line}
                    className="relative pl-4 text-[14.5px] text-text-2 before:absolute before:top-0 before:left-0 before:font-mono before:text-xs before:leading-[1.9] before:text-amber before:content-['>']"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              {job.note && (
                <p className="mt-3 max-w-[76ch] rounded-r-md border-l-2 border-amber bg-panel-2 px-2.5 py-2 font-mono text-xs text-muted-foreground">
                  {job.note}
                </p>
              )}
            </div>
          </div>
          </div>
        </details>
      ))}
    </Tile>
  );
}
