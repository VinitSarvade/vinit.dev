import type { Social } from "./portfolio-data";

interface SiteFooterProps {
  name: string;
  location: string;
  socials: readonly Social[];
}

export function SiteFooter({ name, location, socials }: SiteFooterProps) {
  return (
    <footer className="border-t border-line py-6 pb-12 font-mono text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4 px-5">
        <span>
          © {new Date().getFullYear()} {name} · {location}
        </span>
        <span className="flex gap-2">
          {socials.map((social, i) => (
            <span key={social.name} className="flex gap-2">
              {i > 0 && <span aria-hidden="true">·</span>}
              <a
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="no-underline transition-colors hover:text-amber"
              >
                {social.name.toLowerCase()}
              </a>
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
