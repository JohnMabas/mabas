"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/freelance", label: "Freelance" },
];

/* ─── Inline SVG social icons ─────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function DevToIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.1h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.73zm4.43-.16c-.18.43-.49.64-.92.64-.26 0-.54-.1-.73-.26l-.04-.03v.28h-1.28V8.1h1.28v2.38c.19-.17.48-.27.76-.27.53 0 .8.36.8 1.07v3.86zm4.6-3.77h-1.44v1.13h1.44v1.14h-1.44v1.98h-1.28V8.1h2.72v1.27z" />
    </svg>
  );
}

/* ─── Social links list ────────────────────────────────────────────────────── */
const socialLinks = [
  {
    key: "github",
    href: siteConfig.github,
    label: "GitHub",
    Icon: GitHubIcon,
    // GitHub brand: #181717 (near-black)
    style: { color: "#181717" },
    hoverClass: "hover:opacity-70",
  },
  {
    key: "twitter",
    href: siteConfig.twitter,
    label: "X (Twitter)",
    Icon: XIcon,
    // X (Twitter) brand: #000000
    style: { color: "#000000" },
    hoverClass: "hover:opacity-70",
  },
  {
    key: "linkedin",
    href: siteConfig.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon,
    // LinkedIn brand: #0A66C2
    style: { color: "#0A66C2" },
    hoverClass: "hover:opacity-70",
  },
  {
    key: "medium",
    href: siteConfig.medium,
    label: "Medium",
    Icon: MediumIcon,
    hoverClass: "hover:text-zinc-900",
  },
  {
    key: "devto",
    href: siteConfig.devto,
    label: "Dev.to",
    Icon: DevToIcon,
    hoverClass: "hover:text-zinc-900",
  },
].filter((s) => s.href); // only render links that have a value

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="max-w-2xl mx-auto px-6 pt-10 pb-8 w-full animate-fade-in-down">
      {/* Avatar + name + subtitle + social icons */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.name} — home`}>
          <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100">
            <Image
              src={siteConfig.avatar}
              alt={`Photo of ${siteConfig.name}`}
              width={80}
              height={80}
              priority
              className="w-full h-full object-cover object-top"
            />
          </div>
        </Link>

        {/* Name, subtitle, social icons */}
        <div className="min-w-0 pt-0.5">
          <Link href="/" className="block">
            <p className="text-2xl font-bold text-zinc-900 leading-tight">
              {siteConfig.name}
            </p>
            <p className="text-sm text-zinc-500 mt-0.5">{siteConfig.subtitle}</p>
          </Link>

          {/* Social icons row */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-3 mt-3">
              {socialLinks.map(({ key, href, label, Icon, style, hoverClass }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  aria-label={label}
                  style={style}
                  className={`transition-opacity ${hoverClass}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          )}

          {/* Nav links */}
          <nav
            className="flex flex-wrap items-center gap-5 mt-4 text-sm text-zinc-600"
            aria-label="Main navigation"
          >
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition-colors hover:text-zinc-900 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-zinc-900 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                    isActive ? "text-zinc-900 font-medium after:scale-x-100" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
