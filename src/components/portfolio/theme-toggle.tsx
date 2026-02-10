import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  return (
    <div>
      <button
        id="theme-toggle"
        type="button"
        aria-label="Toggle dark mode"
        className="flex items-center justify-center size-10 rounded-md border hover:border-ring hover:bg-accent text-muted-foreground hover:text-foreground transition-all cursor-pointer"
      >
        <LuSun id="theme-icon-sun" className="hidden size-4" />
        <LuMoon id="theme-icon-moon" className="hidden size-4" />
      </button>
    </div>
  );
}
