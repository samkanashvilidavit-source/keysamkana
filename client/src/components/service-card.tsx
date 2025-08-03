import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  color: string;
  delay?: number;
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary", 
  accent: "bg-accent/10 text-accent",
  emergency: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600"
};

export default function ServiceCard({ 
  id, 
  icon: Icon, 
  title, 
  description, 
  price, 
  color,
  delay = 0 
}: ServiceCardProps) {
  const showServiceDetails = (serviceId: string) => {
    // In a real implementation, this would open a detailed modal or navigate to a detailed page
    const phone = '+995555123456';
    const message = `Hi, I'm interested in ${title}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card 
      className="service-card h-full animate-on-scroll" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="text-secondary font-semibold mb-4">{price}</div>
        <Button 
          variant="ghost" 
          onClick={() => showServiceDetails(id)}
          className="text-primary hover:text-blue-800 p-0 h-auto font-semibold"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
