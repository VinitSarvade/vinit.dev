import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <div className="mt-auto">
      <button
        id="theme-toggle"
        type="button"
        aria-label="Toggle dark mode"
        className="flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 transition-all cursor-pointer"
      >
        <Sun id="theme-icon-sun" className="hidden h-4 w-4" />
        <Moon id="theme-icon-moon" className="hidden h-4 w-4" />
      </button>
    </div>
  );
}
