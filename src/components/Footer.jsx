import { siGithub, siX } from "simple-icons";
import { siteConfig } from "@/config/site";

// Evaluated once at build time — avoids server/client date mismatch
const YEAR = new Date().getFullYear();

function BrandIcon({ icon, label }) {
  return (
    <span
      aria-label={label}
      className="w-5 h-5 [&>svg]:w-5 [&>svg]:h-5"
      style={{ fill: `#${icon.hex}`, display: "inline-flex" }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 mt-24">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <ul className="flex items-center gap-4" role="list">
            {siteConfig.github && (
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <BrandIcon icon={siGithub} label="GitHub" />
                </a>
              </li>
            )}
            {siteConfig.linkedin && (
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  {/* LinkedIn brand color #0A66C2 — removed from simple-icons v16 */}
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    aria-label="LinkedIn"
                    className="w-5 h-5"
                    style={{ fill: "#0A66C2" }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
            )}
            {siteConfig.twitter && (
              <li>
                <a
                  href={siteConfig.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <BrandIcon icon={siX} label="Twitter/X" />
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="opacity-70 hover:opacity-100 transition-opacity text-zinc-500 hover:text-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
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
