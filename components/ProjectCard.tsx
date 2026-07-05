import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition cursor-pointer">
        
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="text-zinc-400 mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4 text-xs text-zinc-400">
          {project.tech.map((t) => (
            <span key={t} className="border border-zinc-800 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}