import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experience, skills, education, certifications } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* Experience */}
        <ScrollReveal>
          <h2 className="mb-8 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text-primary)]">
            Experience
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="border-l-2 border-[var(--border-hover)] pl-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)]">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-tertiary)]">
                  {job.company} &middot; {job.period}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-[var(--text-secondary)]"
                    >
                      &bull; {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills */}
        <ScrollReveal className="mt-16">
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text-primary)]">
            Skills
          </h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <span className="text-sm font-medium capitalize text-[var(--text-primary)]">
                  {category}:
                </span>
                <span className="ml-2 text-sm text-[var(--text-secondary)]">
                  {items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal className="mt-16">
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text-primary)]">
            Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {cert.title}
                </p>
                <p className="text-xs text-[var(--text-tertiary)]">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal className="mt-16">
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text-primary)]">
            Education
          </h2>
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {education.degree}
          </p>
          <p className="text-xs text-[var(--text-tertiary)]">
            {education.school} &middot; {education.period}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
