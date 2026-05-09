"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Logo mark: two overlapping triangles using CSS */}
            <div className="flex items-end gap-0.5">
              <div className="w-4 h-5 bg-navy rounded-sm" />
              <div className="w-4 h-3 bg-brand-cyan rounded-sm mb-0.5" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-bold text-base tracking-tight transition-colors ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                Agile Digital
              </span>
              <span
                className={`text-xs font-medium transition-colors ${
                  scrolled ? "text-brand-cyan" : "text-brand-cyan"
                }`}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-cyan ${
                    scrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/#contact" className="btn-primary text-sm py-2.5 px-5">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-brand-cyan transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <Link
                href="/#contact"
                className="btn-primary text-sm w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
