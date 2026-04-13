"use client";

import Image from "next/image";
import styles from "./Skills.module.css";

interface Skill {
  name: string;
  icon?: string;
}

const ROW_1: Skill[] = [
  { name: "JavaScript", icon: "/logos/JavaScript-logo.png" },
  { name: "TypeScript", icon: "/logos/Typescript.svg.png" },
  { name: "React", icon: "/logos/React-icon.svg.png" },
  { name: "Next.js", icon: "/logos/nextjs-logo.svg" },
  { name: "Vue.js", icon: "/logos/Vue.js_Logo_2.svg.png" },
  { name: "Hydrogen", icon: "/logos/hydrogen-logo.webp" },
  { name: "Node.js", icon: "/logos/node-js-logo.png" },
  { name: "Astro", icon: "/logos/astro-logo.png" },
  { name: "GitHub", icon: "/logos/Octicons-mark-github.svg" },
];

const ROW_2: Skill[] = [
  { name: "Shopify", icon: "/logos/Shopify-logo.jpeg" },
  { name: "Liquid", icon: "/logos/liquid-logo.png" },
  { name: "GraphQL", icon: "/logos/GraphQL_Logo.svg.png" },
  { name: "Tailwind CSS", icon: "/logos/tailwind-logo.png" },
  { name: "CSS", icon: "/logos/CSS_logo.png" },
  { name: "HTML", icon: "/logos/HTML-logo.png" },
  { name: "Contentful", icon: "/logos/Contentful-logo.png" },
  { name: "Git", icon: "/logos/git-icon-logo.svg" },
  { name: "Remix", icon: "/logos/remix-logo.png" },
  { name: "Buddy", icon: "/logos/buddy-logo.png" },
  { name: "Atlassian", icon: "/logos/Atlassian-Logo.jpg" },
];

function MarqueeRow({
  items,
  reverse,
}: {
  items: Skill[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className={styles["skills__marquee"]}>
      <div
        className={`${styles["skills__marquee-track"]} ${
          reverse ? styles["skills__marquee-track--reverse"] : ""
        }`}
      >
        {doubled.map((skill, i) => (
          <div key={`${skill.name}-${i}`} className={styles["skills__item"]}>
            {skill.icon ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={32}
                height={32}
                className={styles["skills__item-img"]}
              />
            ) : (
              <div className={styles["skills__item-icon"]} />
            )}
            <span className={styles["skills__item-name"]}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles["skills__rows"]}>
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>
    </section>
  );
}
