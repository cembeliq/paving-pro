import { Home, ParkingSquare, Route, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Paving Halaman Rumah",
    desc: "Pemasangan paving untuk halaman dan taman rumah dengan pola rapi dan estetik.",
  },
  {
    icon: ParkingSquare,
    title: "Paving Area Parkir",
    desc: "Konstruksi paving kuat untuk area parkir kendaraan roda dua & roda empat.",
  },
  {
    icon: Route,
    title: "Paving Jalan Lingkungan",
    desc: "Pengerjaan paving jalan komplek dan lingkungan yang tahan beban berat.",
  },
  {
    icon: Wrench,
    title: "Perbaikan Paving",
    desc: "Perbaikan paving lama yang bergelombang, retak, atau amblas hingga rapi kembali.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
          Layanan Kami
        </h2>
        <p className="mt-4 text-text/70">
          Solusi lengkap pemasangan dan perbaikan paving untuk berbagai
          kebutuhan.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold text-text">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text/60">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
