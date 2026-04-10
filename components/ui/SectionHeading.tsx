import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 text-center md:mb-16">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-600 text-[var(--text-primary)] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[var(--text-secondary)]">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
