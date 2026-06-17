"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Richard",
    role: "Business Owner",
    company: "",
    avatar: "R",
    avatarStyle: { background: "linear-gradient(135deg, #4472C4, #2D57A8)" },
    rating: 5,
    text: "GrowWithNextify completely transformed our online visibility. We started getting consistent qualified leads within just a few weeks. The AI search strategy was unlike anything we'd seen before.",
  },
  {
    name: "Fabiola Singh",
    role: "Marketing Director",
    company: "",
    avatar: "FS",
    avatarStyle: { background: "linear-gradient(135deg, #196d24, #125018)" },
    rating: 5,
    text: "Their SEO and AI search strategy helped us outrank direct competitors and significantly reduce ad costs. Data-driven, transparent — we always knew exactly what was happening.",
  },
  {
    name: "Fahad Kaleem",
    role: "Startup Founder",
    company: "",
    avatar: "FK",
    avatarStyle: { background: "linear-gradient(135deg, #6490D8, #4472C4)" },
    rating: 5,
    text: "Professional team, clear communication, and strong results. Highly recommended for any business wanting serious AI search visibility and organic growth.",
  },
  {
    name: "Bilal J.",
    role: "E-Commerce Director",
    company: "",
    avatar: "BJ",
    avatarStyle: { background: "linear-gradient(135deg, #196d24, #196d24)" },
    rating: 5,
    text: "Went from invisible on Google to ranking for 200+ keywords in 4 months. ROAS on paid ads improved by 5x. The holistic SEO + paid approach is what sets them apart.",
  },
  {
    name: "Dorina L.",
    role: "VP of Marketing",
    company: "",
    avatar: "DL",
    avatarStyle: { background: "linear-gradient(135deg, #2D57A8, #4472C4)" },
    rating: 5,
    text: "The AEO strategy was a game-changer. We're now cited in ChatGPT and appearing in Google AI Overviews for our core topics. Lead quality has improved dramatically.",
  },
];

export default function ReviewsSection() {
  // Duplicate the list once for a seamless infinite loop.
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <span className="section-label">Client Reviews</span>
        </motion.div>

      </div>

      {/* Slider — full width, faded edges */}
      <div
        className="relative mt-14"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
        }}
      >
        <div className="flex gap-6 animate-review-scroll w-max">
          {loop.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="card p-7 flex flex-col gap-4 w-[360px] shrink-0"
            >
              {/* Quote icon */}
              <Quote size={26} style={{ color: "rgba(25,109,36,0.35)" }} />

              {/* Review text */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {r.text}
              </p>

              {/* Author row — avatar right-aligned */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <div className="text-right">
                  <p className="text-gray-900 font-bold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">
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
          animation: reviewScroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
