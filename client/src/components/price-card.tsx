import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PriceCard({ title, price, description, features, popular }: PriceCardProps) {
  return (
    <Card className={`price-card h-full ${popular ? 'bg-primary text-white transform scale-105' : 'bg-white'} animate-on-scroll`}>
      <CardContent className="p-8 text-center h-full flex flex-col">
        {popular && (
          <Badge className="bg-secondary text-primary mb-4 self-center">
            Most Popular
          </Badge>
        )}
        <h3 className={`text-xl font-bold mb-4 ${popular ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className={`text-3xl font-bold mb-2 ${popular ? 'text-white' : 'text-primary'}`}>
          {price}
        </div>
        <div className={`mb-6 ${popular ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </div>
        <ul className="space-y-2 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center ${popular ? 'text-blue-100' : 'text-gray-600'}`}>
              <Check className={`w-4 h-4 mr-2 ${popular ? 'text-secondary' : 'text-accent'}`} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
