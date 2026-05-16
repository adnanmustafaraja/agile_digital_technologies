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

  const h = project.oklchHue;
  const heroBg    = `linear-gradient(135deg, oklch(0.85 0.12 ${h}), oklch(0.75 0.15 ${h + 20}))`;
  const tintBg    = `oklch(0.97 0.02 ${h})`;
  const darkColor = `oklch(0.25 0.1 ${h})`;
  const midColor  = `oklch(0.35 0.1 ${h})`;
  const accentColor = `oklch(0.5 0.12 ${h})`;

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero band */}
      <div
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: heroBg }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-60"
            style={{ color: midColor }}
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
          <div className="mb-4">
            <span
              className="inline-block text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: `oklch(0.92 0.04 ${h})`, color: midColor }}
            >
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: darkColor }}>
            {project.name}
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: midColor }}>
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tech + client */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-gray-100">
          <span className="text-gray-500 text-sm">Built with:</span>
          {project.tech.map((t, i) => (
            <span
              key={t}
              className="text-sm font-medium px-3 py-1 rounded-lg"
              style={{
                background: `oklch(0.92 0.04 ${h + i * 25})`,
                color: `oklch(0.3 0.13 ${h + i * 25})`,
              }}
            >
              {t}
            </span>
          ))}
          <span className="ml-auto text-sm text-gray-500">
            Client:{" "}
            <span className="font-semibold" style={{ color: darkColor }}>
              {project.client}
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: darkColor }}>
                About the Project
              </h2>
              <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: darkColor }}>
                The Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: darkColor }}>
                Our Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Results */}
            <div className="rounded-2xl p-6" style={{ background: tintBg }}>
              <h3 className="font-bold mb-5" style={{ color: darkColor }}>
                Results
              </h3>
              <ul className="space-y-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: accentColor }}
                    />
                    <span className="text-gray-700 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 text-center" style={{ background: darkColor }}>
              <h3 className="text-white font-bold text-lg mb-2">
                Want Something Like This?
              </h3>
              <p className="text-white/60 text-sm mb-5">
                Let&apos;s discuss your project — free consultation.
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
