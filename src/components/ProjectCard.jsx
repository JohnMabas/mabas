import { ArrowUpRight } from "lucide-react";

/**
 * Individual project entry displayed on the projects page.
 */
export default function ProjectCard({ project }) {
  const { title, description, technologies, github, demo, writeup } = project;

  return (
    <article className="py-8 border-b border-zinc-100 last:border-0">
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      <p className="mt-2 text-zinc-600 leading-relaxed text-sm sm:text-base">
        {description}
      </p>

      {/* Technologies */}
      {technologies?.length > 0 && (
        <ul
          className="mt-3 flex flex-wrap gap-2"
          role="list"
          aria-label={`Technologies used in ${title}`}
        >
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-2.5 py-0.5 text-xs bg-zinc-100 text-zinc-600 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Live demo <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
        {writeup && (
          <a
            href={writeup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Writeup <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
