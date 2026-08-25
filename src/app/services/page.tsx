import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";

export const metadata: Metadata = {
  title: 'Our Services - Grow With Nextify',
  description: 'Comprehensive digital growth services including Custom Web Development, SEO, and Performance Marketing.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Hero Section */}
        <section 
          className="relative py-24 px-6 max-w-5xl mx-auto text-center"
          data-avatar-section
          data-avatar-message="We provide full-stack development and marketing."
          data-avatar-side="right"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-bold mb-5 border border-[var(--brand-primary)]/20 shadow-sm uppercase tracking-wider">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">End-to-End Digital Growth</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From lightning-fast web applications to data-driven marketing campaigns, we offer everything you need to build and scale your digital presence.
          </p>
        </section>

        {/* Development Services */}
        <section 
          className="relative py-20 px-6 bg-gray-50 border-y border-gray-100"
          data-avatar-section
          data-avatar-message="Our development stack is built for speed and scale."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="inline-block px-4 py-1.5 bg-[#4472C4]/10 text-[#2D57A8] rounded-full text-xs font-bold mb-5 border border-[#4472C4]/20 shadow-sm">Development</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Web & App Development</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We build highly performant, scalable, and secure web applications using modern frameworks like Next.js and React. Our engineering team ensures your digital product provides an unmatched user experience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#4472C4] shrink-0" /> Full-Stack Next.js Applications</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#4472C4] shrink-0" /> Custom API & Backend Development</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#4472C4] shrink-0" /> E-commerce Solutions & Migrations</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#4472C4] shrink-0" /> UI/UX Design & Prototyping</li>
                </ul>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center h-full min-h-[300px]">
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                 <span className="text-gray-400 font-medium">Architecture Diagram</span>
               </div>
             </div>
          </div>
        </section>

        {/* SEO & AEO Services */}
        <section 
          className="relative py-20 px-6 bg-white"
          data-avatar-section
          data-avatar-message="SEO and AEO drive long-term organic growth."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center h-full min-h-[300px]">
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                 <span className="text-gray-400 font-medium">Organic Traffic Growth</span>
               </div>
             </div>
             <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1.5 bg-[#196d24]/10 text-[#125018] rounded-full text-xs font-bold mb-5 border border-[#196d24]/20 shadow-sm">Marketing</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Search & AI Optimization (SEO/AEO)</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rank higher on Google and become the cited authority in AI Overviews (ChatGPT, Claude). We combine technical SEO audits with conversational query targeting to secure your digital footprint.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#196d24] shrink-0" /> Technical & On-Page SEO Audits</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#196d24] shrink-0" /> Content Strategy & Link Building</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#196d24] shrink-0" /> AI Overview (AEO) Placements</li>
                </ul>
             </div>
          </div>
        </section>

        {/* Paid Ads Section */}
        <section 
          className="relative py-20 px-6 bg-gray-50 border-t border-gray-100"
          data-avatar-section
          data-avatar-message="Need leads fast? Let's talk about our Paid Ads strategy."
          data-avatar-side="right"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="inline-block px-4 py-1.5 bg-[#f59e0b]/10 text-[#b45309] rounded-full text-xs font-bold mb-5 border border-[#f59e0b]/20 shadow-sm">Marketing</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Marketing (Paid Ads)</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Turn clicks into qualified clients with highly targeted ad campaigns. We manage Google Search, Display, and Social Media advertising to lower your CPA and maximize your Return on Ad Spend.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0" /> Google Ads (Search & Display)</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0" /> Social Media Retargeting</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><div className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0" /> Landing Page Conversion Rate Optimization</li>
                </ul>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center h-full min-h-[300px]">
               <div className="w-full aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                 <span className="text-gray-400 font-medium">ROAS Dashboard</span>
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
