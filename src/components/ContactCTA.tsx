"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a form backend (e.g. Formspree, EmailJS, or a custom API route)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-brand-ice">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — copy */}
          <div>
            <p className="section-label">Get in Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-5 leading-tight">
              {company.contact.heading}{" "}
              <span className="heading-accent">{company.contact.headingAccent}</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              {company.contact.subheading}
            </p>

            {/* Trust points */}
            <ul className="space-y-3 mb-10">
              {company.contact.trustPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={52} className="text-brand-cyan mx-auto mb-4" />
                <h3 className="text-navy font-bold text-xl mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-500">
                  We'll get back to you within 24 hours with a free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition bg-white text-gray-700"
                    >
                      <option value="">Select a service</option>
                      {company.contact.services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition bg-white text-gray-700"
                    >
                      <option value="">Select budget range</option>
                      {company.contact.budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals, current challenges, or what you'd like to build..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 transition resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Request Free Consultation
                </button>

                <p className="text-center text-gray-400 text-xs">
                  We respond within 24 hours. No spam, no commitment required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
