import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TileProps {
  id?: string;
  title: string;
  className?: string;
  /** Stagger index for the scroll-reveal animation. */
  index?: number;
  children: ReactNode;
}

/** A bordered panel with the small mono running head used across the page. */
export function Tile({ id, title, className, index = 0, children }: TileProps) {
  const headingId = `${id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "rv relative overflow-hidden rounded-[14px] border border-line bg-panel p-5 md:p-6",
        className,
      )}
      style={{ "--i": index } as CSSProperties}
    >
      <h2
        id={headingId}
        className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-muted-foreground before:size-1.5 before:shrink-0 before:rounded-[1px] before:bg-amber before:content-[''] after:h-px after:flex-1 after:bg-line after:content-['']"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
