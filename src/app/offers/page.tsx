import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";
import { Check, Code2, LineChart, Target } from "lucide-react";

export const metadata: Metadata = {
  title: 'Offers - Grow With Nextify',
  description: 'Our core service packages: Digital Presence Build, Organic Dominance, and Paid Acceleration.',
};

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-6 max-w-5xl mx-auto text-center"
          data-avatar-section
          data-avatar-message="Choose the engine that drives your growth."
          data-avatar-side="right"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-bold mb-5 border border-[var(--brand-primary)]/20 shadow-sm uppercase tracking-wider">Offers</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Build the foundation.<br/>Dominate search.<br/>Scale with ads.</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Take one or combine them to create an unstoppable digital growth engine.
          </p>
        </section>

        {/* Pricing/Offers Grid */}
        <section className="relative pb-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            
            {/* Offer 1: Digital Presence */}
            <div 
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              data-avatar-section
              data-avatar-message="A fast, custom-coded Next.js site is the ultimate foundation."
              data-avatar-side="left"
            >
              <div className="w-12 h-12 bg-[#4472C4]/10 rounded-xl flex items-center justify-center text-[#2D57A8] mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Presence</h3>
              <p className="text-gray-500 text-sm mb-8">Build a custom, high-performance web application designed to convert.</p>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Architecture</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#4472C4] mt-0.5 shrink-0" /> Next.js Headless Build</li>
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#4472C4] mt-0.5 shrink-0" /> Custom API Integrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Design</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#4472C4] mt-0.5 shrink-0" /> Premium UI/UX Prototyping</li>
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#4472C4] mt-0.5 shrink-0" /> Conversion-Optimized Layouts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Performance</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#4472C4] mt-0.5 shrink-0" /> Core Web Vitals Optimization</li>
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#4472C4] mt-0.5 shrink-0" /> Secure Cloud Hosting Setup</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-gray-100">
                <a href="#contact" className="block w-full py-3.5 px-4 bg-white border-2 border-gray-200 text-center rounded-xl font-semibold text-gray-900 hover:border-gray-900 transition-colors">Book a Call</a>
              </div>
            </div>

            {/* Offer 2: Organic Dominance */}
            <div 
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-lg transform lg:-translate-y-4 flex flex-col relative overflow-hidden"
              data-avatar-section
              data-avatar-message="SEO and AEO are my specialties! Let's get you ranked."
              data-avatar-side="left"
            >
              <div className="absolute top-0 right-0 bg-[#196d24] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">Most Popular</div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#4ade80] mb-6">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Organic Dominance</h3>
              <p className="text-gray-400 text-sm mb-8">Rank at the top of Google and become the cited authority in AI Overviews.</p>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">Technical SEO</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-300"><Check size={16} className="text-[#4ade80] mt-0.5 shrink-0" /> Deep Site Architecture Audit</li>
                    <li className="flex items-start gap-3 text-sm text-gray-300"><Check size={16} className="text-[#4ade80] mt-0.5 shrink-0" /> Schema.org & Microdata Markup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">AI Search (AEO)</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-300"><Check size={16} className="text-[#4ade80] mt-0.5 shrink-0" /> ChatGPT & Claude Citation Strategy</li>
                    <li className="flex items-start gap-3 text-sm text-gray-300"><Check size={16} className="text-[#4ade80] mt-0.5 shrink-0" /> Conversational Query Targeting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">Authority</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-300"><Check size={16} className="text-[#4ade80] mt-0.5 shrink-0" /> High-Trust Link Acquisition</li>
                    <li className="flex items-start gap-3 text-sm text-gray-300"><Check size={16} className="text-[#4ade80] mt-0.5 shrink-0" /> Digital PR & Brand Mentions</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-gray-800">
                <a href="#contact" className="block w-full py-3.5 px-4 bg-white text-center rounded-xl font-semibold text-gray-900 hover:bg-gray-100 transition-colors">Book a Call</a>
              </div>
            </div>

            {/* Offer 3: Paid Acceleration */}
            <div 
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              data-avatar-section
              data-avatar-message="We make sure every ad dollar generates a positive return."
              data-avatar-side="left"
            >
              <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center text-[#d97706] mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Paid Acceleration</h3>
              <p className="text-gray-500 text-sm mb-8">Turn clicks into qualified leads instantly with highly targeted ad campaigns.</p>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Google & Meta Ads</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#d97706] mt-0.5 shrink-0" /> High-Intent Search Campaigns</li>
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#d97706] mt-0.5 shrink-0" /> Cross-Platform Retargeting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Optimization (CRO)</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#d97706] mt-0.5 shrink-0" /> A/B Testing & Funnel Analysis</li>
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#d97706] mt-0.5 shrink-0" /> Landing Page Optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Analytics</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#d97706] mt-0.5 shrink-0" /> Granular Conversion Tracking</li>
                    <li className="flex items-start gap-3 text-sm text-gray-700"><Check size={16} className="text-[#d97706] mt-0.5 shrink-0" /> Custom ROAS Dashboards</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-gray-100">
                <a href="#contact" className="block w-full py-3.5 px-4 bg-white border-2 border-gray-200 text-center rounded-xl font-semibold text-gray-900 hover:border-gray-900 transition-colors">Book a Call</a>
              </div>
            </div>

          </div>
        </section>

        {/* First 30 Days Onboarding */}
        <section className="py-24 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your First 30 Days</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="text-sm font-bold text-[var(--brand-primary)] mb-2">Days 1–3</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Access & Audit</h4>
                <p className="text-sm text-gray-600">We analyze your existing architecture, code, and ad accounts to find immediate leverage points.</p>
              </div>
              <div className="relative">
                <div className="text-sm font-bold text-[var(--brand-primary)] mb-2">Days 4–10</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Strategy & Setup</h4>
                <p className="text-sm text-gray-600">We formulate the technical roadmap and begin laying the foundation for your chosen packages.</p>
              </div>
              <div className="relative">
                <div className="text-sm font-bold text-[var(--brand-primary)] mb-2">Days 11–20</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Execution</h4>
                <p className="text-sm text-gray-600">Development sprints, deep SEO on-page optimization, and ad campaign launches.</p>
              </div>
              <div className="relative">
                <div className="text-sm font-bold text-[var(--brand-primary)] mb-2">Days 21–30</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Optimization</h4>
                <p className="text-sm text-gray-600">First reporting cycle. We analyze the initial data, refine the approach, and scale what works.</p>
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
