"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F2A1A 100%)" }}
    >
      {/* Brand gradient top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #4472C4, #2DB840)" }}
      />

      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight"
        >
          Ready to Grow Your <span style={{ color: "#4DCF60" }}>Business?</span>
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-lg leading-relaxed max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Book a free strategy call and start growing today.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-8"
        >
          <a href="#" className="btn-primary">
            Book Free Strategy Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
