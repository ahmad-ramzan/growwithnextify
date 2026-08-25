import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Case Studies - Grow With Nextify',
  description: 'See how we have helped businesses scale their revenue through Custom Web Development, SEO, and Paid Ads.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Hero Section */}
        <section 
          className="relative py-24 px-6 max-w-5xl mx-auto text-center"
          data-avatar-section
          data-avatar-message="Don't just take our word for it—look at the numbers!"
          data-avatar-side="right"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-bold mb-5 border border-[var(--brand-primary)]/20 shadow-sm uppercase tracking-wider">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Real Numbers, Real Growth</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore how we've partnered with ambitious brands to re-architect their digital presence and exponentially scale their revenue.
          </p>
        </section>

        {/* Featured Case Study 1: E-Commerce */}
        <section 
          className="relative py-20 px-6 bg-gray-50 border-y border-gray-100"
          data-avatar-section
          data-avatar-message="We increased their organic traffic by 340% in just 6 months."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">+340%</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Organic Traffic</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">2.4x</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Conversion Rate</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">$-42%</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">CPA</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-[var(--brand-primary)] mb-1">6 Months</div>
                   <div className="text-xs text-[var(--brand-primary)] font-medium uppercase tracking-wide">Timeline</div>
                 </div>
               </div>
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                 <span className="text-gray-400 font-medium">Analytics Graph Screenshot</span>
               </div>
             </div>
             
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Scaling a D2C E-Commerce Brand to $1M/mo</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This Direct-to-Consumer brand had a great product but was struggling with a slow Shopify storefront and high ad costs. We migrated them to a headless Next.js architecture and overhauled their SEO strategy.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Challenge</h3>
                    <p className="text-gray-600 text-sm">Slow page load times (4s+) were causing a 70% bounce rate on mobile. Their reliance on paid ads was eroding profit margins.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Solution</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Rebuilt storefront using Next.js for sub-second load times.</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Executed a 6-month technical SEO and content strategy to capture high-intent keywords.</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Restructured Google Ads for higher ROAS.</li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Featured Case Study 2: B2B SaaS */}
        <section 
          className="relative py-20 px-6 bg-white"
          data-avatar-section
          data-avatar-message="We dominated AI search results (AEO) for this B2B SaaS!"
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dominating AI Search for a B2B SaaS</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A high-ticket B2B software company wanted to capture leads from enterprise buyers who were increasingly using ChatGPT and Perplexity to research enterprise solutions.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Challenge</h3>
                    <p className="text-gray-600 text-sm">Traditional SEO wasn't enough. They were completely invisible in AI Overviews and ChatGPT responses for their core product categories.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Solution</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Restructured site architecture with strong semantic HTML and Schema.org markup.</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Created dense, authoritative "Entity" pages optimized for Large Language Models (AEO).</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Secured citations on high-trust industry hubs.</li>
                    </ul>
                  </div>
                </div>
             </div>

             <div className="order-1 lg:order-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">#1</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">ChatGPT Ranking</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">+412%</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Enterprise Leads</div>
                 </div>
               </div>
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                 <span className="text-gray-400 font-medium">ChatGPT Citation Screenshot</span>
               </div>
             </div>
          </div>
        </section>


        <CTASection />
      </main>
      <Footer />
      <AvatarGuide />
    </>
  );
}
