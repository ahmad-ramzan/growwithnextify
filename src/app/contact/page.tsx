import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AvatarGuide from "@/components/AvatarGuide";
import ContactContent from '@/components/ContactContent';


export const metadata: Metadata = {
  title: 'Contact Us — GrowWithNextify',
  description: 'Get in touch with GrowWithNextify. Book a free consultation or send us your project requirements. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Us — GrowWithNextify',
    description: 'Get in touch with GrowWithNextify. Book a free consultation or send us your project requirements.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <ContactContent />
      </main>
      <Footer />
      <AvatarGuide />
    </>
  );
}
