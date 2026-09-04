import type { Certificate } from "./portfolio-data";
import { Tile } from "./tile";

interface CertificatesSectionProps {
  certificates: readonly Certificate[];
  className?: string;
}

export function CertificatesSection({ certificates, className }: CertificatesSectionProps) {
  return (
    <Tile id="certificates" title="Certificates & workshops" className={className} index={4}>
      <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-5">
        {certificates.map((cert) => (
          <li key={cert.title}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 no-underline"
            >
              <img
                src={cert.image}
                alt=""
                width={320}
                height={200}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full rounded-md border border-line bg-panel-2 object-cover transition group-hover:-translate-y-0.5 group-hover:border-amber"
              />
              <span className="text-[12.5px] leading-[1.35] text-text-2 group-hover:text-foreground">
                {cert.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Tile>
  );
}
