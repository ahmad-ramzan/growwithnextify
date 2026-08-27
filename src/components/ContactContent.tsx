"use client";

import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { motion, Variants } from "framer-motion";
import RequirementsForm from "@/components/RequirementsForm";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "sal@growwithnextify.com",
    href: "mailto:sal@growwithnextify.com",
    description: "Drop us a line anytime",
  },
  {
    icon: Phone,
    title: "Call UAE",
    detail: "+971 56 562 9496",
    href: "tel:+971565629496",
    description: "Mon – Sat, 9 AM – 7 PM GST",
  },
  {
    icon: Phone,
    title: "Call Pakistan",
    detail: "+92 301 9651202",
    href: "tel:+923019651202",
    description: "Mon – Sat, 9 AM – 7 PM PKT",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Johar Town, Lahore, Punjab, Pakistan",
    href: "https://www.google.com/maps/search/?api=1&query=Johar+Town+Lahore+Pakistan",
    description: "Our headquarters",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative py-24 px-6 max-w-5xl mx-auto text-center"
        data-avatar-section
        data-avatar-message="We'd love to hear from you! Fill out the form or reach us directly."
        data-avatar-side="right"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="section-label mb-5 inline-flex"
        >
          <MessageSquare size={14} />
          Contact Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Let&apos;s Build Something{" "}
          <span className="gradient-text">Great Together</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto"
        >
          Have a project in mind? Whether you need SEO, AI search optimization,
          custom software, or a complete digital strategy — we&apos;re here to help
          you grow.
        </motion.p>
      </section>

      {/* ─── Contact Cards ─── */}
      <section className="relative px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.icon === MapPin ? "_blank" : undefined}
                rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group card p-6 flex flex-col items-start gap-4 cursor-pointer no-underline"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[var(--brand-primary)] mb-1">
                    {card.detail}
                  </p>
                  <p className="text-xs text-gray-400">{card.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ─── Form + Map ─── */}
      <section
        className="relative py-20 px-6 bg-gray-50 border-y border-gray-100"
        data-avatar-section
        data-avatar-message="Fill in your details and we'll get back to you within 24 hours!"
        data-avatar-side="right"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-[15px]">
                Tell us about your project and goals. We&apos;ll get back to you
                within 24 hours with a tailored plan.
              </p>
            </div>
            <RequirementsForm />
          </motion.div>

          {/* Right: Map + Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Embedded Map */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm aspect-[4/3]">
              <iframe
                title="GrowWithNextify Office Location"
                src="https://maps.google.com/maps?q=Johar%20Town,%20Lahore,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Prefer a Live Conversation?
              </h3>
              <p className="text-gray-500 text-[15px] mb-6">
                Book a free 30-minute strategy call with our team. We&apos;ll
                discuss your goals, challenges, and how we can help.
              </p>
              <a
                href="https://calendly.com/sal-growwithnextify/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Book a Free Call
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Average Response Time
                </p>
                <p className="text-xs text-gray-500">
                  We respond within 24 hours on business days
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
