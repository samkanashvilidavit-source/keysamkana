import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "key-replacement", label: "Car Key Replacement" },
  { value: "key-duplication", label: "Key Duplication" },
  { value: "transponder", label: "Transponder Programming" },
  { value: "lockout", label: "Car Lockout Service" },
  { value: "ignition", label: "Ignition Repair" },
  { value: "keyfob", label: "Key Fob Programming" }
];

const tbilisiDistricts = [
  "Vake", "Saburtalo", "Didube", "Chugureti", "Mtatsminda", "Isani",
  "Samgori", "Gldani", "Nadzaladevi", "Old Tbilisi", "Krtsanisi", "Digomi"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicleType: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll contact you within 15 minutes.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        vehicleType: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Need Emergency Locksmith Service?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Available 24/7 across Tbilisi and surrounding areas. Fast response, professional service, fair pricing.
          </p>
        </div>

        {/* Emergency Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-[hsl(var(--emergency))] text-white animate-on-scroll">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[hsl(var(--emergency))]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Emergency Hotline</h3>
              <Button asChild variant="ghost" className="text-2xl font-bold hover:text-red-200 p-0 h-auto">
                <a href="tel:+995555123456">+995 555 123 456</a>
              </Button>
              <p className="mt-2 text-red-100">24/7 Emergency Service</p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-white animate-on-scroll">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Regular Service</h3>
              <Button asChild variant="ghost" className="text-2xl font-bold hover:text-blue-200 p-0 h-auto">
                <a href="tel:+995555654321">+995 555 654 321</a>
              </Button>
              <p className="mt-2 text-blue-100">Mon-Sun 8AM-10PM</p>
            </CardContent>
          </Card>

          <Card className="bg-accent text-white animate-on-scroll">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <Button asChild variant="ghost" className="text-2xl font-bold hover:text-green-200 p-0 h-auto">
                <a href="https://wa.me/995555123456">+995 555 123 456</a>
              </Button>
              <p className="mt-2 text-green-100">Quick Quote & Booking</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto animate-on-scroll">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+995 5XX XXX XXX"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <Input
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  type="email"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Needed *</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Vehicle Type</label>
                  <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Vehicle</SelectItem>
                      <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                      <SelectItem value="european">European Import</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Describe your situation, location, and any specific requirements..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Request"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Service Areas */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-8">Service Areas in Tbilisi</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-gray-300 mb-6">
            {tbilisiDistricts.map(district => (
              <div key={district} className="hover:text-secondary transition-colors cursor-default">
                {district}
              </div>
            ))}
          </div>
          <p className="text-gray-400">And surrounding areas within 30km of Tbilisi city center</p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild size="lg" className="bg-secondary hover:bg-yellow-600 text-gray-900">
            <a href="tel:+995555123456">
              <Phone className="w-5 h-5 mr-3" />
              Call Now for Immediate Service
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
