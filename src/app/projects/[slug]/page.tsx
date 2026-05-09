import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero band */}
      <div
        className={`bg-gradient-to-br ${project.color} relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8`}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
          <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {project.name}
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">{project.shortDescription}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tech + client */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-gray-100">
          <span className="text-gray-500 text-sm">Built with:</span>
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm bg-brand-ice border border-navy/10 text-navy font-medium px-3 py-1 rounded-lg"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto text-sm text-gray-500">
            Client: <span className="text-navy font-semibold">{project.client}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">About the Project</h2>
              <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Results */}
            <div className="bg-brand-ice rounded-2xl p-6">
              <h3 className="text-navy font-bold mb-5">Results</h3>
              <ul className="space-y-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-brand-cyan flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-navy rounded-2xl p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">
                Want Something Like This?
              </h3>
              <p className="text-white/60 text-sm mb-5">
                Let's discuss your project — free consultation.
              </p>
              <Link href="/#contact" className="btn-primary justify-center w-full">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
