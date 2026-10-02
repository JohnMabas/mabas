import PageContainer from "@/components/PageContainer";
import BlogPost from "@/components/BlogPost";
import { getPostsByYear } from "@/data/blog";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Blog",
  description: `Articles and writing by ${siteConfig.name} about software engineering, web development, and more.`,
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const postsByYear = getPostsByYear();

  return (
    <PageContainer>
      {/* ── Heading ──────────────────────────────────── */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          All Posts
        </h1>
      </header>

      {/* ── Posts by year ────────────────────────────── */}
      {postsByYear.length === 0 ? (
        <p className="text-zinc-500">No posts yet — check back soon.</p>
      ) : (
        <div className="space-y-12">
          {postsByYear.map(({ year, posts }) => (
            <section key={year} aria-labelledby={`year-${year}`}>
              <h2
                id={`year-${year}`}
                className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2"
              >
                {year}
              </h2>
              <ul role="list">
                {posts.map((post) => (
                  <BlogPost key={post.title} post={post} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
