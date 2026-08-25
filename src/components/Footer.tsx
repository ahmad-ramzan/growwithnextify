import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.76c1.4-2.58 7-2.77 7 2.47V19z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2 0 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56 0-4.81-.07-3.27-.15-4.77-1.69-4.92-4.92C2.21 15.56 2.2 15.19 2.2 12c0-3.2 0-3.56.07-4.81C2.42 3.96 3.93 2.42 7.19 2.27 8.44 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

const footerLinks = {
  Services: ["SEO Optimization", "AEO / AI Search", "Performance Marketing", "Competitor Analysis"],
};

const contact = [
  { icon: <Mail size={16} />, text: "sal@growwithnextify.com", href: "mailto:sal@growwithnextify.com" },
  { icon: <Phone size={16} />, text: "UAE: +971 56 562 9496", href: "tel:+971565629496" },
  { icon: <Phone size={16} />, text: "PAK: +92 301 9651202", href: "tel:+923019651202" },
  {
    icon: <MapPin size={16} />,
    text: "Laal Building, Frij Al Murar, Deira, Dubai, UAE",
    href: "https://www.google.com/maps/search/?api=1&query=Laal+Building+Frij+Al+Murar+Deira+Dubai+UAE",
  },
];

const socials = [
  {
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/company/growwithnextify-com/",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/growwithnextify",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050b14] overflow-hidden border-t border-[#13233a]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[var(--brand-primary)] opacity-10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & CTA Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105 duration-300">
              <Image 
                src="/logo.png" 
                alt="GrowWithNextify" 
                width={200}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-[#8c9fba] text-[15px] leading-relaxed mb-8 max-w-sm font-light">
              We engineer scalable growth through SEO, AI Search Optimization, and data-driven performance marketing. Your dedicated partner for modern digital dominance.
            </p>
            <a 
              href="https://calendly.com/sal-growwithnextify/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.03] hover:bg-[var(--brand-primary)] border border-white/10 hover:border-[var(--brand-primary)] text-white text-sm font-medium transition-all duration-300 group shadow-lg"
            >
              Start Your Growth Journey
              <ArrowRight size={16} className="text-[#8c9fba] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Services Column */}
          <div className="lg:col-span-2 pt-2">
            <h4 className="text-white font-semibold mb-7 text-[15px] tracking-wide">Services</h4>
            <ul className="flex flex-col gap-4.5">
              {footerLinks.Services.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[15px] text-[#8c9fba] hover:text-white transition-colors duration-200 font-light flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{l}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 pt-2">
            <h4 className="text-white font-semibold mb-7 text-[15px] tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-5">
              {contact.map((c) => (
                <li key={c.text}>
                  <a href={c.href} className="flex items-start gap-3.5 text-[15px] text-[#8c9fba] hover:text-white transition-colors duration-200 group font-light">
                    <span className="mt-0.5 text-[var(--brand-primary)] opacity-80 group-hover:opacity-100 transition-opacity bg-[var(--brand-primary)]/10 p-1.5 rounded-md">{c.icon}</span>
                    <span className="leading-relaxed">{c.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="lg:col-span-2 pt-2">
            <h4 className="text-white font-semibold mb-7 text-[15px] tracking-wide">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#8c9fba] hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[14px] text-[#6b7b93] font-light">
            &copy; {year} GrowWithNextify. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-[14px] text-[#6b7b93] hover:text-white transition-colors duration-200 font-light">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[14px] text-[#6b7b93] hover:text-white transition-colors duration-200 font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
