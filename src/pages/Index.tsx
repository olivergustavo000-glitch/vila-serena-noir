import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import CluesSection from "@/components/CluesSection";
import SuspectsSection from "@/components/SuspectsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <WhatYouGetSection />
      <CluesSection />
      <SuspectsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;