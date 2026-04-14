import { PageHeader } from "@/components/ui/PageHeader";
import { AboutBio } from "@/components/about/AboutBio";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" maxWidth="768px" />
      <AboutBio />
    </>
  );
}
