import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProperties from "./components/FeaturedProperties";
import IntroSection from "./components/IntroSection";
import FeatureShowcase2 from "./components/FeatureShowcase2";
import CorePlatforms from "./components/CorePlatforms";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import WhoWeServe from "./components/WhoWeServe";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <IntroSection />
      <CorePlatforms />
      <FeatureShowcase2 />
      <HowItWorks />
      
      <WhyChooseUs />
      <WhoWeServe />
      <ContactSection />
      
      <Footer />
    </div>
  );
}
