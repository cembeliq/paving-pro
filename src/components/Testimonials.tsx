"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Bapak Yusuf",
    location: "Sragen",
    text: "Pengerjaan cepat dan hasilnya rapi banget. Tim-nya juga komunikatif, harga sesuai penawaran awal tanpa biaya tambahan.",
    img: "1600585154340-be6161a56a0c",
  },
  {
    name: "Ibu Ratna",
    location: "Solo",
    text: "Halaman rumah saya jadi terlihat lebih modern setelah dipaving. Prosesnya juga tidak mengganggu aktivitas sehari-hari.",
    img: "1600585152220-90363fe7e115",
  },
  {
    name: "Bapak Danang",
    location: "Karanganyar",
    text: "Area parkir toko saya sekarang jauh lebih kuat menahan beban kendaraan. Garansi yang diberikan juga membuat saya tenang.",
    img: "1607400201889-565b1ee75f8e",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function next() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  return (
    <section id="testimoni" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            Apa Kata Pelanggan
          </h2>
          <p className="mt-4 text-text/70">
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[0, 1].map((offset) => {
            const t = TESTIMONIALS[(index + offset) % TESTIMONIALS.length];
            return (
              <div
                key={t.name}
                className="relative rounded-2xl bg-bg p-8 shadow-sm shadow-black/5"
              >
                <Quote className="h-8 w-8 text-secondary/50" />
                <p className="mt-4 text-sm leading-relaxed text-text/75">
                  “{t.text}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={`https://images.unsplash.com/photo-${t.img}?w=80&h=80&fit=crop`}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading text-sm font-bold text-text">
                      {t.name}
                    </p>
                    <p className="text-xs text-text/60">{t.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Testimoni sebelumnya"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-text transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white active:scale-90"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <span
                key={t.name}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-primary" : "bg-text/15"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Testimoni selanjutnya"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-text transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white active:scale-90"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
