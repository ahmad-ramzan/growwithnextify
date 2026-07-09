"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const resultImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/results/image-${String(i).padStart(3, "0")}.png`,
  alt: `Client result ${i + 1}`,
}));

export default function ResultsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? resultImages : resultImages.slice(0, 6);

  return (
    <section id="results" className="relative py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Real Numbers, Real Growth
          </motion.h2 >
        </div >

        {/* Static Gallery Grid */}
        < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" >
          <AnimatePresence>
            {displayedImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={img.src}
                className="overflow-hidden aspect-[4/3] rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div >

        {/* Toggle Button */}
        < div className="mt-16 flex justify-center" >
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] hover:shadow-md transition-all duration-300"
          >
            {showAll ? "Show Less" : "View All Results"}
            {showAll ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
          </button>
        </div >
      </div >
    </section >
  );
}
