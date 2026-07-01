import {
  ClipboardCheck,
  FileText,
  PackageSearch,
  HardHat,
  Sparkles,
} from "lucide-react";

const STEPS = [
  { icon: ClipboardCheck, title: "Survey", desc: "Kunjungan lokasi & pengukuran area gratis." },
  { icon: FileText, title: "Penawaran", desc: "Penjelasan harga & material secara transparan." },
  { icon: PackageSearch, title: "Persiapan", desc: "Penyiapan material dan area kerja." },
  { icon: HardHat, title: "Pemasangan", desc: "Pengerjaan oleh tim berpengalaman & rapi." },
  { icon: Sparkles, title: "Finishing", desc: "Pembersihan akhir & pengecekan kualitas." },
];

export default function ProcessSteps() {
  return (
    <section id="proses" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
          Proses Kerja
        </h2>
        <p className="mt-4 text-text/70">
          Alur pengerjaan yang jelas dari awal hingga akhir proyek.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
        {STEPS.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="relative flex flex-col items-center text-center">
            {i < STEPS.length - 1 && (
              <div className="absolute left-1/2 top-7 hidden h-0.5 w-full -translate-y-1/2 bg-primary/20 sm:block" />
            )}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25">
              <Icon className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-text">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-5 font-heading text-base font-bold text-text">
              {title}
            </h3>
            <p className="mt-1.5 max-w-[180px] text-sm text-text/60">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
