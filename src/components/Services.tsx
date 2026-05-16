import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Globe, BrainCircuit, Palette, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2,
  Smartphone,
  Globe,
  BrainCircuit,
  Palette,
  TrendingUp,
  ShieldCheck,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Our <span className="heading-accent">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            End-to-end technology services designed to help US businesses scale
            faster — without the overhead of local hiring.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-6 group flex flex-col rounded-2xl bg-brand-ice border border-brand-cyan/15 hover:border-brand-cyan/40 transition-all duration-200 shadow-md shadow-brand-cyan/10 hover:shadow-lg hover:shadow-brand-cyan/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
                  <Icon size={22} className="text-brand-cyan" />
                </div>

                {/* Name */}
                <h3 className="text-navy font-semibold text-base mb-2 group-hover:text-brand-cyan transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {service.shortDescription}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-brand-cyan text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
