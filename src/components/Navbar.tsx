"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(30,93,153,0.08)]" : "bg-transparent py-2"}`}>
      {/* Secondary color accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-secondary-bg" />

      <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Company Logo" className="h-28 w-auto object-contain" />
        </a>

        {/* Centered links — absolute so they're dead center regardless of logo/CTA width */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <li><a href="/#services" className="text-sm font-medium text-gray-600 link-hover">Services</a></li>
          <li><a href="/#results" className="text-sm font-medium text-gray-600 link-hover">Results</a></li>
          <li><a href="/#reviews" className="text-sm font-medium text-gray-600 link-hover">Reviews</a></li>
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
          <a href="/#services" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Services</a>
          <a href="/#results" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Results</a>
          <a href="/#reviews" onClick={() => setOpen(false)} className="text-gray-900 font-medium link-hover">Reviews</a>
          <a
            href="https://calendly.com/sal-growwithnextify/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 justify-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
