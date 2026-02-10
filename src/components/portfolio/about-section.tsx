interface AboutSectionProps {
  about: string;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        About
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {about}
      </p>
    </div>
  );
}
