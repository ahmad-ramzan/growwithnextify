import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — GrowWithNextify",
  description:
    "Terms of Service for GrowWithNextify — the rules that govern your use of our website and marketing services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-500">
              Last updated: May 23, 2026
            </p>
          </div>

          {/* Body */}
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <p className="text-base">
                Welcome to GrowWithNextify. These Terms of Service (&quot;Terms&quot;) govern
                your access to and use of our website and the SEO, AEO, and performance
                marketing services we provide. By using our website or engaging our
                services, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing our website or signing a service agreement with us, you
                confirm that you are at least 18 years old and have the authority to
                enter into a binding contract on behalf of yourself or your company.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Our Services</h2>
              <p>GrowWithNextify provides the following services:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>AI Search Optimization (AEO) for ChatGPT, Google AI Overviews, Perplexity, and Gemini</li>
                <li>Performance Marketing &amp; paid advertising (Google Ads, Meta Ads, LinkedIn Ads)</li>
                <li>Strategy consultations, audits, and growth roadmaps</li>
              </ul>
              <p className="mt-3">
                Specific deliverables, timelines, and pricing are defined in individual
                service agreements signed with each client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Client Responsibilities</h2>
              <p>To deliver effective results, you agree to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide accurate, complete information about your business and goals.</li>
                <li>Grant access to required platforms (e.g., Google Search Console, Google Analytics, ad accounts, website CMS).</li>
                <li>Respond to requests for feedback or approvals within a reasonable timeframe.</li>
                <li>Pay invoices in full and on time as per the agreed schedule.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Payments &amp; Refunds</h2>
              <p>
                Payment terms, billing cycles, and any retainer amounts are specified in
                each service agreement. Unless otherwise stated:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Invoices are due within 7 days of issuance.</li>
                <li>Late payments may incur additional fees or pause service delivery.</li>
                <li>SEO and marketing services are non-refundable once work has commenced, due to the nature of strategy, research, and execution time invested.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
              <p>
                All website content — including text, graphics, logos, and software — is
                the property of GrowWithNextify or its licensors and is protected by
                intellectual property laws.
              </p>
              <p className="mt-3">
                Deliverables created specifically for clients (e.g., content, reports,
                ad creatives) become the client&apos;s property upon full payment, while
                we retain ownership of our proprietary frameworks, processes, and tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Confidentiality</h2>
              <p>
                Both parties agree to keep all non-public information shared during the
                engagement confidential and not disclose it to third parties without
                consent, except where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Results Disclaimer</h2>
              <p>
                While we use proven strategies and best practices, search engine rankings,
                AI visibility, and ad performance are influenced by external factors
                (algorithm updates, competition, market conditions). We do not guarantee
                specific positions, traffic numbers, or revenue outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GrowWithNextify shall not be
                liable for any indirect, incidental, special, or consequential damages
                arising from the use of our website or services. Our total liability in
                any case is limited to the fees paid by you in the three months prior to
                the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Termination</h2>
              <p>
                Either party may terminate a service agreement by giving 30 days&apos;
                written notice. Outstanding fees for work completed up to the termination
                date remain payable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United Arab Emirates. Any
                disputes shall be resolved in the courts of Dubai, UAE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to These Terms</h2>
              <p>
                We may update these Terms periodically. Continued use of our website or
                services after changes are posted constitutes your acceptance of the
                revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
              <p>For questions about these Terms, contact:</p>
              <ul className="list-none mt-3 space-y-1.5">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:sal@growwithnextify.com"
                    className="text-[var(--brand-primary)] font-semibold hover:underline"
                  >
                    sal@growwithnextify.com
                  </a>
                </li>
                <li>UAE: +971 56 562 9496</li>
                <li>PAK: +92 301 9651202</li>
                <li>Address: Laal Building, Frij Al Murar, Deira, Dubai, UAE</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
