import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const phone = '+995555123456';
    const message = 'Hi! I need automotive locksmith service. Can you help me?';
    const whatsappUrl = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 w-14 h-14"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}
