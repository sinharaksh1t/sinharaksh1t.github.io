import type { Metadata } from "next";

const contactItems = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-linkedin",
    href: "https://www.linkedin.com/in/your-linkedin",
    note: "Replace this placeholder with your real profile.",
  },
  {
    label: "GitHub",
    value: "github.com/sinharaksh1t",
    href: "https://github.com/sinharaksh1t",
    note: "Update only if you want a different public profile link.",
  },
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    note: "Replace this placeholder with your preferred contact email.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to connect with Rakshit Sinha.",
};

export default function ContactPage() {
  return (
    <section className="space-y-10 py-6 sm:py-10">
      <div className="max-w-2xl space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-200">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Reach out through the channels below.
        </h1>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          This page is intentionally simple. It gives people a fast way to find
          your professional profiles and preferred contact details without extra
          friction.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_80px_-35px_rgba(8,15,35,0.85)] transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
              {item.label}
            </p>
            <p className="mt-4 text-lg font-semibold tracking-tight text-white">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
            <p className="mt-6 text-sm font-medium text-teal-200">
              Open link
            </p>
          </a>
        ))}
      </div>

      <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.04] px-6 py-5 text-sm leading-7 text-slate-300">
        Replace the placeholder LinkedIn and email values before publishing if
        you want the page to point at live contact details only.
      </div>
    </section>
  );
}
