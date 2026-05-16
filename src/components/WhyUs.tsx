import React from "react";
import { company } from "@/data/company";
import {
  SiAngular, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiLaravel,
  SiMysql, SiMongodb, SiFirebase, SiAndroid, SiFigma, SiWordpress, SiShopify,
  SiVuedotjs, SiSvelte, SiNuxt, SiGatsby, SiAstro, SiRemix,
  SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiBootstrap, SiSass, SiVite,
  SiPython, SiDjango, SiFastapi, SiFlask, SiPhp, SiRubyonrails, SiSpringboot, SiGraphql,
  SiPostgresql, SiRedis, SiSqlite, SiSupabase, SiElasticsearch, SiPrisma,
  SiFlutter, SiIos, SiKotlin, SiSwift,
  SiSketch, SiFramer, SiWebflow, SiCanva,
  SiWoocommerce, SiStrapi, SiGhost, SiContentful, SiSanity, SiDrupal, SiPrestashop,
  SiDocker, SiKubernetes, SiVercel, SiNetlify, SiGooglecloud,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techLogos: Record<string, { Icon: IconType; color: string }> = {
  // Frontend
  "React JS":     { Icon: SiReact,        color: "#61DAFB" },
  "Next.js":      { Icon: SiNextdotjs,    color: "#000000" },
  "Angular":      { Icon: SiAngular,      color: "#DD0031" },
  "Vue.js":       { Icon: SiVuedotjs,     color: "#4FC08D" },
  "Svelte":       { Icon: SiSvelte,       color: "#FF3E00" },
  "Nuxt":         { Icon: SiNuxt,         color: "#00DC82" },
  "Gatsby":       { Icon: SiGatsby,       color: "#663399" },
  "Astro":        { Icon: SiAstro,        color: "#FF5D01" },
  "Remix":        { Icon: SiRemix,        color: "#121212" },
  "TypeScript":   { Icon: SiTypescript,   color: "#3178C6" },
  "JavaScript":   { Icon: SiJavascript,   color: "#F7DF1E" },
  "HTML5":        { Icon: SiHtml5,        color: "#E34F26" },
  "Tailwind CSS": { Icon: SiTailwindcss,  color: "#06B6D4" },
  "Bootstrap":    { Icon: SiBootstrap,    color: "#7952B3" },
  "Sass":         { Icon: SiSass,         color: "#CC6699" },
  "Vite":         { Icon: SiVite,         color: "#646CFF" },
  // Backend
  "Node.js":      { Icon: SiNodedotjs,    color: "#5FA04E" },
  "Express JS":   { Icon: SiExpress,      color: "#333333" },
  "Python":       { Icon: SiPython,       color: "#3776AB" },
  "Django":       { Icon: SiDjango,       color: "#092E20" },
  "FastAPI":      { Icon: SiFastapi,      color: "#009688" },
  "Flask":        { Icon: SiFlask,        color: "#333333" },
  "Laravel":      { Icon: SiLaravel,      color: "#FF2D20" },
  "PHP":          { Icon: SiPhp,          color: "#777BB4" },
  "Ruby on Rails":{ Icon: SiRubyonrails,  color: "#CC0000" },
  "Spring Boot":  { Icon: SiSpringboot,   color: "#6DB33F" },
  "GraphQL":      { Icon: SiGraphql,      color: "#E10098" },
  // Database
  "MySQL":        { Icon: SiMysql,        color: "#6AADCC" },
  "PostgreSQL":   { Icon: SiPostgresql,   color: "#4169E1" },
  "MongoDB":      { Icon: SiMongodb,      color: "#47A248" },
  "Firebase":     { Icon: SiFirebase,     color: "#FFCA28" },
  "Redis":        { Icon: SiRedis,        color: "#FF4438" },
  "SQLite":       { Icon: SiSqlite,       color: "#003B57" },
  "Supabase":     { Icon: SiSupabase,     color: "#3ECF8E" },
  "Elasticsearch":{ Icon: SiElasticsearch,color: "#005571" },
  "Prisma":       { Icon: SiPrisma,       color: "#2D3748" },
  // Mobile
  "React Native": { Icon: SiReact,        color: "#61DAFB" },
  "Flutter":      { Icon: SiFlutter,      color: "#02569B" },
  "Android":      { Icon: SiAndroid,      color: "#3DDC84" },
  "iOS":          { Icon: SiIos,          color: "#333333" },
  "Kotlin":       { Icon: SiKotlin,       color: "#7F52FF" },
  "Swift":        { Icon: SiSwift,        color: "#FA7343" },
  // Design
  "Figma":        { Icon: SiFigma,        color: "#F24E1E" },
  "Sketch":       { Icon: SiSketch,       color: "#F7B500" },
  "Framer":       { Icon: SiFramer,       color: "#0055FF" },
  "Webflow":      { Icon: SiWebflow,      color: "#4353FF" },
  "Canva":        { Icon: SiCanva,        color: "#00C4CC" },
  // CMS / E-Commerce
  "WordPress":    { Icon: SiWordpress,    color: "#21759B" },
  "Shopify":      { Icon: SiShopify,      color: "#95BF47" },
  "WooCommerce":  { Icon: SiWoocommerce,  color: "#96588A" },
  "Strapi":       { Icon: SiStrapi,       color: "#4945FF" },
  "Ghost":        { Icon: SiGhost,        color: "#333333" },
  "Contentful":   { Icon: SiContentful,   color: "#2478CC" },
  "Sanity":       { Icon: SiSanity,       color: "#F36458" },
  "Drupal":       { Icon: SiDrupal,       color: "#0678BE" },
  "PrestaShop":   { Icon: SiPrestashop,   color: "#DF0067" },
  // Cloud / DevOps
  "Docker":       { Icon: SiDocker,       color: "#2496ED" },
  "Kubernetes":   { Icon: SiKubernetes,   color: "#326CE5" },
  "Vercel":       { Icon: SiVercel,       color: "#000000" },
  "Netlify":      { Icon: SiNetlify,      color: "#00C7B7" },
  "Google Cloud": { Icon: SiGooglecloud,  color: "#4285F4" },
};

const valueStyles = [
  {
    color: "#e47b79",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    color: "#29ABE2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M15 14c0 1-1 2-3 2s-3-1-3-2" />
        <path d="M9 14v1a3 3 0 0 0 6 0v-1" />
        <path d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <>
      {/* Why Choose Us */}
      <section className="bg-white section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

        <div className="relative container-xl">
          <div className="text-center mb-16">
            <p className="section-label">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Built on <span className="heading-accent">Solid Values</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every engagement is guided by the principles that have made us a
              trusted partner for clients across the US and beyond.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch">
            {company.values.map((value, i) => {
              const style = valueStyles[i];
              return (
                <React.Fragment key={value.number}>
                  <div className="flex-1 flex flex-col items-center text-center px-8 py-8">
                    {/* Icon */}
                    <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center mb-6 shadow-inner">
                      <div
                        className="w-24 h-24 rounded-full bg-white flex items-center justify-center"
                        style={{ border: `4px solid ${style.color}` }}
                      >
                        <span style={{ color: style.color }}>{style.icon}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <p
                      className="text-sm font-black uppercase tracking-widest mb-3"
                      style={{ color: style.color }}
                    >
                      OUR {value.title}
                    </p>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                      {value.description}
                    </p>
                  </div>

                  {/* Vertical divider between items */}
                  {i < company.values.length - 1 && (
                    <div className="hidden md:flex w-px bg-gray-200 my-8 self-stretch" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Pakistan Advantage */}
      <section className="bg-gray-50 section-pad relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl" />

        <div className="relative container-xl">
          <div className="text-center mb-16">
            <p className="section-label">The Pakistan Advantage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              World-Class Talent,{" "}
              <span className="heading-accent">Fraction of the Cost</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pakistan is one of the world&apos;s fastest-growing IT ecosystems.
              Our US clients get senior engineering talent at 40–60% of local
              hiring cost — without compromising on quality.
            </p>
          </div>

          {/* Bubbles — different sizes + vertical offsets on desktop */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:flex-nowrap md:justify-center md:items-start md:gap-10 lg:gap-16 pb-0">

            {/* Stat 1 — large */}
            <div className="flex flex-col items-center gap-4 md:mt-24">
              <div className="w-32 h-32 rounded-full bg-white border-2 border-brand-cyan/30 shadow-sm flex items-center justify-center">
                <span className="text-4xl font-black text-brand-cyan tracking-tight">
                  {company.whyPakistan[0].stat}
                </span>
              </div>
              <div className="text-center max-w-[140px]">
                <p className="text-gray-700 text-sm font-medium leading-snug">
                  {company.whyPakistan[0].label}
                </p>
                {company.whyPakistan[0].source && (
                  <p className="text-gray-400 text-xs mt-1">{company.whyPakistan[0].source}</p>
                )}
              </div>
            </div>

            {/* Stat 2 — small, near top */}
            <div className="flex flex-col items-center gap-4 md:mt-0">
              <div className="w-44 h-44 rounded-full bg-brand-ice border-2 border-brand-cyan/45 shadow-sm flex items-center justify-center">
                <span className="text-5xl font-black text-brand-cyan tracking-tight">
                  {company.whyPakistan[1].stat}
                </span>
              </div>
              <div className="text-center max-w-[130px]">
                <p className="text-gray-700 text-sm font-medium leading-snug">
                  {company.whyPakistan[1].label}
                </p>
                {company.whyPakistan[1].source && (
                  <p className="text-gray-400 text-xs mt-1">{company.whyPakistan[1].source}</p>
                )}
              </div>
            </div>

            {/* Stat 3 — largest, dropped furthest */}
            <div className="flex flex-col items-center gap-4 md:mt-24">
              <div className="w-56 h-56 rounded-full bg-white border-[3px] border-brand-cyan/20 shadow-md flex items-center justify-center">
                <span className="text-6xl font-black text-brand-cyan tracking-tight">
                  {company.whyPakistan[2].stat}
                </span>
              </div>
              <div className="text-center max-w-[150px]">
                <p className="text-gray-700 text-sm font-medium leading-snug">
                  {company.whyPakistan[2].label}
                </p>
              </div>
            </div>

            {/* Stat 4 — medium */}
            <div className="flex flex-col items-center gap-4 md:mt-8">
              <div className="w-40 h-40 rounded-full bg-brand-ice border-2 border-brand-cyan/35 shadow-sm flex items-center justify-center">
                <span className="text-4xl font-black text-brand-cyan tracking-tight">
                  {company.whyPakistan[3].stat}
                </span>
              </div>
              <div className="text-center max-w-[130px]">
                <p className="text-gray-700 text-sm font-medium leading-snug">
                  {company.whyPakistan[3].label}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Technology Stack */}
      <section className="bg-gray-100 section-pad relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

        <div className="relative container-xl">
          <p className="section-label text-center mb-4">Our Technology Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
            Tools We <span className="heading-accent">Build With</span>
          </h2>
          <div className="space-y-10">
            {Object.entries(company.techStack).map(([category, techs]) => (
              <div key={category}>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest pb-3 mb-6 border-b border-gray-300">
                  {category}
                </p>
                <div className="flex flex-wrap gap-4">
                  {techs.map((tech) => {
                    const logo = techLogos[tech];
                    return (
                      <div
                        key={tech}
                        className="flex flex-col items-center gap-2 group cursor-default w-28"
                      >
                        <div className="w-24 h-24 rounded-xl bg-white border border-gray-200 shadow-sm group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan/5 transition-all duration-200 flex items-center justify-center p-3">
                          {logo ? (
                            <logo.Icon size={44} color={logo.color} />
                          ) : (
                            <span className="text-gray-600 text-xs text-center leading-tight font-medium">
                              {tech}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-600 text-xs text-center leading-tight w-full font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
