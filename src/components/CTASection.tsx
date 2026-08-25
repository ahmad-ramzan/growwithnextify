"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 overflow-hidden"
      data-avatar-section
      data-avatar-message="Ready to scale your business? Let's talk!"
      data-avatar-side="right"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          Ready to Grow Your Business?
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto text-gray-500 font-light"
        >
          Most clients keep us on after launch as their ongoing AI partner. Monthly strategy sessions, evolving systems, and continued support as the business grows.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://calendly.com/sal-growwithnextify/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
