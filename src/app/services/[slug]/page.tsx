import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import Link from "next/link";

// 1. Generate Static Params
export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// 2. Generate Metadata
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services — GrowWithNextify`,
    description: service.heroDescription.substring(0, 160) + "...",
  };
}

// 3. Page Component
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* ─── Hero Section ─── */}
        <section
          className="relative py-20 px-6 bg-gray-50 border-b border-gray-100"
          data-avatar-section
          data-avatar-message={service.avatarMessage}
          data-avatar-side="right"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors mb-6"
              >
                <ArrowRight className="rotate-180" size={16} />
                Back to Services
              </Link>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: service.accentBg,
                    color: service.accent,
                    border: `1px solid ${service.accentBorder}`,
                  }}
                >
                  <Icon size={28} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  {service.title}
                </h1>
              </div>
              <p
                className="text-xl font-medium mb-4"
                style={{ color: service.accent }}
              >
                {service.tagline}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: service.accent }}
                >
                  Start Your Project
                </Link>
              </div>
            </div>
            
            {/* Hero Image / Right Side */}
            <div className="hidden md:flex flex-1 justify-end relative h-80 w-full max-w-sm">
              <div className="absolute inset-0 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center relative">
                 <img 
                   src={service.heroImage} 
                   alt={`${service.title} Illustration`}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Features Grid ─── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific business requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((featureGroup, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  {featureGroup.heading}
                </h3>
                <ul className="space-y-4">
                  {featureGroup.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0" style={{ color: service.accent }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Benefits Section ─── */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our {service.title} Services?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: service.accentBg, color: service.accent }}>
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pricing Section ─── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-left mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Simple, transparent pricing.
            </h2>
            <p className="text-gray-500 text-lg">
              Start with the right package for your goals. Transparent pricing with no hidden fees and a clear path to growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {service.pricing.packages.map((pkg, index) => {
              const isMonthly = pkg.price.includes('/mo');
              const displayPrice = pkg.price.replace('/mo', '');
              
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-8 border ${index === 0 ? 'shadow-sm border-2' : 'border-gray-200'} relative`}
                  style={index === 0 ? { borderColor: service.accent } : undefined}
                >
                  {index === 0 && (
                    <div 
                      className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider" 
                      style={{ backgroundColor: service.accent }}
                    >
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <span className="text-xs font-medium text-gray-400">0{index + 1}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-8 h-10">{pkg.description}</p>
                  
                  <div className="mb-8 flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900 tracking-tight">{displayPrice}</span>
                    {isMonthly && <span className="text-sm text-gray-500 font-medium ml-1">/ mo</span>}
                  </div>
                  
                  <hr className="border-gray-100 mb-8" />
                  
                  <ul className="space-y-4 mb-10">
                    {index > 0 && (
                      <li className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-gray-400" strokeWidth={3} />
                        <span className="text-gray-600 text-sm">Everything in {service.pricing.packages[index - 1].name}</span>
                      </li>
                    )}
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-gray-400" strokeWidth={3} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-sm text-sm font-semibold transition-colors ${
                      index === 0 
                        ? 'bg-gray-900 text-white hover:bg-black' 
                        : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {index === 0 ? 'Start your project' : `Upgrade to ${pkg.name}`}
                    <ArrowRight size={14} />
                  </Link>
                  
                  <div className="text-center mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                    <Check size={12} className="text-gray-400" strokeWidth={3} />
                    100% satisfaction guarantee
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Process ─── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A transparent, step-by-step approach to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line on desktop */}
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-gray-100 -z-10" />
                )}
                
                <div className="text-4xl font-black text-gray-100 mb-4 tracking-tighter inline-block relative bg-white pr-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FAQs ─── */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
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
