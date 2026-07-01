import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FloatingWhatsapp() {
  return (
    <WhatsAppButton
      href={waLink("Halo, saya ingin konsultasi jasa pasang paving.")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/20 hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      Chat Kami
    </WhatsAppButton>
  );
}
