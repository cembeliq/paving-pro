import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Pasang Paving Rapi, Kuat & Tahan Lama | PavingPro",
  description:
    "Jasa pasang paving profesional untuk rumah, area parkir, dan jalan lingkungan. Gratis survey lokasi & konsultasi, harga transparan, bergaransi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
