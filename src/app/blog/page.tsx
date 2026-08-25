import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";
import Link from 'next/link';
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
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "The 2026 Guide to AI Search Optimization (AEO)",
    excerpt: "Traditional SEO gets you ranked on Google. AEO gets you recommended by ChatGPT and Claude. Here is how to dominate both.",
    category: "SEO / AEO",
    date: "August 20, 2026",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    id: 3,
    title: "Stop Wasting Money on Google Ads: 5 Hidden Leaks",
    excerpt: "Most campaigns bleed budget through poor targeting and unoptimized landing pages. Learn how to plug the leaks and maximize your ROAS.",
    category: "Paid Ads",
    date: "August 15, 2026",
    gradient: "from-orange-500 to-amber-400"
  },
  {
    id: 4,
    title: "How to Build a High-Converting B2B SaaS Landing Page",
    excerpt: "A teardown of the specific psychological triggers, UX patterns, and copywriting techniques that turn casual visitors into enterprise leads.",
    category: "Web Development",
    date: "August 10, 2026",
    gradient: "from-indigo-500 to-purple-400"
  },
  {
    id: 5,
    title: "Local SEO Masterclass: Dominating the Map Pack",
    excerpt: "For local service businesses, the Google Map Pack is everything. Learn the exact citation and review strategy we use to get clients to #1.",
    category: "SEO / AEO",
    date: "August 5, 2026",
    gradient: "from-rose-500 to-pink-400"
  },
  {
    id: 6,
    title: "The Death of the Traditional Marketing Agency",
    excerpt: "Why the old agency model is broken, and why performance-driven, tech-enabled growth partners are the only way forward for serious brands.",
    category: "Business Growth",
    date: "August 1, 2026",
    gradient: "from-gray-700 to-gray-900"
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
          className="relative py-24 px-6 max-w-7xl mx-auto"
          data-avatar-section
          data-avatar-message="Welcome to the blog! We share all our growth secrets here."
          data-avatar-side="right"
        >
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-xs font-bold mb-5 tracking-wider uppercase">Grow With Nextify Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Insights on <span className="text-[var(--brand-primary)]">Digital Growth</span> & Technology</h1>
            <p className="text-lg text-gray-600">
              Practical, technical perspectives on Next.js development, AI Search Optimization, lead generation, and scaling revenue.
            </p>
          </div>
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
                {/* Thumbnail Placeholder */}
                <div className={`w-full aspect-video bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                   {/* Abstract geometric shapes for visual interest */}
                   <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                   <div className="absolute top-4 left-4 w-16 h-16 bg-black/10 rounded-full blur-xl" />
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
