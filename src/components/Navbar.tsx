import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";

const NAV_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proses", label: "Proses" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#area", label: "Area Layanan" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-heading text-lg font-bold text-white">
            P
          </span>
          <span className="font-heading text-lg font-bold text-text">
            {BUSINESS.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <WhatsAppButton
          href={waLink("Halo, saya ingin konsultasi jasa pasang paving.")}
          className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark sm:flex"
        >
          <MessageCircle className="h-4 w-4" />
          Chat WhatsApp
        </WhatsAppButton>
      </nav>
    </header>
  );
}
