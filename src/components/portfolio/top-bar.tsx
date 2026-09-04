import { ThemeToggle } from "./theme-toggle";

const NAV = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
] as const;

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-4 px-5">
        <a href="#" className="flex items-center gap-2.5 font-mono text-[13px] text-foreground">
          <span
            aria-hidden="true"
            className="grid size-[26px] place-items-center rounded-md bg-amber font-display text-xs font-bold tracking-tight text-amber-ink"
          >
            VS
          </span>
          vinit.dev
        </a>
        <nav aria-label="Sections" className="flex items-center gap-1">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              data-nav
              className="nav-link relative hidden rounded-md px-2.5 py-1.5 font-mono text-[12.5px] text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
