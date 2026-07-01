"use client";

import { useState } from "react";
import Link from "next/link";

export default function WhatsAppButton({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [pulsing, setPulsing] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      onClick={() => setPulsing(true)}
      onAnimationEnd={() => setPulsing(false)}
      className={`transition-transform duration-200 hover:scale-105 active:scale-95 ${
        pulsing ? "animate-wa-click" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
