interface AboutSectionProps {
  about: readonly string[];
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        About
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
