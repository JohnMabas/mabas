import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/freelance", label: "Freelance" },
];

// Evaluated once at build time — avoids server/client date mismatch
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 mt-24">
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Top row: name + nav links */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-zinc-900">{siteConfig.name}</p>
            <p className="text-sm text-zinc-500 mt-0.5">{siteConfig.title}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row: external links + copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
            {siteConfig.github && (
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
            )}
            {siteConfig.linkedin && (
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {siteConfig.twitter && (
              <li>
                <a
                  href={siteConfig.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  Twitter/X
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Email
              </a>
            </li>
          </ul>

          <p className="text-sm text-zinc-400">
            © {YEAR} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
