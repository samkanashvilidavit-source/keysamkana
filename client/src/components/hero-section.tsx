import { Button } from "@/components/ui/button";
import { Phone, Calculator, Clock, Car, Shield, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Tbilisi cityscape */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Tbilisi cityscape" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-secondary">Automotive</span> Locksmith in Tbilisi
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Lost car keys? Locked out? We're Tbilisi's #1 automotive locksmith service with 24/7 emergency response and mobile key cutting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white text-lg border-0"
              >
                <a href="tel:+995555123456">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +995 555 123 456
                </a>
              </Button>
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                className="bg-secondary hover:bg-yellow-600 text-gray-900 text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Get Price Quote
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-secondary" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center">
                <Car className="w-5 h-5 mr-2 text-secondary" />
                <span>Mobile Service</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-secondary" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mobile locksmith van" 
              className="rounded-2xl shadow-2xl animate-float" 
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
