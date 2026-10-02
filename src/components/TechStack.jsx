/**
 * Tech Stack section — grayscale brand SVG logos, colour on hover.
 * Matches the reference site exactly.
 * Runs as a Server Component — simple-icons is read at build time.
 */
import * as simpleIcons from "simple-icons";
import { techStack } from "@/data/techstack";

export default function TechStack() {
  return (
    <section aria-labelledby="tech-stack-heading" className="py-14">
      <p
        id="tech-stack-heading"
        className="text-xs text-zinc-400 text-center uppercase tracking-widest mb-6"
      >
        Tech Stack
      </p>

      <ul
        className="flex flex-wrap items-center justify-center gap-6"
        role="list"
        aria-label="Technologies I work with"
      >
        {techStack.map(({ name, iconKey }) => {
          const icon = iconKey ? simpleIcons[iconKey] : null;

          if (!icon) {
            // Fallback: text pill for any tech without an SVG
            return (
              <li key={name}>
                <span className="px-3 py-1 text-sm bg-zinc-100 text-zinc-600 rounded-full">
                  {name}
                </span>
              </li>
            );
          }

          return (
            <li key={name} title={name}>
              {/* Inline SVG — grayscale by default, full colour on hover */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                aria-label={name}
                className="h-8 w-auto icon-hover-pop"
                style={{ fill: `#${icon.hex}` }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={icon.path} />
              </svg>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
