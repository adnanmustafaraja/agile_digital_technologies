import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero band */}
      <div className="bg-navy-dark dot-grid relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-cyan text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">{service.shortDescription}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              {service.longDescription}
            </p>

            <h2 className="text-2xl font-bold text-navy mb-5">What's Included</h2>
            <ul className="space-y-3 mb-12">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-cyan flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech stack */}
            <div className="bg-brand-ice rounded-2xl p-6">
              <h3 className="text-navy font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-white border border-navy/10 text-navy font-medium px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy rounded-2xl p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-white/60 text-sm mb-5">
                Free consultation. No commitment required.
              </p>
              <Link href="/#contact" className="btn-primary justify-center w-full">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
