import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { RoomsSection } from "@/components/rooms-section";
import { SpacesSection } from "@/components/spaces-section";
import { ServicesSection } from "@/components/services-section";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export default function HomePage() {
  return (
    <div className="relative">
      <WatermarkLogo />
      <HeroSection />
      <SpacesSection />
      <RoomsSection />
      <FeaturesSection />
      <ServicesSection />
    </div>
  );
}
