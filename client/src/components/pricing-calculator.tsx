import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";
import { calculatePrice } from "@/lib/pricing";
import PriceCard from "@/components/price-card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState("");
  const [vehicleType, setVehicleType] = useState("standard");
  const [timeType, setTimeType] = useState("regular");
  const { toast } = useToast();

  const price = calculatePrice(serviceType, vehicleType, timeType);

  const bookServiceMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/service-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Service Booked Successfully!",
        description: "We'll contact you shortly to confirm your appointment.",
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  });

  const handleBookService = () => {
    if (!serviceType) {
      toast({
        title: "Please select a service",
        description: "Choose a service type to continue with booking.",
        variant: "destructive",
      });
      return;
    }

    const name = prompt("Please enter your name:");
    const phone = prompt("Please enter your phone number:");
    
    if (name && phone) {
      bookServiceMutation.mutate({
        name,
        phone,
        serviceType,
        vehicleType,
        timeType,
        estimatedPrice: price.final.toString(),
        urgency: timeType === "emergency" ? "high" : "normal"
      });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Get an instant quote for your automotive locksmith needs.
          </p>
        </div>

        {/* Interactive Pricing Calculator */}
        <Card className="max-w-4xl mx-auto mb-16 animate-on-scroll shadow-xl">
          <CardHeader className="gradient-bg text-white p-8">
            <h3 className="text-2xl font-bold mb-2">Quick Price Calculator</h3>
            <p>Select your service to get an instant estimate</p>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Service Type</label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="w-full p-4 text-lg">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="key-replacement">Car Key Replacement</SelectItem>
                      <SelectItem value="key-duplication">Key Duplication</SelectItem>
                      <SelectItem value="transponder">Transponder Programming</SelectItem>
                      <SelectItem value="lockout">Car Lockout Service</SelectItem>
                      <SelectItem value="ignition">Ignition Repair</SelectItem>
                      <SelectItem value="keyfob">Key Fob Programming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Vehicle Type</label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger className="w-full p-4 text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Vehicle</SelectItem>
                      <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                      <SelectItem value="european">European Import</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Time of Service</label>
                  <Select value={timeType} onValueChange={setTimeType}>
                    <SelectTrigger className="w-full p-4 text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular Hours (8AM-6PM)</SelectItem>
                      <SelectItem value="evening">Evening (6PM-10PM)</SelectItem>
                      <SelectItem value="emergency">Emergency (10PM-8AM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Price Estimate</h4>
                <div className="text-3xl font-bold text-primary mb-2">
                  {serviceType ? `${price.final}₾` : 'Select service'}
                </div>
                <div className="text-gray-600 text-sm mb-6">
                  {serviceType ? `Base price: ${price.base}₾ | Vehicle type & timing adjustments applied` : 'Choose your service type to see pricing'}
                </div>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-2" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-2" />
                    <span>Free on-site quotes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-2" />
                    <span>Same-day service</span>
                  </div>
                </div>

                <Button 
                  onClick={handleBookService}
                  disabled={!serviceType || bookServiceMutation.isPending}
                  className="w-full"
                  size="lg"
                >
                  {bookServiceMutation.isPending ? "Booking..." : "Book This Service"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Range Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <PriceCard
            title="Basic Services"
            price="35₾ - 80₾"
            description="Standard key services"
            features={[
              "Key duplication",
              "Simple lockouts", 
              "Basic key cutting"
            ]}
          />
          <PriceCard
            title="Advanced Services"
            price="90₾ - 150₾"
            description="Electronic key services"
            features={[
              "Transponder programming",
              "Key fob replacement",
              "Ignition services"
            ]}
            popular
          />
          <PriceCard
            title="Premium Services"
            price="160₾ - 300₾"
            description="Luxury & complex systems"
            features={[
              "Luxury vehicle keys",
              "Smart key programming",
              "Complex ignition repair"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
