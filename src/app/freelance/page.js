import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2 } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import CTAButton from "@/components/CTAButton";
import Icon from "@/components/Icon";
import { siteConfig } from "@/config/site";
import { services, whyWorkWithMe, processSteps, clientSegments } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Freelance",
  description: `Freelance web development services by ${siteConfig.name}. I build websites and web applications for businesses and startups.`,
  alternates: {
    canonical: `${siteConfig.url}/freelance`,
  },
};

const problems = [
  "Potential customers can't find your business online",
  "Your website looks outdated and doesn't build trust",
  "Your site isn't mobile-friendly — most people visit on their phones",
  "Your website loads too slowly and customers leave before seeing anything",
  "You have no clear way to receive enquiries or convert visitors",
  "Your business processes are still manual and time-consuming",
];

export default function FreelancePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28">
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
            Freelance Web Development
          </p>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight max-w-2xl"
          >
            Need a website that actually works for your business?
          </h1>
          <p className="mt-6 text-zinc-500 leading-relaxed max-w-xl text-base sm:text-lg">
            I build custom websites and web applications for businesses and
            startups — things that load fast, look professional, and help you
            grow. Not templates. Not drag-and-drop builders. Proper software,
            built around how your business works.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href={siteConfig.whatsapp} variant="whatsapp" external>
              Let&apos;s talk on WhatsApp
            </CTAButton>
            <CTAButton href="#proof" variant="secondary">
              See my work
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── Problems ─────────────────────────────────────────── */}
      <section
        aria-labelledby="problems-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
            What&apos;s actually happening
          </p>
          <h2
            id="problems-heading"
            className="text-2xl font-bold text-zinc-900 mb-8 sr-only"
          >
            Common problems
          </h2>
          <ul className="space-y-4" role="list">
            {problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3">
                <X
                  size={16}
                  className="mt-1 shrink-0 text-zinc-400"
                  aria-hidden="true"
                />
                <span className="text-zinc-600">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Proof / Past work ────────────────────────────────── */}
      <section
        id="proof"
        aria-labelledby="proof-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
            Real work, real results
          </p>
          <h2
            id="proof-heading"
            className="text-2xl font-bold text-zinc-900 mb-8"
          >
            What I&apos;ve built
          </h2>
          <p className="text-zinc-600 leading-relaxed max-w-xl mb-4">
            See the work I&apos;ve done on the{" "}
            <Link
              href="/projects"
              className="text-zinc-900 font-medium underline underline-offset-2 hover:text-zinc-600 transition-colors"
            >
              projects page
            </Link>
            . Each project was scoped, designed, built, and delivered
            independently.
          </p>
          <p className="text-sm text-zinc-500">
            Every project starts with understanding your business first — not a
            template. The result is always built around how your business
            actually works.
          </p>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section
          aria-labelledby="testimonials-heading"
          className="border-b border-zinc-100"
        >
          <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
              What clients say
            </p>
            <h2 id="testimonials-heading" className="sr-only">
              Testimonials
            </h2>
            <div className="space-y-8">
              {testimonials.map((t) => (
                <figure key={t.author} className="border-l-2 border-zinc-200 pl-5">
                  <blockquote className="text-zinc-700 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-zinc-500">
                    {t.author}
                    {t.role && (
                      <span className="text-zinc-400"> · {t.role}</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Services ─────────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <h2
            id="services-heading"
            className="text-2xl font-bold text-zinc-900 mb-8"
          >
            What I Build
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="flex gap-4">
                <div className="mt-0.5 shrink-0 text-zinc-500">
                  <Icon name={service.icon} size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <h2
            id="process-heading"
            className="text-2xl font-bold text-zinc-900 mb-2"
          >
            How I Work
          </h2>
          <p className="text-zinc-500 mb-10">
            Three steps. No jargon. No stress.
          </p>
          <ol className="space-y-10" role="list">
            {processSteps.map((step) => (
              <li key={step.step} className="flex gap-6">
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 text-sm font-semibold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Why work with me ─────────────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <h2
            id="why-heading"
            className="text-2xl font-bold text-zinc-900 mb-8"
          >
            Everything your business needs to get online properly
          </h2>
          <div className="space-y-5">
            {whyWorkWithMe.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-400"
                  aria-hidden="true"
                />
                <div>
                  <span className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </span>
                  <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who I work with ──────────────────────────────────── */}
      <section
        aria-labelledby="clients-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <h2
            id="clients-heading"
            className="text-2xl font-bold text-zinc-900 mb-8"
          >
            Who I Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {clientSegments.map((segment) => (
              <div key={segment.title}>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                  {segment.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 border-t border-zinc-100 pt-6">
            If you want something built properly — something that actually works
            for your business — let&apos;s talk.
          </p>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section
        aria-labelledby="pricing-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <h2
            id="pricing-heading"
            className="text-2xl font-bold text-zinc-900 mb-2"
          >
            Pricing
          </h2>
          <p className="text-zinc-500 mb-10">
            Every project is scoped based on its requirements. No hidden fees,
            no surprises — price is agreed and fixed before I start.
          </p>
          <div className="border border-zinc-200 rounded-xl p-6 sm:p-8 max-w-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Business Website
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Design, development, testing, deployment and handover
            </p>
            <p className="mt-5 text-2xl font-bold text-zinc-900">
              Price on request
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-600" role="list">
              {[
                "Custom design",
                "Responsive on all devices",
                "Fast-loading pages",
                "SEO-friendly structure",
                "Deployment & domain setup",
                "1 month free support",
                "Full ownership handover",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-zinc-400 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CTAButton href={siteConfig.whatsapp} variant="whatsapp" external>
                Request a quote
              </CTAButton>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-8 max-w-xl">
            Larger projects — e-commerce platforms, full business systems,
            custom dashboards — are scoped and priced individually. Send me a
            message and I&apos;ll give you an honest estimate within 24 hours.
          </p>
        </div>
      </section>

      {/* ── About me ─────────────────────────────────────────── */}
      <section
        aria-labelledby="about-me-heading"
        className="border-b border-zinc-100"
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
            Who you&apos;re working with
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar — place your photo at /public/images/profile.jpg */}
            <div className="w-16 h-16 rounded-full bg-zinc-100 shrink-0 overflow-hidden">
              <Image
                src={siteConfig.avatar}
                alt={`Photo of ${siteConfig.name}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 id="about-me-heading" className="text-base font-semibold text-zinc-900">
                {siteConfig.name}
              </h2>
              <p className="text-sm text-zinc-500 mt-0.5">
                {siteConfig.subtitle} · {siteConfig.location}
              </p>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed max-w-xl">
                {siteConfig.bio}
              </p>
              <div className="mt-4">
                <Link
                  href="/"
                  className="text-sm text-zinc-500 underline underline-offset-2 hover:text-zinc-900 transition-colors"
                >
                  See my full portfolio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section aria-labelledby="final-cta-heading" className="bg-zinc-50">
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24 text-center">
          <h2
            id="final-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4"
          >
            Ready to get your business online properly?
          </h2>
          <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
            Send me a message. Tell me briefly what your business does and what
            you need. I&apos;ll respond within 24 hours with honest feedback and
            a clear next step — no obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton href={siteConfig.whatsapp} variant="whatsapp" external>
              Message me on WhatsApp
            </CTAButton>
            <CTAButton
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              external
            >
              Or send an email
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
