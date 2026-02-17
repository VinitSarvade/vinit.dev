import { LuExternalLink } from "react-icons/lu";
import type { Certificate } from "./portfolio-data";

interface CertificatesSectionProps {
  certificates: readonly Certificate[];
}

export function CertificatesSection({
  certificates,
}: CertificatesSectionProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        Certificates & Workshops
      </h2>
      <div className="space-y-3">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
            aria-label={cert.title}
          >
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                width={56}
                height={32}
                className="w-14 aspect-video rounded border border-border object-cover shrink-0"
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="flex items-center gap-1.5 text-sm text-foreground group-hover:text-primary transition-colors">
              <span className="group-hover:underline">{cert.title}</span>
              <LuExternalLink className="size-3 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
