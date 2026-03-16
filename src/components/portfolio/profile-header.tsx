import { Button } from "@/components/ui/button";
import { LuDownload, LuMapPin } from "react-icons/lu";
import type { Social } from "./portfolio-data";

interface ProfileHeaderProps {
  name: string;
  role: string;
  location: string;
  socials: readonly Social[];
}

export function ProfileHeader({ name, role, location, socials }: ProfileHeaderProps) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-sm text-muted-foreground font-mono mt-1">
          {role}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
          <LuMapPin className="size-3" />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex gap-1">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Vinit's ${social.name}`}>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-md hover:border-ring hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
              title={social.name}
            >
              <social.icon className="size-4" />
              <span className="sr-only">{social.name}</span>
            </Button>
          </a>
        ))}
        <a href="/Vinit Sarvade - Resume.pdf" download aria-label="Download Resume">
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-md hover:border-ring hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
            title="Download Resume"
          >
            <LuDownload className="size-4" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
