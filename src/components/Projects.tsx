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
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card card-hover group overflow-hidden flex flex-col"
            >
              {/* Visual placeholder with gradient */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-end p-6 relative overflow-hidden`}
              >
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="relative">
                  <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-brand-ice text-navy font-medium px-2.5 py-1 rounded-full border border-navy/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {project.shortDescription}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-brand-cyan text-sm font-semibold group-hover:gap-2 transition-all">
                  View case study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
