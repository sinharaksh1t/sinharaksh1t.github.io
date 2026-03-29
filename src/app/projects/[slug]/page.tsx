import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="space-y-10 py-6 sm:py-10">
      <div className="space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-200 transition-colors hover:text-teal-100"
        >
          <span>←</span>
          <span>Back to projects</span>
        </Link>

        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-200">
            {project.label}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {project.description}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_30px_80px_-35px_rgba(8,15,35,0.85)]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            Summary
          </p>
          <p className="mt-4 text-base leading-8 text-slate-200">
            {project.summary}
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
              Highlights
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-7 text-slate-100 shadow-[0_30px_80px_-35px_rgba(8,15,35,0.9)]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            Project meta
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Status
              </p>
              <p className="mt-2 text-lg font-semibold">{project.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Next step
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Replace this placeholder copy with the real problem statement,
                architecture notes, links, and measurable outcomes.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
