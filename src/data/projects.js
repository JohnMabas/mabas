/**
 * Projects data.
 * Add, remove, or edit projects here.
 * All fields except title and description are optional — set to null to hide.
 */

/** @type {Array<{title: string, description: string, technologies: string[], github: string|null, demo: string|null, writeup: string|null}>} */
export const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-featured web application built for a client in the logistics industry. Includes booking management, real-time tracking, customer dashboards, and an admin panel for operations staff.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: null,
    demo: "https://project-alpha.vercel.app",
    writeup: null,
  },
  {
    title: "Commerce Platform",
    description:
      "An e-commerce platform with product listings, cart management, Paystack payment integration, order tracking, and a full admin dashboard for inventory and order management.",
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/mabas/commerce-platform",
    demo: "https://commerce-platform.vercel.app",
    writeup: null,
  },
  {
    title: "REST API Boilerplate",
    description:
      "A production-ready Express.js REST API boilerplate with JWT authentication, role-based access control, rate limiting, input validation, and PostgreSQL integration via Prisma.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/mabas/rest-api-boilerplate",
    demo: null,
    writeup: "https://dev.to/mabas/rest-api-boilerplate",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website. Built with Next.js App Router, Tailwind CSS v4, and deployed to Vercel. Designed to be fast, accessible, and easy to maintain.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/mabas/portfolio",
    demo: "https://mabas.vercel.app",
    writeup: null,
  },
];
