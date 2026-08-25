"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <li><Link href="/" className="text-sm font-medium text-gray-600 link-hover">Home</Link></li>
          <li><Link href="/services" className="text-sm font-medium text-gray-600 link-hover">Services</Link></li>
          <li><Link href="/case-studies" className="text-sm font-medium text-gray-600 link-hover">Case Studies</Link></li>
          <li><Link href="/offers" className="text-sm font-medium text-gray-600 link-hover">Offers</Link></li>
          <li><Link href="/blog" className="text-sm font-medium text-gray-600 link-hover">Blog</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="btn-primary"
          >
            Contact
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-600 link-hover">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Services</Link>
          <Link href="/case-studies" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Case Studies</Link>
          <Link href="/offers" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Offers</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Blog</Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 justify-center text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
