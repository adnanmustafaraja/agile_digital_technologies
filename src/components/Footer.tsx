import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-gray-600 border-t border-slate-200">
      <div className="container-xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-0 mb-4">
              <Image
                src="/logo.png"
                alt={company.name}
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-xl tracking-tight text-navy">
                  Agile Digital
                </span>
                <span className="text-sm font-medium text-brand-cyan -mt-1">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {company.tagline}. Pakistan-based IT outsourcing partner helping
              US businesses scale with world-class software talent.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: company.social.instagram, label: "Instagram" },
                { icon: Facebook, href: company.social.facebook, label: "Facebook" },
                { icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: company.social.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-brand-cyan transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Projects", href: "/#projects" },
                { label: "Blog", href: "/#blog" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 hover:text-brand-cyan transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-brand-cyan" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-start gap-3 hover:text-brand-cyan transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-brand-cyan" />
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-brand-cyan" />
                <span>{company.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {year} {company.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="#" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
