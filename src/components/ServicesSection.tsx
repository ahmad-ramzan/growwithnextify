import React from "react";

export default function ServicesSection() {
  return (
    <section 
      className="relative py-24 px-6 bg-gray-50 border-y border-gray-100"
      data-avatar-section
      data-avatar-message="Here is a breakdown of exactly what we can do for you."
      data-avatar-side="right"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Core Services</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">End-to-end solutions to build your product, rank in search, and scale your revenue.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Development Services */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow group">
            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-[#4472C4]/10 text-[#2D57A8] rounded-full text-xs font-bold border border-[#4472C4]/20 shadow-sm">Development</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors">Custom Web & App Development</h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              We build highly performant, scalable, and secure web applications using modern frameworks like Next.js and React.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4472C4] shrink-0" /> 
                <span>Full-Stack Next.js Applications</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4472C4] shrink-0" /> 
                <span>Custom API & Backend Development</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4472C4] shrink-0" /> 
                <span>E-commerce Solutions & Migrations</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4472C4] shrink-0" /> 
                <span>UI/UX Design & Prototyping</span>
              </li>
            </ul>
          </div>

          {/* SEO & AEO Services */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow group">
            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-[#196d24]/10 text-[#125018] rounded-full text-xs font-bold border border-[#196d24]/20 shadow-sm">Marketing</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors">Search & AI Optimization</h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              Rank higher on Google and become the cited authority in AI Overviews (ChatGPT, Claude) to secure your digital footprint.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#196d24] shrink-0" /> 
                <span>Technical & On-Page SEO Audits</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#196d24] shrink-0" /> 
                <span>Content Strategy & Link Building</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#196d24] shrink-0" /> 
                <span>AI Overview (AEO) Placements</span>
              </li>
            </ul>
          </div>

          {/* Paid Ads Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow group">
            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-[#f59e0b]/10 text-[#b45309] rounded-full text-xs font-bold border border-[#f59e0b]/20 shadow-sm">Marketing</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors">Performance Marketing</h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              Turn clicks into qualified clients with highly targeted ad campaigns. We manage Search, Display, and Social Media advertising.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> 
                <span>Google Ads (Search & Display)</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> 
                <span>Social Media Retargeting</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> 
                <span>Landing Page Conversion Optimization</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
