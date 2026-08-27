import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Grow With Nextify',
  description: 'Insights on Digital Growth, SEO, Web Development, and Paid Ads.',
};

const blogPosts = [
  {
    id: 1,
    title: "Why Next.js is the Future of E-Commerce",
    excerpt: "Discover how migrating to a headless Next.js architecture can shave seconds off your load time and dramatically improve your conversion rate.",
    category: "Web Development",
    date: "August 24, 2026",
    image: "/blog/nextjs-ecommerce.jpg",
  },
  {
    id: 2,
    title: "The 2026 Guide to AI Search Optimization (AEO)",
    excerpt: "Traditional SEO gets you ranked on Google. AEO gets you recommended by ChatGPT and Claude. Here is how to dominate both.",
    category: "SEO / AEO",
    date: "August 20, 2026",
    image: "/blog/aeo-guide.jpg",
  },
  {
    id: 3,
    title: "Stop Wasting Money on Google Ads: 5 Hidden Leaks",
    excerpt: "Most campaigns bleed budget through poor targeting and unoptimized landing pages. Learn how to plug the leaks and maximize your ROAS.",
    category: "Paid Ads",
    date: "August 15, 2026",
    image: "/blog/google-ads.jpg",
  },
  {
    id: 4,
    title: "How to Build a High-Converting B2B SaaS Landing Page",
    excerpt: "A teardown of the specific psychological triggers, UX patterns, and copywriting techniques that turn casual visitors into enterprise leads.",
    category: "Web Development",
    date: "August 10, 2026",
    image: "/blog/saas-landing.jpg",
  },
  {
    id: 5,
    title: "Local SEO Masterclass: Dominating the Map Pack",
    excerpt: "For local service businesses, the Google Map Pack is everything. Learn the exact citation and review strategy we use to get clients to #1.",
    category: "SEO / AEO",
    date: "August 5, 2026",
    image: "/blog/local-seo.jpg",
  },
  {
    id: 6,
    title: "The Death of the Traditional Marketing Agency",
    excerpt: "Why the old agency model is broken, and why performance-driven, tech-enabled growth partners are the only way forward for serious brands.",
    category: "Business Growth",
    date: "August 1, 2026",
    image: "/blog/agency-future.jpg",
  }
];

const categories = ["All", "Web Development", "SEO / AEO", "Paid Ads", "Business Growth"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative py-24 px-6 max-w-5xl mx-auto text-center"
          data-avatar-section
          data-avatar-message="Welcome to the blog! We share all our growth secrets here."
          data-avatar-side="right"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-bold mb-5 border border-[var(--brand-primary)]/20 shadow-sm uppercase tracking-wider">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Insights on <span className="text-[var(--brand-primary)]">Digital Growth</span> & Technology</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Practical, technical perspectives on Next.js development, AI Search Optimization, lead generation, and scaling revenue.
          </p>
        </section>

        {/* Category Filters */}
        <section className="px-6 border-b border-gray-200 pb-8 max-w-7xl mx-auto mb-16 overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0 
                  ? 'bg-gray-900 text-white border border-gray-900' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 pb-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col relative"
                data-avatar-section
                data-avatar-message={`"${post.title}" is a great read!`}
                data-avatar-side="left"
              >
                {/* Blog Thumbnail */}
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[var(--brand-primary)] uppercase tracking-wider">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs font-medium text-gray-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--brand-primary)] transition-colors relative z-10">
                    <Link href={`/blog`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[var(--brand-primary)] transition-colors mt-auto relative z-10">
                    Read article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <AvatarGuide />
    </>
  );
}
