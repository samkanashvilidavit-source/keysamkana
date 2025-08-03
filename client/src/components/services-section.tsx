import ServiceCard from "@/components/service-card";
import { Key, Copy, Microchip, Car, Settings, Smartphone } from "lucide-react";

const services = [
  {
    id: "key-replacement",
    icon: Key,
    title: "Car Key Replacement",
    description: "Lost your car keys? We create new keys on-site for all vehicle makes and models, including transponder and smart keys.",
    price: "Starting from 80₾",
    color: "primary"
  },
  {
    id: "key-duplication", 
    icon: Copy,
    title: "Key Duplication",
    description: "Need spare keys? We provide quick and accurate key copying services for traditional and modern car keys.",
    price: "Starting from 35₾",
    color: "secondary"
  },
  {
    id: "transponder",
    icon: Microchip,
    title: "Transponder Programming", 
    description: "Advanced transponder key programming and chip key services for modern vehicles with electronic security systems.",
    price: "Starting from 120₾",
    color: "accent"
  },
  {
    id: "lockout",
    icon: Car,
    title: "Car Lockout Service",
    description: "Locked out of your car? Our emergency lockout service gets you back in quickly without damaging your vehicle.",
    price: "Starting from 60₾",
    color: "emergency"
  },
  {
    id: "ignition",
    icon: Settings,
    title: "Ignition Repair",
    description: "Ignition problems? We diagnose and repair faulty ignition systems and provide ignition key replacement services.",
    price: "Starting from 150₾",
    color: "purple"
  },
  {
    id: "keyfob",
    icon: Smartphone,
    title: "Key Fob Programming",
    description: "Remote key fob not working? We program and replace key fobs for all major car manufacturers and models.",
    price: "Starting from 90₾",
    color: "green"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Automotive Locksmith Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive car key and lock solutions for all vehicle types in Tbilisi and surrounding areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
