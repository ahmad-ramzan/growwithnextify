import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import ResultsSection from "@/components/ResultsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AvatarGuide from "@/components/AvatarGuide";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoSlider />
        <ResultsSection />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <AvatarGuide />
    </>
  );
}
