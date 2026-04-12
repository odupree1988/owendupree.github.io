import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experience, skills, education, certifications } from "@/data/experience";
import styles from "./ExperienceTimeline.module.css";

function cls(...names: string[]) {
  return names.join(" ");
}

export function ExperienceTimeline() {
  return (
    <section className={styles.timeline}>
      <div className={styles.timeline__inner}>
        {/* Experience */}
        <ScrollReveal>
          <h2 className={styles.timeline__heading}>Experience</h2>
        </ScrollReveal>

        <div className={styles.timeline__jobs}>
          {experience.map((job, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={styles.timeline__job}>
                <h3 className={styles["timeline__job-role"]}>{job.role}</h3>
                <p className={styles["timeline__job-meta"]}>
                  {job.company} &middot; {job.period}
                </p>
                <ul className={styles["timeline__job-bullets"]}>
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className={styles["timeline__job-bullet"]}>
                      &bull; {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills */}
        <ScrollReveal>
          <h2 className={cls(styles.timeline__heading, styles["timeline__heading--spaced"])}>
            Skills
          </h2>
          <div className={styles.timeline__skills}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <span className={styles["timeline__skill-category"]}>{category}:</span>
                <span className={styles["timeline__skill-items"]}>{items.join(", ")}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal>
          <h2 className={cls(styles.timeline__heading, styles["timeline__heading--spaced"])}>
            Certifications
          </h2>
          <div className={styles.timeline__certs}>
            {certifications.map((cert, i) => (
              <div key={i}>
                <p className={styles["timeline__cert-title"]}>{cert.title}</p>
                <p className={styles["timeline__cert-issuer"]}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <h2 className={cls(styles.timeline__heading, styles["timeline__heading--spaced"])}>
            Education
          </h2>
          <p className={styles["timeline__edu-degree"]}>{education.degree}</p>
          <p className={styles["timeline__edu-school"]}>
            {education.school} &middot; {education.period}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
