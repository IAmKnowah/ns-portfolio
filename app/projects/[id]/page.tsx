import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">

      {/* LEFT: GALLERY */}
      <div className="lg:col-span-5">
        {project.images?.length ? (
          <ProjectGallery
            images={project.images}
            title={project.title}
          />
        ) : (
          <div className="aspect-video border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-600">
            No Images Yet
          </div>
        )}
      </div>

      {/* CENTER: CONTENT */}
      <div className="lg:col-span-5 space-y-10">

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">
            {project.title}
          </h1>

          <p className="text-zinc-400">
            {project.description}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-zinc-400 leading-relaxed">
            {project.longDescription ?? project.description}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Key Features</h2>

          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

      </div>

      {/* RIGHT: SIDEBAR */}
      <div className="lg:col-span-2 space-y-6">

        <div className="border border-zinc-800 rounded-lg p-4 space-y-3">
          <h3 className="font-semibold">Links</h3>

          <div className="text-sm text-zinc-400 space-y-2">
            <div>GitHub</div>
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white transition"
              >
                Demo
              </a>
            )}
          </div>
        </div>

        <div className="border border-zinc-800 rounded-lg p-4 space-y-3">
          <h3 className="font-semibold">Tech Stack</h3>

          <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border border-zinc-800 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}