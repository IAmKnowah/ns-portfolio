import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="py-16 space-y-16">

      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Noah Sejnoha
        </h1>

        <h2 className="text-2xl font-bold tracking-tight">
            Gameplay & Systems Programmer
        </h2>

        <p className="text-zinc-400 max-w-2xl">
          I build Unity gameplay systems, UI tools, and gameplay architecture
          with a focus on clean, scalable design.
        </p>
      </section>

      {/* FEATURED PROJECT */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured Project</h2>

        <ProjectCard project={projects[0]} />
      </section>

    </div>
  );
}