export type Project = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  description: string;
  status: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "project-1",
    label: "Project 01",
    title: "Distributed Task Runner",
    summary:
      "A placeholder backend-heavy project focused on job orchestration, retries, and observability.",
    description:
      "This is a dummy project detail page for now. Replace it later with the real problem, architecture, and outcome once you are ready to showcase an actual build.",
    status: "Placeholder",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    highlights: [
      "Queue-based execution for long-running jobs",
      "Retry and failure visibility for operators",
      "Simple dashboard-first operational workflow",
    ],
  },
  {
    slug: "project-2",
    label: "Project 02",
    title: "Observability Console",
    summary:
      "A placeholder internal-tool style project for surfacing logs, health, and deployment context.",
    description:
      "Use this page later for a real observability or platform project. Right now it gives the site the right route structure and a clean card-to-detail navigation pattern.",
    status: "Placeholder",
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    highlights: [
      "Fast overview of service health and incidents",
      "Clear separation between summary and drill-down views",
      "Designed for engineers who want signal over noise",
    ],
  },
  {
    slug: "project-3",
    label: "Project 03",
    title: "Developer Portfolio System",
    summary:
      "A placeholder product-style project centered on clean UX, content structure, and maintainability.",
    description:
      "Use this slot for a real frontend or full-stack project. The current content is intentionally generic so you can swap in real copy without changing the overall design.",
    status: "Placeholder",
    stack: ["Next.js", "React", "TypeScript", "GitHub Pages"],
    highlights: [
      "Responsive layout with simple information architecture",
      "Static deployment pipeline for low-maintenance hosting",
      "Content model that scales from dummy data to real case studies",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
