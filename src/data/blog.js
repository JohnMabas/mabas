/**
 * Blog posts data.
 * Posts are grouped by year automatically — just add them in order.
 * Set platform to null if posting on a personal blog.
 */

/** @type {Array<{title: string, date: string, year: number, platform: string|null, url: string}>} */
export const blogPosts = [
  // 2026
  {
    title: "Building a Multi-Tenant SaaS with Next.js App Router",
    date: "August 14, 2026",
    year: 2026,
    platform: "Medium",
    url: "https://medium.com/@mabas/multi-tenant-saas-nextjs",
  },
  {
    title: "Why I Migrated My APIs from REST to tRPC",
    date: "May 22, 2026",
    year: 2026,
    platform: "Dev.to",
    url: "https://dev.to/mabas/rest-to-trpc",
  },
  {
    title: "PostgreSQL Full-Text Search: A Practical Guide",
    date: "February 10, 2026",
    year: 2026,
    platform: "Medium",
    url: "https://medium.com/@mabas/postgres-full-text-search",
  },

  // 2025
  {
    title: "Understanding Node.js Event Loop for Real-World Apps",
    date: "November 5, 2025",
    year: 2025,
    platform: "Medium",
    url: "https://medium.com/@mabas/nodejs-event-loop",
  },
  {
    title: "Tailwind CSS v4: What Actually Changed",
    date: "August 30, 2025",
    year: 2025,
    platform: "Dev.to",
    url: "https://dev.to/mabas/tailwind-v4-changes",
  },
  {
    title: "A Beginner's Guide to Database Indexing",
    date: "March 12, 2025",
    year: 2025,
    platform: "Medium",
    url: "https://medium.com/@mabas/database-indexing-guide",
  },
];

/**
 * Groups blog posts by year, sorted descending.
 * @returns {{ year: number, posts: typeof blogPosts }[]}
 */
export function getPostsByYear() {
  const grouped = {};
  for (const post of blogPosts) {
    if (!grouped[post.year]) grouped[post.year] = [];
    grouped[post.year].push(post);
  }
  return Object.keys(grouped)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ year: Number(year), posts: grouped[year] }));
}
