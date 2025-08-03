import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PricingCalculator from "@/components/pricing-calculator";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Home() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "AutoKey Tbilisi - Professional Automotive Locksmith Services | 24/7 Car Key Replacement";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional automotive locksmith services in Tbilisi. 24/7 car key replacement, duplication, transponder programming, emergency lockout service. Licensed & insured.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional automotive locksmith services in Tbilisi. 24/7 car key replacement, duplication, transponder programming, emergency lockout service. Licensed & insured.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingCalculator />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
