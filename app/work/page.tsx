import { PageHeader } from "@/components/ui/PageHeader";
import { WorkCard } from "@/components/work/WorkCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Work" subtitle="Brands I've helped bring to life" align="center" />
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8">
            {projects.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
