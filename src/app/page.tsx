import ScrollEffects from "../components/effects/ScrollEffects";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import SectionTwo from "../components/sections/SectionTwo";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col bg-background text-foreground">
      <ScrollEffects />
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
