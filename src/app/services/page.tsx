import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AvatarGuide from "@/components/AvatarGuide";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: 'Our Services — GrowWithNextify',
  description: 'Website development, mobile apps, SEO, AI automation, digital marketing, blog writing, video editing, and graphic design — everything your business needs to grow.',
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
          data-avatar-message="We provide full-stack development, marketing, and creative services."
          data-avatar-side="right"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-bold mb-5 border border-[var(--brand-primary)]/20 shadow-sm uppercase tracking-wider">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Everything You Need to <span className="text-[var(--brand-primary)]">Grow</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From web and mobile development to SEO, AI automation, content creation, and video production — one team to build, market, and scale your business.
          </p>
        </section>

        <ServicesSection />

        <CTASection />
      </main>
      <Footer />
      <AvatarGuide />
    </>
  );
}
