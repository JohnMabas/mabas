import { ArrowUpRight } from "lucide-react";

/**
 * Individual blog post entry.
 */
export default function BlogPost({ post }) {
  const { title, date, platform, url } = post;

  return (
    <li className="py-3 border-b border-zinc-100 last:border-0">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-4"
        aria-label={`${title} — opens in a new tab`}
      >
        <span className="flex flex-col gap-0.5">
          <span className="text-sm sm:text-base text-zinc-900 group-hover:text-zinc-600 transition-colors leading-snug">
            {title}
          </span>
          <span className="text-xs text-zinc-400">
            {date}
            {platform && <span> · {platform}</span>}
          </span>
        </span>
        <ArrowUpRight
          size={16}
          className="shrink-0 mt-1 text-zinc-400 group-hover:text-zinc-700 transition-colors"
          aria-hidden="true"
        />
      </a>
    </li>
  );
}
