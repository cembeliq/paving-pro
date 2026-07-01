import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ImageIcon } from "lucide-react";
import { waLink } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white to-bg"
    >
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            🏗️ Kontraktor Paving Berpengalaman
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl">
            Jasa Pasang Paving{" "}
            <span className="text-primary">Rapi, Kuat</span> & Tahan Lama
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text/70">
            Gratis survey lokasi & konsultasi. Cocok untuk rumah, parkiran,
            dan area usaha.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton
              href={waLink(
                "Halo, saya ingin konsultasi jasa pasang paving."
              )}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <MessageCircle className="h-5 w-5" />
              Konsultasi via WhatsApp
            </WhatsAppButton>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-text/15 bg-white px-6 py-3.5 text-base font-semibold text-text transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-primary hover:text-primary active:scale-95"
            >
              Lihat Hasil Kami
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                "1600585154340-be6161a56a0c",
                "1600585152220-90363fe7e115",
                "1607400201889-565b1ee75f8e",
              ].map((id) => (
                <Image
                  key={id}
                  src={`https://images.unsplash.com/photo-${id}?w=80&h=80&fit=crop`}
                  alt="Klien puas"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-text/70">
              <span className="font-bold text-text">200+ proyek</span>{" "}
              selesai dengan hasil memuaskan
            </p>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/proses-pasang-paving.webp"
              alt="Hasil pemasangan paving rapi"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <ImageIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-text">
                Bergaransi Resmi
              </p>
              <p className="text-xs text-text/60">Kualitas terjamin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
