import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

/* WhatsApp SVG icon (official brand color #25D366) */
function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#ffffff"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.5.5 0 00.61.61l5.726-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.027-1.383l-.36-.214-3.733.979.993-3.63-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

/**
 * "Get in touch" contact section — matches reference site structure exactly.
 */
export default function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="mt-14">
      <h2 id="contact-heading" className="text-2xl font-bold text-zinc-900 mb-2">
        Get in touch
      </h2>
      <p className="text-zinc-500 mb-8">
        WhatsApp is fastest. Email is fine for longer notes.
      </p>

      <div className="flex flex-col gap-8">
        {/* WhatsApp */}
        <div>
          <h3 className="text-base font-semibold text-zinc-900 mb-1">
            WhatsApp
          </h3>
          <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
            Quick questions, project ideas, or any collaboration — fastest way
            to get a response.
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors bg-[#25D366] hover:bg-[#1ebe5d]"
          >
            <WhatsAppIcon size={16} />
            Start a WhatsApp chat
          </a>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-base font-semibold text-zinc-900 mb-1">Email</h3>
          <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
            For detailed inquiries, formal opportunities, or anything that needs
            a longer reply.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
          >
            {/* Gmail / email brand red */}
            <Mail size={16} style={{ color: "#EA4335" }} aria-hidden="true" />
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
