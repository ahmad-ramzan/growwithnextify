"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Richard",
    role: "Business Owner",
    company: "",
    avatar: "R",
    rating: 5,
    text: "GrowWithNextify completely transformed our online visibility. We started getting consistent qualified leads within just a few weeks. The AI search strategy was unlike anything we'd seen before.",
  },
  {
    name: "Fabiola Singh",
    role: "Marketing Director",
    company: "",
    avatar: "FS",
    rating: 5,
    text: "Their SEO and AI search strategy helped us outrank direct competitors and significantly reduce ad costs. Data-driven, transparent — we always knew exactly what was happening.",
  },
  {
    name: "Fahad Kaleem",
    role: "Startup Founder",
    company: "",
    avatar: "FK",
    rating: 5,
    text: "Professional team, clear communication, and strong results. Highly recommended for any business wanting serious AI search visibility and organic growth.",
  },
  {
    name: "Bilal J.",
    role: "E-Commerce Director",
    company: "",
    avatar: "BJ",
    rating: 5,
    text: "Went from invisible on Google to ranking for 200+ keywords in 4 months. ROAS on paid ads improved by 5x. The holistic SEO + paid approach is what sets them apart.",
  },
  {
    name: "Dorina L.",
    role: "VP of Marketing",
    company: "",
    avatar: "DL",
    rating: 5,
    text: "The AEO strategy was a game-changer. We're now cited in ChatGPT and appearing in Google AI Overviews for our core topics. Lead quality has improved dramatically.",
  },
];

export default function ReviewsSection() {
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="relative py-12 bg-[#fafcff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">


        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
        >
          Loved by our partners
        </motion.h2>
      </div>

      {/* Slider — full width, faded edges */}
      <div
        className="relative z-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-6 animate-review-scroll w-max py-4">
          {loop.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="bg-white p-8 rounded-2xl flex flex-col gap-5 w-[380px] shrink-0 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-1 text-[#f59e0b]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote size={32} className="text-[var(--brand-primary)] opacity-10" />
              </div>

              {/* Review text */}
              <p className="text-[#4b5563] text-[15px] leading-relaxed flex-1 italic">
                "{r.text}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100 mt-2">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white bg-[var(--brand-secondary)] shadow-inner">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {r.company ? `${r.role}, ${r.company}` : r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        :global(.animate-review-scroll) {
          animation: reviewScroll 50s linear infinite;
        }
        :global(.animate-review-scroll:hover) {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
