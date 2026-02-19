import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import FeaturesSection from "@/components/FeaturesSection";
import EmKitCliSection from "@/components/EmKitCliSection";
import PrivacySection from "@/components/PrivacySection";
import SpecsSection from "@/components/SpecsSection";
import SocialProofSection from "@/components/SocialProofSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <EmKitCliSection />
      <PrivacySection />
      <SpecsSection />
      <SocialProofSection />
      <FooterSection />
    </main>
  );
};

export default Index;
