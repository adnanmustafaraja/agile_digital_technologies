import { company } from "@/data/company";

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
          <p className="section-label text-center mb-10">Our Technology Stack</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {Object.entries(company.techStack).map(([category, techs]) => (
              <div key={category}>
                <p className="text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-3">
                  {category}
                </p>
                <ul className="space-y-1.5">
                  {techs.map((tech) => (
                    <li key={tech} className="text-white/60 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
