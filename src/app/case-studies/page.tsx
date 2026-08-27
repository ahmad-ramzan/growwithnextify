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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Our Success Stories</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            See how we've transformed businesses with data-driven strategies and cutting-edge tech. Explore our proven impact.
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
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/id/2/800/450" alt="Analytics Graph" className="w-full h-full object-cover" />
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
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/id/0/800/450" alt="AI Chat Interface" className="w-full h-full object-cover" />
               </div>
             </div>
          </div>
        </section>


        {/* Featured Case Study 3: SEO */}
        <section 
          className="relative py-20 px-6 bg-gray-50 border-y border-gray-100"
          data-avatar-section
          data-avatar-message="Local SEO drove massive foot traffic for them."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">+210%</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Local Visibility</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">3.5x</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">More Leads</div>
                 </div>
               </div>
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/id/42/800/450" alt="Local SEO Analytics" className="w-full h-full object-cover" />
               </div>
             </div>
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tripling Organic Traffic for a Regional Franchise</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A regional service provider with 15 locations was losing market share to aggregators. We implemented a hyper-local SEO strategy to capture map pack rankings.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Solution</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Optimized 15 Google Business Profiles.</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Built programmatic location pages with localized content.</li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Featured Case Study 4: Web Dev */}
        <section 
          className="relative py-20 px-6 bg-white"
          data-avatar-section
          data-avatar-message="Our Next.js architecture made their site blazing fast."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Launching a Next.js Platform for a Media Publisher</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A high-traffic news publisher was struggling with a slow WordPress monolith that couldn't handle traffic spikes during major events.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Solution</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Headless CMS migration with Next.js frontend.</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Implemented ISR (Incremental Static Regeneration) for real-time updates.</li>
                    </ul>
                  </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">0.8s</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Page Load Time</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">100/100</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Core Web Vitals</div>
                 </div>
               </div>
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/id/119/800/450" alt="Web Dev Code" className="w-full h-full object-cover" />
               </div>
             </div>
          </div>
        </section>

        {/* Featured Case Study 5: AI Automation */}
        <section 
          className="relative py-20 px-6 bg-gray-50 border-y border-gray-100"
          data-avatar-section
          data-avatar-message="AI saved their sales team hundreds of hours."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">120hrs</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Saved Per Month</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="text-3xl font-bold text-gray-900 mb-1">45%</div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Higher Conversion</div>
                 </div>
               </div>
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/id/180/800/450" alt="AI Automation circuit" className="w-full h-full object-cover" />
               </div>
             </div>
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Streamlining Lead Qualification for Real Estate</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A fast-growing real estate agency was drowning in unqualified leads, wasting their top agents' time. We built an AI automation pipeline to qualify and route leads instantly.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Solution</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Custom LLM-powered chatbot to pre-qualify leads 24/7.</li>
                      <li className="flex items-start gap-2"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Automated n8n workflows to sync data with their CRM and notify agents.</li>
                    </ul>
                  </div>
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
