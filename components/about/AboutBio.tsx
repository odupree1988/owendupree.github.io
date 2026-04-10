import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

export function AboutBio() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            About
          </h1>
        </ScrollReveal>
        <div className="mt-8 space-y-5">
          {siteConfig.aboutBio.map((paragraph, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <p className="text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
