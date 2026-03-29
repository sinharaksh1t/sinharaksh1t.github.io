import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sinharaksh1t.github.io"),
  title: {
    default: "Rakshit Sinha | Software Engineer",
    template: "%s | Rakshit Sinha",
  },
  description:
    "A simple personal website for Rakshit Sinha, focused on software engineering, projects, and contact information.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-slate-100">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-white/8 bg-[rgba(8,13,28,0.52)] backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-300 text-sm font-semibold text-slate-950">
                  RS
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold tracking-tight">
                    Rakshit Sinha
                  </p>
                  <p className="text-xs text-slate-400">Software Engineer</p>
                </div>
              </Link>

              <nav className="flex items-center gap-5 text-sm font-medium text-slate-300">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 sm:px-8 lg:px-10">
            {children}
          </main>

          <footer className="border-t border-white/6">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
              <p>Built with Next.js, React, and GitHub Pages.</p>
              <p>© {new Date().getFullYear()} Rakshit Sinha</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
