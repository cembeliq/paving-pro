import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CtaBig() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Siap Pasang Paving Sekarang?
        </h2>
        <p className="mt-4 text-lg text-white/85">
          Konsultasi gratis, respon cepat!
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            href={waLink("Halo, saya siap untuk pasang paving. Bisa dibantu?")}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-secondary px-8 text-base font-bold text-text shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:brightness-95"
          >
            <MessageCircle className="h-5 w-5" />
            Chat WhatsApp Sekarang
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
