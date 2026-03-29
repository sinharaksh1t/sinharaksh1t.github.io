import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A simple overview of project work and placeholder case studies.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10 py-6 sm:py-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-200">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          A simple overview of work, ideas, and future case studies.
        </h1>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          For now this page uses 3 dummy projects. Each card routes to its own
          internal detail page so the structure is ready for real portfolio
          entries later.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_80px_-35px_rgba(8,15,35,0.85)] transition duration-200 hover:-translate-y-1"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
              {project.label}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between text-sm font-medium text-slate-100">
              <span>Open project route</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
