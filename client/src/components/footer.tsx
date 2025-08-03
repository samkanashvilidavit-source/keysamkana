import { Key, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AutoKey Tbilisi</h3>
                <p className="text-sm">Professional Locksmith</p>
              </div>
            </div>
            <p className="text-gray-400">
              Tbilisi's trusted automotive locksmith service since 2019. Professional, reliable, and available 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Car Key Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Key Duplication
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Transponder Programming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Emergency Lockout
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+995555123456" className="hover:text-primary transition-colors">
                  +995 555 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:info@autekeytbilisi.ge" className="hover:text-primary transition-colors">
                  info@autekeytbilisi.ge
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Tbilisi, Georgia</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">Licensed & Insured</p>
              <p className="text-sm text-gray-400">License #LKS-2019-001</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 AutoKey Tbilisi. All rights reserved. | 
            <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
