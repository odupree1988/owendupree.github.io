export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Custom Software Engineering Analyst",
    company: "Enterprise Agency (E-Commerce & Digital)",
    period: "Jun 2025 — Present",
    bullets: [
      "Advanced to analyst role focusing on custom software engineering solutions",
      "Lead technical strategy for enterprise Shopify implementations",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Enterprise Agency (E-Commerce & Digital)",
    period: "May 2022 — Jun 2025",
    bullets: [
      "Developed first-ever shared cart functionality across 6 Shopify brands for My Kao Shop",
      "Built 6-7 complex Shopify Functions for custom business logic and employee discount systems",
      "Created pixel-perfect custom themes and checkout extensions for major brands",
      "Implemented headless commerce solutions using Hydrogen, Contentful, and GraphQL",
      "Led mentorship program with bi-weekly 1-on-1s, code reviews, and training for junior developers",
      "Integrated complex third-party systems (Algolia, Rebuy, Klaviyo, Yotpo) using custom API solutions",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Trilogy Education / 2U Bootcamp at UCF",
    period: "Dec 2021 — Jun 2022",
    bullets: [
      "Taught MERN stack through hands-on instruction and code reviews",
      "Provided individualized support to students learning web development",
    ],
  },
  {
    role: "Software Engineer",
    company: "Capco",
    period: "Jan 2022 — May 2022",
    bullets: [
      "Developed backend services using Java, Spring Boot, and Maven for financial applications",
      "Worked with MySQL databases and REST APIs",
    ],
  },
];

export const skills = {
  shopify: [
    "Shopify Functions",
    "Checkout Extensions",
    "Custom Themes",
    "Liquid",
    "Hydrogen",
    "Headless Commerce",
  ],
  languages: [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "React",
    "Remix",
    "HTML5",
    "CSS3",
    "SCSS",
    "Tailwind",
  ],
  apis: ["GraphQL", "REST APIs", "MySQL", "NoSQL", "MongoDB"],
  tools: [
    "Git",
    "GitHub",
    "Contentful",
    "Figma",
    "Node.js",
    "Algolia",
    "Rebuy",
    "Klaviyo",
    "Yotpo",
  ],
  professional: [
    "Technical Documentation",
    "Developer Mentorship",
    "Code Reviews",
    "Client Communication",
    "Feature Solutioning",
  ],
};

export const education = {
  degree: "Full Stack Web Development Certificate",
  school: "University of Central Florida",
  period: "Apr 2021 — Sep 2021",
};

export const certifications = [
  {
    title: "Headless at Shopify for Developers",
    issuer: "Shopify Academy",
  },
  {
    title: "Shopify Development Fundamentals",
    issuer: "Shopify Academy",
  },
];
