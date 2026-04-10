export interface Project {
  title: string;
  slug: string;
  description: string;
  link: string;
  gradient: string;
  tech: string[];
  highlight?: string;
}

export const projects: Project[] = [
  {
    title: "Kao North America",
    slug: "kao",
    description:
      "Multi-brand headless commerce platform for 6 consumer brands across the U.S. and Canada. Shared cart, CMS-driven content, and scalable brand-specific storefronts.",
    link: "https://mykaoshop.com/",
    gradient: "from-[#1a1a2e] to-[#0f3460]",
    tech: ["Hydrogen", "Contentful", "GraphQL", "Shopify"],
    highlight: "6 brands, 1 shared cart",
  },
  {
    title: "Belnick",
    slug: "belnick",
    description:
      "Algolia Search and Discovery implementation across 10 ecommerce storefronts. Advanced search, filtering, and product discovery for high-catalog retailers.",
    link: "https://www.bizchair.com/",
    gradient: "from-[#1a2a1a] to-[#2a4a2a]",
    tech: ["Algolia", "Shopify", "JavaScript", "Liquid"],
    highlight: "10 storefronts",
  },
  {
    title: "Red Bull",
    slug: "redbull",
    description:
      "Merchandising and product recommendation engine powering You May Also Like, Recently Viewed, and Goes Well With experiences.",
    link: "https://www.redbullshopus.com/",
    gradient: "from-[#2a1a1a] to-[#4a1e1e]",
    tech: ["Vue.js", "Rebuy", "Shopify Functions"],
    highlight: "Custom recommendation engine",
  },
  {
    title: "OOFOS",
    slug: "oofos",
    description:
      "Redesigned product listing pages, filters, and product detail experience focused on conversion and product discovery.",
    link: "https://www.oofos.com/",
    gradient: "from-[#1a1a2e] to-[#3e1a4a]",
    tech: ["Vue.js", "Shopify", "Shopify Functions"],
    highlight: "Conversion-focused redesign",
  },
  {
    title: "Exploding Kittens",
    slug: "exploding-kittens",
    description:
      "Interactive field guide for browsing card and game content. A creative, content-rich experience beyond standard ecommerce.",
    link: "https://www.explodingkittens.com/",
    gradient: "from-[#2e2a1a] to-[#4a421e]",
    tech: ["Shopify Functions", "Liquid", "Custom Shipping"],
    highlight: "Creative content experience",
  },
  {
    title: "Philosophy",
    slug: "philosophy",
    description:
      "Custom storefront development focused on frontend quality, performance, and merchandising.",
    link: "https://philosophy.com/",
    gradient: "from-[#1a2a2e] to-[#0f3a4a]",
    tech: ["Shopify", "Custom Theme", "3rd Party APIs"],
    highlight: "Pixel-perfect implementation",
  },
  {
    title: "Natural Life",
    slug: "natural-life",
    description:
      "Frontend implementation and UX improvements for an ecommerce storefront.",
    link: "https://www.naturallife.com/",
    gradient: "from-[#2a1a2a] to-[#4a1e42]",
    tech: ["Vue.js", "Algolia", "Shopify"],
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Professional web presence for a real estate business. Lead generation, property showcasing, and local market positioning.",
    link: "#",
    gradient: "from-[#1e1e2a] to-[#36364a]",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Lawn Care",
    slug: "lawn-care",
    description:
      "Clean, conversion-focused website for a lawn care service business.",
    link: "#",
    gradient: "from-[#1a2e1a] to-[#2a4a2e]",
    tech: ["React", "Next.js", "Tailwind"],
  },
];

export const featuredProjects = projects.slice(0, 6);
