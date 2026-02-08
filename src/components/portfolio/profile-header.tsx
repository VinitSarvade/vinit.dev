import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import type { Social } from "./portfolio-data";

interface ProfileHeaderProps {
  name: string;
  role: string;
  location: string;
  socials: readonly Social[];
}

export function ProfileHeader({ name, role, location, socials }: ProfileHeaderProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:50ms] space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100">
          {name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400 font-mono mt-1">
          {role}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-zinc-400 mt-2">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex gap-2">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-md border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 transition-all"
            >
              <social.icon className="h-4 w-4" />
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}
