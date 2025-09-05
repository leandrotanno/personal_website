import { projects } from "@/utils/constants";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold text-slate-800 dark:text-violet-200">Projetos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
