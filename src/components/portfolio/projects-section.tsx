import type { CSSProperties } from "react";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import type { Project } from "./portfolio-data";
import { Tile } from "./tile";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

const link =
  "inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-mono text-xs text-muted-foreground no-underline transition-colors hover:border-line hover:text-amber";

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Tile id="projects" title="Projects">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="rv relative flex flex-col gap-2.5 rounded-[10px] border border-line bg-panel-2 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-amber hover:shadow-[0_12px_30px_-16px_var(--glow)] before:absolute before:top-0 before:right-3.5 before:left-3.5 before:h-0.5 before:origin-left before:scale-x-0 before:rounded-sm before:bg-amber before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:before:scale-x-100"
            style={{ "--i": index } as CSSProperties}
          >
            <h3 className="flex items-center gap-2 font-display text-[1.05rem] font-semibold tracking-[-0.01em] text-foreground">
              {project.title}
              {project.ai && (
                <span className="rounded bg-amber-soft px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em] text-amber">
                  AI
                </span>
              )}
            </h3>
            <p className="flex-1 text-[13.5px] text-text-2">{project.desc}</p>
            <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-0.5 flex gap-1.5">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={link}>
                <LuGithub className="size-3.5" />
                Code
                <span className="sr-only">for {project.title} on GitHub</span>
              </a>
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className={link}>
                  Live
                  <LuArrowUpRight className="size-3.5" />
                  <span className="sr-only">demo of {project.title}</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Tile>
  );
}
