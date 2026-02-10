import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import type { Project } from "./portfolio-data";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:300ms] space-y-4">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group p-3 rounded-md border hover:border-ring hover:bg-accent/50 transition-all"
          >
            <div className="flex justify-between items-start mb-1.5">
              <h3 className="font-medium text-sm text-foreground flex items-center gap-1.5">
                {project.title}
                {project.icon && <project.icon className="size-3.5 text-muted-foreground" />}
              </h3>
              <div className="flex shrink-0 ml-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="inline-flex items-center justify-center min-h-10 min-w-10 -m-2">
                  <LuGithub className="size-3.5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="inline-flex items-center justify-center min-h-10 min-w-10 -m-2">
                    <LuArrowUpRight className="size-3.5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
