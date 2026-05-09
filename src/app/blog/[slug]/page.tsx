import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero band */}
      <div
        className={`bg-gradient-to-br ${post.color} relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
          {post.excerpt}
        </p>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {post.content.split("\n\n").map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            return (
              <p key={i} className="mb-6">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-navy rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">
            Ready to Work Together?
          </h3>
          <p className="text-white/60 mb-6">
            Get a free consultation from our team — no commitment required.
          </p>
          <Link href="/#contact" className="btn-primary justify-center">
            Get a Free Consultation
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-brand-cyan hover:underline text-sm font-medium"
          >
            <ArrowLeft size={14} /> Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
