import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Key, Phone } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AutoKey Tbilisi</h1>
              <p className="text-xs text-gray-600">Professional Locksmith</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
            <Button 
              asChild 
              className="bg-red-600 hover:bg-red-700 text-white border-0"
            >
              <a href="tel:+995555123456">
                <Phone className="w-4 h-4 mr-2" />
                Emergency
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                asChild 
                className="bg-red-600 hover:bg-red-700 text-white w-full border-0"
              >
                <a href="tel:+995555123456">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Call
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
