"use client";

import { motion } from "framer-motion";

const resultImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/results/image-${String(i).padStart(3, "0")}.png`,
  alt: `Client result ${i + 1}`,
}));

export default function ResultsSection() {
  // Duplicate for seamless loop.
  const loop = [...resultImages, ...resultImages];

  return (
    <section id="results" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <span className="section-label">Proven Results</span>
        </motion.div>
      </div>

      {/* Slider — faded edges, hover to pause */}
      <div
        className="relative mt-14"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
        }}
      >
        <div className="flex gap-6 animate-results-scroll w-max">
          {loop.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="card overflow-hidden w-[550px] h-[300px] shrink-0 flex items-center justify-center bg-gray-50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes resultsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        :global(.animate-results-scroll) {
          animation: resultsScroll 140s linear infinite;
        }
      `}</style>
    </section>
  );
}
