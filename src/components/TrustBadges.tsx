import { Award, ShieldCheck, MapPinned, ReceiptText, Timer } from "lucide-react";

const BADGES = [
  { icon: Award, label: "Berpengalaman" },
  { icon: ShieldCheck, label: "Bergaransi" },
  { icon: MapPinned, label: "Gratis Survey" },
  { icon: ReceiptText, label: "Harga Transparan" },
  { icon: Timer, label: "Pengerjaan Cepat" },
];

export default function TrustBadges() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {BADGES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-semibold text-text">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
