"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function BackButton({ href }: { href: string }) {
  const { t } = useLanguage();
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm text-white/70 mb-4 active:text-white"
    >
      <ChevronLeft className="w-4 h-4" />
      {t.back}
    </Link>
  );
}
