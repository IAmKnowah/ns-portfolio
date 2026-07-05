import PageContainer from "@/components/PageContainer";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <PageContainer>
      
      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <p className="text-zinc-400 max-w-2xl">
        A collection of gameplay systems, prototypes, and technical experiments.
      </p>

      <div className="grid gap-4 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </PageContainer>
  );
}