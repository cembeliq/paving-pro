import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H8v3h2v6h3v-6h2.2l.8-3H13V9.5c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#16251A] py-14 text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-heading text-lg font-bold text-white">
                P
              </span>
              <span className="font-heading text-lg font-bold text-white">
                {BUSINESS.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {BUSINESS.tagline} profesional — rapi, kuat, dan tahan lama
              untuk rumah, parkiran, dan area usaha Anda.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <Link
                  href={waLink("Halo, saya ingin bertanya tentang jasa paving.")}
                  target="_blank"
                  className="hover:text-white"
                >
                  +{BUSINESS.whatsappNumber}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{BUSINESS.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">
              Ikuti Kami
            </h3>
            <div className="mt-4 flex gap-3">
              <Link
                href={BUSINESS.social.instagram}
                target="_blank"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:scale-110 hover:bg-primary active:scale-90"
              >
                <InstagramIcon />
              </Link>
              <Link
                href={BUSINESS.social.facebook}
                target="_blank"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:scale-110 hover:bg-primary active:scale-90"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {BUSINESS.name}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
