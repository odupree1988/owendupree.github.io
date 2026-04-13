import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HomeCTA } from "@/components/home/HomeCTA";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedWork />
      <HomeCTA />
    </>
  );
}
