import styles from "./resume.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";

export default function ResumePage() {
  return (
    <section className={styles.resume}>
      <div className={styles.resume__inner}>
        <h1 className={styles.resume__title}>Resume</h1>
        <div className={styles.resume__actions}>
          <a
            href="/Owen_Dupree_Resume_.pdf"
            download
            className={linkStyles["link-primary"]}
          >
            <span className={linkStyles["link-primary__btn"]}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
            <span className={linkStyles["link-primary__label"]}>Download Resume</span>
          </a>
        </div>
        <div className={styles.resume__viewer}>
          <iframe
            src="/Owen_Dupree_Resume_.pdf"
            title="Owen Dupree Resume"
            className={styles.resume__iframe}
          />
        </div>
      </div>
    </section>
  );
}
