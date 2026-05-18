"use client";

import { motion } from "framer-motion";
import { Search, Bot, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Search size={26} />,
    tag: "SEO",
    title: "Search Engine Optimization",
    benefits: ["Higher keyword rankings", "More organic traffic", "Stronger domain authority", "Technical SEO audits"],
    iconStyle: { background: "rgba(68,114,196,0.10)", color: "#4472C4" },
    tagStyle: { background: "rgba(68,114,196,0.08)", color: "#4472C4", border: "1px solid rgba(68,114,196,0.20)" },
    dot: "#4472C4",
    featured: false,
  },
  {
    icon: <Bot size={26} />,
    tag: "AEO",
    title: "AI Search Optimization",
    benefits: ["Appear in AI Overviews", "ChatGPT citations", "Voice search visibility", "Featured answer placement"],
    iconStyle: { background: "rgba(45,184,64,0.10)", color: "#1D9830" },
    tagStyle: { background: "rgba(45,184,64,0.10)", color: "#1D9830", border: "1px solid rgba(45,184,64,0.22)" },
    dot: "#2DB840",
    featured: true,
  },
  {
    icon: <Target size={26} />,
    tag: "Paid Ads",
    title: "Performance Marketing",
    benefits: ["Lower cost per lead", "Higher ROAS", "Qualified lead pipeline", "Continuous A/B testing"],
    iconStyle: { background: "rgba(68,114,196,0.08)", color: "#2D57A8" },
    tagStyle: { background: "rgba(68,114,196,0.06)", color: "#2D57A8", border: "1px solid rgba(68,114,196,0.16)" },
    dot: "#4472C4",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SolutionSection() {
  return (
    <section id="services" className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="section-label">Our Solution</span>
        </motion.div>


        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-3 gap-6 mt-14"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className={`relative card p-8 flex flex-col gap-6 ${s.featured ? "outline outline-2 outline-offset-2 outline-[#2DB840]" : ""}`}
              style={s.featured ? { boxShadow: "0 12px 40px rgba(45,184,64,0.12), 0 4px 12px rgba(0,0,0,0.06)" } : undefined}
            >
              {/* Featured badge */}
              {s.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-gray-900 text-xs font-bold tracking-wide whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #2DB840, #1D9830)",
                    boxShadow: "0 4px 14px rgba(45,184,64,0.30)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Icon + tag */}
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={s.iconStyle}
                >
                  {s.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={s.tagStyle}>
                  {s.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>

              {/* Benefits */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-gray-400 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#cta"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mt-2"
                style={{ color: s.dot }}
              >
                Learn more
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
