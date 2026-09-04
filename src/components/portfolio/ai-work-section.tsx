import { LuSparkles } from "react-icons/lu";
import type { AiWork } from "./portfolio-data";
import { Tile } from "./tile";

interface AiWorkSectionProps {
  items: readonly AiWork[];
  className?: string;
}

export function AiWorkSection({ items, className }: AiWorkSectionProps) {
  return (
    <Tile title="AI work" className={className} index={1}>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-[auto_1fr] gap-3 border-t border-line py-3 first:border-t-0 first:pt-0 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-[30px] place-items-center rounded-lg bg-amber-soft text-amber"
            >
              <LuSparkles className="size-3.5" />
            </span>
            <div>
              <h3 className="font-display text-[0.98rem] font-semibold text-foreground">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.45] text-text-2">{item.text}</p>
              <p className="mt-0.5 font-mono text-[11px] text-amber">{item.meta}</p>
            </div>
          </li>
        ))}
      </ul>
    </Tile>
  );
}
