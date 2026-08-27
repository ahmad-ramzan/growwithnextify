"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => 
    `text-sm link-hover transition-colors ${pathname === path ? "text-[var(--brand-primary)] font-bold" : "text-gray-600 font-medium"}`;

  const getMobileLinkClass = (path: string) => 
    `link-hover transition-colors ${pathname === path ? "text-[var(--brand-primary)] font-bold" : "text-gray-900 font-medium"}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(30,93,153,0.08)]" : "bg-transparent py-2"}`}>
      {/* Secondary color accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-secondary-bg" />

      <nav className="relative max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.png" alt="Company Logo" width={224} height={112} priority className="h-16 md:h-28 w-auto object-contain transition-all duration-300" />
        </Link>

        {/* Centered links — absolute so they're dead center regardless of logo/CTA width */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <li><Link href="/" className={getLinkClass("/")}>Home</Link></li>
          <li><Link href="/services" className={getLinkClass("/services")}>Services</Link></li>
          <li><Link href="/case-studies" className={getLinkClass("/case-studies")}>Case Studies</Link></li>
          <li><Link href="/offers" className={getLinkClass("/offers")}>Offers</Link></li>
          <li><Link href="/blog" className={getLinkClass("/blog")}>Blog</Link></li>
          <li><Link href="/contact" className={getLinkClass("/contact")}>Contact</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://calendly.com/sal-growwithnextify/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Call
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-600 link-hover">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className={getMobileLinkClass("/")}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className={getMobileLinkClass("/services")}>Services</Link>
          <Link href="/case-studies" onClick={() => setOpen(false)} className={getMobileLinkClass("/case-studies")}>Case Studies</Link>
          <Link href="/offers" onClick={() => setOpen(false)} className={getMobileLinkClass("/offers")}>Offers</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className={getMobileLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={getMobileLinkClass("/contact")}>Contact</Link>
          <a
            href="https://calendly.com/sal-growwithnextify/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 justify-center text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
