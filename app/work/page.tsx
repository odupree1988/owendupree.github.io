import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Work"
          subtitle="Projects I've built and shipped"
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
