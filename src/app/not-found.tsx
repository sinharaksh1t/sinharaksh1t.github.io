import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-10">
      <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-[0_30px_80px_-35px_rgba(8,15,35,0.85)] sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-200">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          That page does not exist.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
          The route may have changed, or it might never have been created in the
          first place.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-teal-300 px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-teal-200"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
