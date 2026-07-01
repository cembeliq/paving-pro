import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Halaman Rumah Minimalis",
    location: "Sragen",
    img: "1600607687939-ce8a6c25118c",
    span: "row-span-2",
  },
  {
    name: "Area Parkir Ruko",
    location: "Solo",
    img: "1541888946425-d81bb19240f5",
    span: "",
  },
  {
    name: "Jalan Lingkungan Komplek",
    location: "Karanganyar",
    img: "1620641788421-7a1c342ea42e",
    span: "",
  },
  {
    name: "Perbaikan Paving Amblas",
    location: "Sukoharjo",
    img: "1581094794329-c8112a89af12",
    span: "row-span-2",
  },
  {
    name: "Taman & Carport",
    location: "Sragen",
    img: "1622021142947-da7dedc7c39a",
    span: "",
  },
  {
    name: "Halaman Kantor",
    location: "Boyolali",
    img: "1600566752355-35792bedcfea",
    span: "",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            Portfolio Proyek Kami
          </h2>
          <p className="mt-4 text-text/70">
            Sebagian hasil pemasangan paving yang telah kami kerjakan dengan
            rapi dan tahan lama.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-template-rows:repeat(2,220px)] lg:[grid-template-rows:repeat(2,260px)]">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`group relative aspect-4/3 overflow-hidden rounded-2xl sm:aspect-auto ${p.span}`}
            >
              <Image
                src={`https://images.unsplash.com/photo-${p.img}?w=600&h=600&fit=crop`}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-heading text-sm font-bold text-white sm:text-base">
                  {p.name}
                </p>
                <p className="text-xs text-white/80">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-text/15 bg-white px-6 py-3 text-sm font-semibold text-text transition-all duration-200 hover:scale-105 hover:border-primary hover:text-primary active:scale-95"
          >
            Lihat Lebih Banyak
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
