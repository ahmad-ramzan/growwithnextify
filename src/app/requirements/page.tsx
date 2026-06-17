import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequirementsForm from "@/components/RequirementsForm";

export const metadata: Metadata = {
  title: "Share Your Project — GrowWithNextify",
  description:
    "Tell us about your project. We'll send back a custom growth roadmap within 24 hours.",
};

export default function RequirementsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label inline-flex mb-5">Start Your Project</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Tell Us About Your{" "}
              <span style={{ color: "var(--brand-primary)" }} className="font-bold">
                Project
              </span>
            </h1>
          </div>

          {/* Form — full width */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 md:p-10 shadow-[0_8px_24px_rgba(30,93,153,0.06)]">
            <RequirementsForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
