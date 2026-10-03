/**
 * Projects data.
 * Add, remove, or edit projects here.
 * All fields except title and description are optional — set to null to hide.
 */

/** @type {Array<{title: string, description: string, technologies: string[], github: string|null, demo: string|null, writeup: string|null}>} */
export const projects = [
  {
    title: "Online-Learning",
    description:
      "A public course-marketplace site in front of three authenticated experiences",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/JohnMabas/Online-Learning",
    demo: "https://online-learning-phi.vercel.app/",
    writeup: null,
  },
  {
    title: "Elgee Real Estate",
    description:
      "Real-estate and hotel booking",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/JohnMabas/Nestora",
    demo: "https://nestora-virid.vercel.app/",
    writeup: null,
  },
  {
    title: "School Management System API",
    description:
      "A backend-only School Management System API, It uses in-memory arrays instead of a real database, JWT authentication, bcrypt password hashing, strict request validation, role-based authorization, request logging and rate limiting.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/JohnMabas/School-Management-System-REST-API",
    demo: null,
    writeup: null,
  },
  {
    title: "Banking System",
    description:
      "Banking System REST API  .",
    technologies: ["Node.js", "Express.js"],
    github: "https://github.com/JohnMabas/Banking-System",
    demo: null,
    writeup: null,
  },
];
