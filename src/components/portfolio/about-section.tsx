interface AboutSectionProps {
  about: string;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <div className="animate-fade-in-up [animation-delay:200ms] space-y-3">
      <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
        About
      </h2>
      <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
        {about}
      </p>
    </div>
  );
}
