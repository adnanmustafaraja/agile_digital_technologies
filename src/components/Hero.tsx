import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden">
      {/* Dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Gradient overlay — fades dot grid toward bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/80" />

      {/* Cyan glow blob top-right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-brand-cyan/8 rounded-full blur-3xl" />

      <div className="relative container-xl section-pad pt-36 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              {company.hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {company.hero.heading}{" "}
            <span className="text-brand-cyan">{company.hero.headingAccent}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            {company.hero.subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href={company.hero.ctaPrimary.href} className="btn-primary">
              {company.hero.ctaPrimary.label}
              <ArrowRight size={18} />
            </Link>
            <Link href={company.hero.ctaSecondary.href} className="btn-secondary">
              {company.hero.ctaSecondary.label}
            </Link>
          </div>

          {/* Quick contact */}
          <div className="flex items-center gap-3 text-white/60">
            <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-white/5">
              <Phone size={15} className="text-brand-cyan" />
            </div>
            <span className="text-sm">
              Call us:{" "}
              <a
                href={`tel:${company.phone}`}
                className="text-white/90 hover:text-brand-cyan transition-colors font-medium"
              >
                {company.phone}
              </a>
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
