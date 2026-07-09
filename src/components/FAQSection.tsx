"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is AEO (Answer Engine Optimization)?",
    a: "AEO, or Answer Engine Optimization, is the practice of optimizing your content and online presence to appear in AI-generated answers. This includes platforms like ChatGPT, Google AI Overviews, Perplexity, and Gemini. As more users get answers directly from AI rather than clicking search results, being cited by these engines is critical for visibility.",
  },
  {
    q: "How is AEO different from traditional SEO?",
    a: "Traditional SEO focuses on ranking your website in Google's blue-link results through keyword targeting, backlinks, and technical optimization. AEO goes further — it optimizes your content structure, authority signals, and entity associations so that AI models pull your brand as a trusted source when answering user queries. Think of AEO as the next evolution of SEO.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most clients see measurable ranking improvements within 60–90 days, with significant traffic gains by month 4–6. SEO is a compounding channel — results build over time and continue growing without ongoing ad spend. We set clear milestones and provide monthly reporting so you're never in the dark.",
  },
  {
    q: "Do you offer custom pricing packages?",
    a: "Yes. Every business has unique requirements and challenges. After our initial consultation call, we design a custom strategy and pricing plan that aligns perfectly with your goals and budget.",
  }
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${open ? 'border-[var(--brand-primary)] shadow-md shadow-[rgba(29,156,57,0.1)]' : 'border-gray-200 shadow-sm'}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-[var(--brand-primary)] text-white' : 'bg-gray-100 text-gray-500'}`}
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center text-[var(--text-primary)] tracking-tight mb-12"
        >
          Frequntly Asked Questions
        </motion.h2>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
