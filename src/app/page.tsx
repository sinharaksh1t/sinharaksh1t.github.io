import type { Metadata } from "next";
import Link from "next/link";

const focusAreas = [
  {
    title: "Frontend",
    description: "Clean React and Next.js interfaces with practical UX choices.",
  },
  {
    title: "Backend",
    description: "Reliable application design with maintainable service logic.",
  },
  {
    title: "Systems",
    description: "An engineering mindset shaped by operability and clarity.",
  },
];

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="grid flex-1 gap-12 py-10 sm:py-14 lg:grid-cols-[1.2fr_0.88fr] lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-200">
          Software Engineer
        </div>

        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
            Next.js / React / TypeScript
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            I build modern web experiences with a bias for clean execution.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m Rakshit Sinha, a software engineer focused on thoughtful
            frontend work, solid application design, and maintainable products.
            This site is a simple space to introduce myself, share project
            placeholders, and make it easy to connect.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-teal-300 px-6 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-teal-200"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-white/[0.08]"
          >
            Contact me
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_30px_80px_-35px_rgba(8,15,35,0.85)]"
            >
              <p className="text-lg font-semibold tracking-tight text-white">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="relative">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-teal-300/20 via-transparent to-blue-400/18 blur-2xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_80px_-35px_rgba(8,15,35,0.9)] sm:p-8">
          <div className="flex aspect-[4/5] items-center justify-center rounded-[1.75rem] border border-dashed border-white/10 bg-slate-950/60">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-2xl font-semibold text-white">
                RS
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
                Photo placeholder
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Replace this block with your portrait later.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/65 px-5 py-4 text-slate-100">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                Style
              </p>
              <p className="mt-2 text-sm leading-7">
                Straightforward, modern, and intentionally low-noise.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                Version
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                V1 portfolio structure with placeholder content ready for real
                work samples.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
