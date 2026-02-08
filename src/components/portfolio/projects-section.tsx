import { ArrowUpRight, GithubIcon } from "lucide-react";
import type { Project } from "./portfolio-data";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:300ms] space-y-4">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group p-3 rounded-md border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50 transition-all"
          >
            <div className="flex justify-between items-start mb-1.5">
              <h3 className="font-medium text-sm text-gray-900 dark:text-zinc-100 flex items-center gap-1.5">
                {project.title}
                {project.icon && <project.icon className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500" />}
              </h3>
              <div className="flex gap-1.5 shrink-0 ml-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                  <GithubIcon className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" />
                </a>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-2 mb-2">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
