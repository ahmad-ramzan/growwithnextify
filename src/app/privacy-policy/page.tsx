import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — GrowWithNextify",
  description:
    "Privacy Policy for GrowWithNextify — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500">
              Last updated: May 23, 2026
            </p>
          </div>

          {/* Body */}
          <div className="prose-content space-y-10 text-gray-700 leading-relaxed">
            <section>
              <p className="text-base">
                GrowWithNextify (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, store, and disclose
                information about you when you visit our website, contact us, or use our
                marketing services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact information</strong> — name, email, phone number, and company name when you submit a form or book a strategy call.</li>
                <li><strong>Usage data</strong> — pages visited, time spent, referring source, device type, browser, and IP address.</li>
                <li><strong>Communication records</strong> — emails, messages, or call notes exchanged with our team.</li>
                <li><strong>Cookies and tracking</strong> — small files stored on your device to remember preferences and measure site performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and deliver our SEO, AEO, and performance marketing services.</li>
                <li>Send strategy reports, proposals, and service-related communications.</li>
                <li>Improve our website, content, and service offerings.</li>
                <li>Comply with legal obligations and prevent fraud or misuse.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Sharing Your Information</h2>
              <p>
                We do not sell your personal data. We may share information with:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Service providers</strong> — analytics tools (Google Analytics), email platforms, CRM systems, and hosting providers we use to operate our business.</li>
                <li><strong>Legal authorities</strong> — when required by law, court order, or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies &amp; Tracking</h2>
              <p>
                We use cookies, pixel tags, and similar technologies to analyze traffic,
                personalize content, and measure ad performance. You can disable cookies
                via your browser settings, but some site features may not work as
                expected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard security measures including SSL encryption,
                secure servers, and access controls to protect your information. However,
                no online transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate or outdated data.</li>
                <li>Request deletion of your personal data.</li>
                <li>Withdraw consent for marketing communications.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:sal@growwithnextify.com"
                  className="text-[var(--brand-primary)] font-semibold hover:underline"
                >
                  sal@growwithnextify.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary to provide our
                services, comply with legal obligations, resolve disputes, and enforce
                our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites (such as social media
                platforms or client tools). We are not responsible for their privacy
                practices and encourage you to read their policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes
                will be reflected by updating the &quot;Last updated&quot; date at the top of this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
              <p>For any questions about this Privacy Policy, contact us at:</p>
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
