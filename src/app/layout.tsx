import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GrowWithNextify — SEO, AEO & Performance Marketing",
  description:
    "We help businesses generate qualified leads through SEO, AI Search Optimization (AEO), paid ads, and conversion-focused marketing systems.",
  keywords: ["SEO", "AEO", "AI Search Optimization", "Performance Marketing", "Lead Generation"],
  openGraph: {
    title: "GrowWithNextify — SEO, AEO & Performance Marketing",
    description: "Grow your business with SEO, AI Search Optimization, and performance-driven marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
