import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.subtitle}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <PageContainer>
      {/* ── About ──────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="animate-fade-in-up">
        <h1
          id="about-heading"
          className="text-2xl font-bold text-zinc-900 mb-6 animate-fade-in-down"
        >
          About
        </h1>

        <div className="space-y-4 text-zinc-600 leading-relaxed">
          <p className="animate-fade-in-up delay-100">
            I am a{" "}
            <strong className="text-zinc-900 font-medium">
              {siteConfig.title.toLowerCase()}
            </strong>
            . I build complete web products — from clean, responsive frontends
            to the APIs and databases that power them.
          </p>
          <p className="animate-fade-in-up delay-200">
            I hold a{" "}
            <strong className="text-zinc-900 font-medium">
              BSc in Computer Science
            </strong>
            , which gave me a solid foundation in algorithms, data structures,
            software engineering principles, and systems design. I apply that
            depth every day when architecting and building real-world
            applications.
          </p>
          <p className="animate-fade-in-up delay-300">
            Based in {siteConfig.location}, I also help businesses get online
            with well-crafted websites that convert visitors into customers. I
            am available for{" "}
            <Link
              href="/freelance"
              className="text-zinc-900 font-medium underline underline-offset-2 hover:text-zinc-600 transition-colors"
            >
              freelance work
            </Link>{" "}
            and open to full-time opportunities.
          </p>
          <p className="animate-fade-in-up delay-400">
            You can view selected work on{" "}
            <Link
              href="/projects"
              className="text-zinc-900 font-medium underline underline-offset-2 hover:text-zinc-600 transition-colors"
            >
              projects
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Tech Stack ─────────────────────────────────────── */}
      <div className="animate-fade-in-up delay-500">
        <TechStack />
      </div>

      {/* ── Contact ────────────────────────────────────────── */}
      <div className="animate-fade-in-up delay-600">
        <ContactSection />
      </div>
    </PageContainer>
  );
}
