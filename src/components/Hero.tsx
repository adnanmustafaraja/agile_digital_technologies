import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

const spacing = 32;
const rowFade = Array.from({ length: 30 }, (_, i) => {
  const h = Math.sin(i * 127.1 + 311.7) * 43758.5453123;
  return 3.0 + (h - Math.floor(h)) * 1.2;
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Dot-grid texture */}
      <div className="absolute top-[4.5rem] inset-x-0 bottom-0 dot-grid opacity-30" />

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

      {/* Dot matrix / halftone — left side */}
      <div className="absolute left-0 top-[4.4rem] bottom-0 w-1/2 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 640 980"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin slice"
        >
          {Array.from({ length: 30 }, (_, row) =>
            Array.from({ length: 22 }, (_, col) => {
              const offsetX = row % 2 === 1 ? spacing / 2 : 0;
              const x = 16 + offsetX + col * spacing;
              const y = 16 + row * spacing;
              if (x > 650) return null;
              const xNorm = x / 640;
              const fade = rowFade[row] ?? 1;
              const r = Math.max(0.6, 4.8 * (1 - xNorm * 0.9 * fade));
              const opacity = Math.max(0, 0.42 * (1 - xNorm * 0.85 * fade));
              if (opacity < 0.01) return null;
              return <circle key={`${row}-${col}`} cx={x} cy={y} r={r} fill="#22d3ee" opacity={opacity} />;
            })
          )}
        </svg>
      </div>

      {/* Main content — vertically centered in remaining space */}
      <div className="relative flex-1 flex items-center container-xl pt-40 pb-20">

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
            {/* <Link href={company.hero.ctaSecondary.href} className="btn-secondary">
              {company.hero.ctaSecondary.label}
            </Link> */}
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
