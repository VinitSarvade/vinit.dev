import { Fragment, type CSSProperties } from "react";
import { LuDownload, LuMapPin } from "react-icons/lu";
import type { Experience, Social } from "./portfolio-data";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  /** Phrase inside the tagline to set in the accent colour. */
  taglineHighlight?: string;
  lead: string;
  socials: readonly Social[];
  resume: string;
  current: Experience;
  availability: string;
  location: string;
  timezone: string;
}

const btn =
  "inline-flex h-10 items-center gap-2 rounded-[9px] border border-line-2 bg-panel-2 px-4 text-sm font-medium text-foreground transition hover:-translate-y-px hover:border-amber hover:text-amber";

export function Hero({
  name,
  role,
  tagline,
  taglineHighlight,
  lead,
  socials,
  resume,
  current,
  availability,
  location,
  timezone,
}: HeroProps) {
  // Set the highlighted phrase in the accent colour, if the tagline contains it.
  const [before, after] = taglineHighlight ? tagline.split(taglineHighlight) : [tagline];

  return (
    <section
      aria-labelledby="hero-name"
      className="relative grid items-end gap-8 overflow-hidden rounded-[14px] border border-line bg-panel bg-linear-to-br from-panel via-panel via-55% to-panel-2 p-6 md:grid-cols-[1fr_300px] md:p-8"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -top-[160px] -right-[60px] size-[560px] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent_70%)]"
      />

      <div className="relative">
        <p
          className="hero-in mb-3.5 flex items-center gap-2 font-mono text-[12.5px] tracking-[0.06em] text-amber"
          style={{ "--d": "0s" } as CSSProperties}
        >
          <span aria-hidden="true" className="size-[7px] rounded-full bg-amber shadow-[0_0_0_4px_var(--amber-soft)]" />
          {role}
        </p>
        <h1
          id="hero-name"
          className="mb-3.5 font-display text-[clamp(2.8rem,6.5vw,4.8rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance text-foreground"
        >
          {name.split(" ").map((word, i) => (
            <Fragment key={word}>
              {i > 0 && " "}
              <span className="hero-word inline-block" style={{ "--i": i } as CSSProperties}>
                {word}
              </span>
            </Fragment>
          ))}
        </h1>
        <p
          className="hero-in mb-5 max-w-[30ch] font-display text-[clamp(1.2rem,2.1vw,1.5rem)] tracking-[-0.01em] text-text-2"
          style={{ "--d": ".25s" } as CSSProperties}
        >
          {after === undefined ? (
            tagline
          ) : (
            <>
              {before}
              <b className="font-medium text-amber">{taglineHighlight}</b>
              {after}
            </>
          )}
        </p>
        <p className="hero-in mb-6 max-w-[58ch] text-[15.5px] text-text-2" style={{ "--d": ".35s" } as CSSProperties}>
          {lead}
        </p>
        <div className="hero-in flex flex-wrap items-center gap-2.5" style={{ "--d": ".45s" } as CSSProperties}>
          <a
            href={resume}
            download
            className={`${btn} border-amber bg-amber text-amber-ink hover:text-amber-ink hover:brightness-108`}
          >
            <LuDownload className="size-4" />
            Download résumé
          </a>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className={`${btn} w-10 justify-center px-0`}
            >
              <social.icon aria-hidden="true" className="size-4 shrink-0" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <aside
        aria-label="Current role and availability"
        className="hero-in relative rounded-xl border border-line/60 bg-panel/50 p-[18px] text-[13.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_-28px_rgba(0,0,0,0.6)] backdrop-blur-xl backdrop-saturate-150 dark:bg-panel/35"
        style={{ "--d": ".5s" } as CSSProperties}
      >
        <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">Current role</p>
        <p className="font-display text-[1.05rem] leading-tight font-semibold text-foreground">{current.role}</p>
        <p className="mt-0.5 font-mono text-[12.5px] text-amber">@ {current.company}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {current.period} · {current.location}
        </p>
        <div className="mt-3.5 grid gap-1.5 border-t border-line pt-3 font-mono text-xs text-text-2">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-[7px] rounded-full bg-ok shadow-[0_0_0_3px_color-mix(in_oklab,var(--ok)_25%,transparent)]"
            />
            {availability}
          </span>
          <span className="flex items-center gap-1.5">
            <LuMapPin className="size-3.5 text-muted-foreground" />
            {location} · {timezone}
          </span>
        </div>
      </aside>
    </section>
  );
}
