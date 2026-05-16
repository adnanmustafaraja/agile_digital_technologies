import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Insights</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            From Our <span className="heading-accent">Blog</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Practical guides, industry insights, and expert perspectives on
            software development, AI, and IT outsourcing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              {/* Photo header */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.photo}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

                {/* Overlaid text */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-white/80 text-xs">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-brand-cyan transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 flex flex-col flex-1 bg-brand-ice">
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <User size={11} />
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-brand-cyan text-xs font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
