import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center pt-40 md:pt-20">
      <div className="absolute inset-0 max-w-3xl mx-auto opacity-10 pointer-events-none">
        {/* Removed gradient for pure minimalism */}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <span className="section-label mb-6">
          Clarity & Vision
        </span>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
          Grow Your Business with <br className="hidden md:block" />
          <strong style={{ color: "var(--brand-primary)" }} className="font-bold">AEO, SEO & Performance Marketing</strong>
        </h1>

        <p className="text-lg text-gray-500 font-light max-w-2xl leading-relaxed mb-6">
          We help businesses generate qualified leads through:
        </p>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-2xl mb-12">
          {[
            "SEO",
            "AI Search Optimization (AEO)",
            "Paid Ads",
            "Conversion-focused marketing systems",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-base text-gray-700 font-medium"
            >
              <CheckCircle2 size={18} style={{ color: "var(--brand-primary)" }} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#" className="btn-primary">
            Book Free Strategy Call
            <ArrowRight size={16} />
          </a>
          <a href="#" className="btn-ghost">
            Get Free Competitor Growth Report
          </a>
        </div>
      </div>
    </section>
  );
}
