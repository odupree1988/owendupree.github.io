export interface Project {
  title: string;
  slug: string;
  description: string;
  link: string;
  gradient: string;
  tech: string[];
  highlight?: string;
  image?: string;
  wip?: boolean;
}

export const projects: Project[] = [
  {
    title: "Kao",
    slug: "kao",
    description:
      "Multi-brand headless commerce platform for 6 consumer brands across the U.S. and Canada. Shared cart, CMS-driven content, custom API integrations, custom SEO architecture, and scalable brand-specific storefronts.",
    link: "https://mykaoshop.com/",
    gradient: "from-[#1a1a2e] to-[#0f3460]",
    image: "/screenshots/kao.png",
    tech: ["Hydrogen", "Remix", "Tailwind CSS", "Contentful", "GraphQL", "Shopify"],
    highlight: "6 brands, 1 shared cart",
  },
  {
    title: "EnergyBird",
    slug: "energybird",
    description:
      "Custom Shopify theme for a supplements brand. Performance-focused build with dynamic product merchandising and custom API integrations.",
    link: "https://energybird.com/",
    gradient: "from-[#1a2e1a] to-[#0f3a1a]",
    image: "/screenshots/energybird.png",
    tech: ["Shopify", "Liquid", "Vue.js", "Tailwind CSS", "Shopify Functions"],
  },
  {
    title: "Philosophy",
    slug: "philosophy",
    description:
      "Custom Shopify theme focused on frontend quality, performance, merchandising, and custom API integrations.",
    link: "https://philosophy.com/",
    gradient: "from-[#1a2a2e] to-[#0f3a4a]",
    image: "/screenshots/philosophy.png",
    tech: ["Shopify", "Liquid", "Vue.js", "JavaScript"],
    highlight: "Pixel-perfect implementation",
  },
  {
    title: "Red Bull",
    slug: "redbull",
    description:
      "Custom Shopify theme with merchandising and product recommendation engine powering personalized shopping experiences. Includes custom Shopify apps and API integrations.",
    link: "https://www.redbullshopus.com/",
    gradient: "from-[#2a1a1a] to-[#4a1e1e]",
    image: "/screenshots/redbull.png",
    tech: ["Vue.js", "Shopify", "Liquid", "Shopify Functions", "Custom Apps"],
    highlight: "Custom theme + apps",
  },
  {
    title: "Exploding Kittens",
    slug: "exploding-kittens",
    description:
      "Custom Shopify theme featuring an interactive field guide for browsing card and game content. A creative, content-rich experience beyond standard ecommerce.",
    link: "https://www.explodingkittens.com/",
    gradient: "from-[#2e2a1a] to-[#4a421e]",
    image: "/screenshots/exploding-kittens.png",
    tech: ["Shopify", "Liquid", "JavaScript", "Shopify Functions", "Custom Apps"],
    highlight: "Creative content experience",
  },
  {
    title: "OOFOS",
    slug: "oofos",
    description:
      "Custom Shopify theme with redesigned product listing pages, filters, and product detail experience focused on conversion, product discovery, and custom API integrations.",
    link: "https://www.oofos.com/",
    gradient: "from-[#1a1a2e] to-[#3e1a4a]",
    image: "/screenshots/oofos.png",
    tech: ["Vue.js", "Shopify", "Liquid"],
    highlight: "Conversion-focused redesign",
  },
  {
    title: "Natural Life",
    slug: "natural-life",
    description:
      "Custom Shopify theme with frontend implementation, UX improvements, custom Shopify apps, and API integrations for an ecommerce storefront.",
    link: "https://www.naturallife.com/",
    gradient: "from-[#2a1a2a] to-[#4a1e42]",
    image: "/screenshots/natural-life.png",
    tech: ["Vue.js", "Shopify", "Liquid", "Tailwind CSS", "Shopify Functions", "Custom Apps"],
  },
  {
    title: "BizChair",
    slug: "bizchair",
    description:
      "Algolia Search and Discovery implementation across 10 ecommerce storefronts with custom API integrations. Advanced search, filtering, and product discovery for high-catalog retailers.",
    link: "https://www.bizchair.com/",
    gradient: "from-[#1a2a1a] to-[#2a4a2a]",
    image: "/screenshots/bizchair.png",
    tech: ["Vue.js", "Shopify", "JavaScript", "Liquid"],
    highlight: "10 storefronts",
  },
  {
    title: "LiveFloridaNow",
    slug: "livefloridanow",
    description:
      "Custom-built web presence for a real estate business. Lead generation, property showcasing, and local market positioning.",
    link: "https://livefloridanow.github.io/",
    image: "/screenshots/livefloridanow.png",
    gradient: "from-[#1e1e2a] to-[#36364a]",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    wip: true,
  },
  {
    title: "Nahum J Landscaping",
    slug: "nahum-j-landscaping",
    description:
      "Custom-built, SEO-optimized static site for a local landscaping business. Built for local lead generation and search visibility.",
    link: "https://nahum-landscaping.github.io/",
    image: "/screenshots/nahum-landscaping.png",
    gradient: "from-[#1a2e1a] to-[#2a4a2e]",
    tech: ["Astro", "Tailwind CSS"],
    wip: true,
  },
];

export const featuredProjects = projects.slice(0, 6);
