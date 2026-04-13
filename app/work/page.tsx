import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Work"
          subtitle="Things I've helped bring to life"
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
