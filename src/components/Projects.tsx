import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-brand-ice">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Our Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Featured <span className="heading-accent">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Real products we've designed, built, and shipped — from mobile
            apps to enterprise platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const h = project.oklchHue;
            const gradientStyle = {
              background: `linear-gradient(135deg, oklch(0.85 0.12 ${h}), oklch(0.75 0.15 ${h + 20}))`,
            };
            const tintStyle = {
              background: `oklch(0.97 0.02 ${h})`,
            };
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card card-hover group overflow-hidden flex flex-col"
              >
                {/* Colored header */}
                <div
                  className="h-28 flex flex-col justify-between p-5 relative overflow-hidden"
                  style={gradientStyle}
                >
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  {/* Top row: category left, tech pills right */}
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="text-xs font-medium whitespace-nowrap" style={{ color: `oklch(0.3 0.1 ${h})` }}>
                      {project.category}
                    </span>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {project.tech.map((t, i) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            background: `oklch(0.92 0.04 ${h + i * 25})`,
                            color: `oklch(0.3 0.13 ${h + i * 25})`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Bottom: project name */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold" style={{ color: `oklch(0.25 0.1 ${h})` }}>{project.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1" style={tintStyle}>

                  <p className="text-navy/80 text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Key results */}
                  <p className="text-xs font-semibold text-navy/35 uppercase tracking-widest mb-3">Key Results</p>
                  <ul className="space-y-2 mb-6">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-navy/75">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: `oklch(0.5 0.12 ${h})` }} />
                        {result}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all mt-auto"
                    style={{ color: `oklch(0.45 0.13 ${h})` }}
                  >
                    View case study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
