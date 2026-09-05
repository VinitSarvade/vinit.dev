import { LuLinkedin, LuMail } from "react-icons/lu";

interface ContactSectionProps {
  headline: string;
  blurb: string;
  email: string;
  linkedin: string;
}

export function ContactSection({ headline, blurb, email, linkedin }: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="rv relative overflow-hidden rounded-[14px] bg-linear-to-br from-amber to-amber-2 p-5 text-amber-ink md:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[60px] -bottom-[80px] size-[220px] rounded-full bg-white/15"
      />
      <h2
        id="contact-heading"
        className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] opacity-75 before:size-1.5 before:shrink-0 before:rounded-[1px] before:bg-current before:content-[''] after:h-px after:flex-1 after:bg-current/30 after:content-['']"
      >
        Contact
      </h2>
      <div className="relative flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="mb-2 font-display text-[1.7rem] leading-[1.1] font-semibold tracking-[-0.02em] text-balance">
            {headline}
          </p>
          <p className="max-w-[48ch] text-sm opacity-85">{blurb}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex h-10 items-center gap-2 rounded-[9px] bg-amber-ink px-4 text-sm font-medium text-amber transition hover:-translate-y-px"
          >
            <LuMail className="size-4" />
            {email}
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-[9px] border border-current/35 px-4 text-sm font-medium transition hover:-translate-y-px"
          >
            <LuLinkedin className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
