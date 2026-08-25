"use client";

import { motion } from "framer-motion";
import { EyeOff, DollarSign, BarChart2, BotOff } from "lucide-react";

const problems = [
  { icon: <EyeOff size={22} />, title: "Low Traffic" },
  { icon: <DollarSign size={22} />, title: "Expensive Ads" },
  { icon: <BarChart2 size={22} />, title: "Poor Conversion" },
  { icon: <BotOff size={22} />, title: "No AI Visibility" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProblemSection() {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <h2 className="section-label">The Problem</h2>
        </motion.div>

        {/* Problem cards — minimal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              className="card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.08)", color: "#EF4444" }}
              >
                {p.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-base">{p.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
