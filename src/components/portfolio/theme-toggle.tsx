import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  return (
    <button
      id="theme-toggle"
      type="button"
      aria-label="Toggle dark mode"
      className="ml-1.5 flex size-[34px] cursor-pointer items-center justify-center rounded-lg border border-line bg-panel text-muted-foreground transition-colors hover:border-amber hover:text-amber"
    >
      <LuSun id="theme-icon-sun" className="hidden size-4" />
      <LuMoon id="theme-icon-moon" className="hidden size-4" />
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
}
