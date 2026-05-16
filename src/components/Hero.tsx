import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Hero photo — right side, fades left into content */}
      <div className="absolute right-0 top-0 w-[60%] h-full pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
          alt=""
          fill
          sizes="60vw"
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent" />
      </div>

      {/* Subtle cyan glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />

      {/* Main content — vertically centered in remaining space */}
      <div className="relative flex-1 flex items-center container-xl section-pad pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/15 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-navy/70 text-sm font-medium">
              {company.hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-6">
            {company.hero.heading}{" "}
            <span className="text-brand-cyan">{company.hero.headingAccent}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
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
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white">
              <Phone size={15} className="text-brand-cyan" />
            </div>
            <span className="text-sm">
              Call us:{" "}
              <a
                href={`tel:${company.phone}`}
                className="text-gray-800 hover:text-brand-cyan transition-colors font-medium"
              >
                {company.phone}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar — pinned to bottom of hero */}
      <div className="relative container-xl section-pad pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
          {company.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-navy mb-1">
                {stat.value}
              </div>
              <div className="text-brand-cyan text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
