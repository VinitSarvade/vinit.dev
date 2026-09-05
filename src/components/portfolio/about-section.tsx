import type { Pillar } from "./portfolio-data";
import { Tile } from "./tile";

interface AboutSectionProps {
  about: readonly string[];
  pillars: readonly Pillar[];
  className?: string;
}

export function AboutSection({ about, pillars, className }: AboutSectionProps) {
  return (
    <Tile id="about" title="About" className={className} index={0}>
      <div className="space-y-3">
        {about.map((paragraph) => (
          <p key={paragraph} className="max-w-[68ch] text-[15.5px] text-text-2">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-[18px] grid gap-3 border-t border-line pt-[18px] sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title}>
            <h3 className="mb-0.5 font-display text-[0.95rem] font-semibold text-foreground before:mr-2 before:inline-block before:h-0.5 before:w-3.5 before:bg-amber before:align-middle before:content-['']">
              {pillar.title}
            </h3>
            <p className="text-[13px] leading-snug text-muted-foreground">{pillar.text}</p>
          </div>
        ))}
      </div>
    </Tile>
  );
}
