# Personal Website PRD

## Overview

Build a small personal website for GitHub Pages using Next.js, React, TypeScript, and Tailwind CSS.

Primary goals:

- Present a short professional introduction.
- Provide a clear contact page.
- Showcase projects through a simple overview page and individual project routes.

The site should feel modern, minimal, and easy to maintain.

## Audience

- Recruiters
- Hiring managers
- Collaborators
- Anyone trying to learn more about my work

## Product Requirements

### Route Structure

- `/`
- `/contact`
- `/projects`
- `/projects/project-1`
- `/projects/project-2`
- `/projects/project-3`

Each route must be directly accessible and statically exportable for GitHub Pages.

### Home

Must include:

- A short software-engineer introduction
- A brief positioning statement
- A visible placeholder for a profile photo
- Clear navigation to Projects and Contact

### Contact

Must include:

- LinkedIn
- GitHub
- Email

The first version can use placeholder values where real details are not ready yet, but the layout should make replacement trivial.

### Projects

Must include:

- A project overview page with 3 dummy projects
- Cards or rows that link to internal project detail routes
- A detail page for each dummy project

Each project detail page should support:

- Title
- Short summary
- Placeholder description
- Example tech stack / highlights

## Design Direction

- Minimal-modern visual style
- Light theme by default
- Subtle gradients and depth, not a flat template look
- Responsive on mobile and desktop
- Shared header navigation and footer across all pages

## Technical Requirements

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export compatible with GitHub Pages
- No backend, database, CMS, auth, or contact form in v1
- Project content stored locally in code for now

## Acceptance Criteria

- All 6 routes render correctly.
- Navigation is consistent across pages.
- The Projects page links to 3 internal project routes.
- The site builds as a static export for GitHub Pages.
- Placeholder content is obvious and easy to replace later.
