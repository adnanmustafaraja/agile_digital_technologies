import { company } from "@/data/company";

// Maps tech names to their Simple Icons CDN slugs (cdn.simpleicons.org/{slug})
const techLogoSlugs: Record<string, string> = {
  "Angular":        "angular",
  "React JS":       "react",
  "Next.js":        "nextdotjs",
  "Node.js":        "nodedotjs",
  "Express JS":     "express",
  "Laravel":        "laravel",
  "MySQL":          "mysql",
  "MongoDB":        "mongodb",
  "Firebase":       "firebase",
  "Android":        "android",
  "React Native":   "react",
  "Figma":          "figma",
  "Adobe XD":       "adobexd",
  "WordPress":      "wordpress",
  "Shopify":        "shopify",
};

export default function WhyUs() {
  return (
    <section className="bg-navy-dark section-pad relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="relative container-xl">
        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="section-label">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Built on <span className="heading-accent">Solid Values</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Every engagement is guided by the principles that have made us a
              trusted partner for clients across the US and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {company.values.map((value) => (
              <div
                key={value.number}
                className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/8 transition-colors"
              >
                <div className="text-brand-cyan text-4xl font-bold mb-4 opacity-60">
                  {value.number}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pakistan competency */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <p className="section-label">The Pakistan Advantage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              World-Class Talent,{" "}
              <span className="heading-accent">Fraction of the Cost</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Pakistan is one of the world's fastest-growing IT ecosystems.
              Our US clients get senior engineering talent at 40–60% of local
              hiring cost — without compromising on quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {company.whyPakistan.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="text-3xl sm:text-4xl font-bold text-brand-cyan mb-2">
                  {item.stat}
                </div>
                <div className="text-white/70 text-sm leading-snug">{item.label}</div>
                {item.source && (
                  <div className="text-white/30 text-xs mt-1">{item.source}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-white/10 pt-16 mt-16">
          <p className="section-label text-center mb-4">Our Technology Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Tools We <span className="heading-accent">Build With</span>
          </h2>
          <div className="space-y-10">
            {Object.entries(company.techStack).map(([category, techs]) => (
              <div key={category}>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-4">
                  {techs.map((tech) => {
                    const slug = techLogoSlugs[tech];
                    return (
                      <div
                        key={tech}
                        className="flex flex-col items-center gap-2 group cursor-default"
                      >
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-cyan/40 group-hover:bg-white/10 transition-all duration-200 flex items-center justify-center p-3">
                          {slug ? (
                            <img
                              src={`https://cdn.simpleicons.org/${slug}/ffffff`}
                              alt={tech}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <span className="text-white/60 text-xs text-center leading-tight font-medium">
                              {tech}
                            </span>
                          )}
                        </div>
                        <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
