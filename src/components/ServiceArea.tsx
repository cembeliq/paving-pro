import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section id="area" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            Area Layanan
          </h2>
          <p className="mt-4 text-text/70">
            Kami melayani pemasangan paving di area-area berikut. Di luar
            area? Hubungi kami dulu, kemungkinan tetap bisa kami jangkau.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {BUSINESS.areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-text shadow-sm shadow-black/5"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="aspect-4/3 overflow-hidden rounded-3xl shadow-sm">
          <iframe
            title="Peta area layanan"
            src="https://www.openstreetmap.org/export/embed.html?bbox=110.75%2C-7.55%2C111.05%2C-7.35&layer=mapnik"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
