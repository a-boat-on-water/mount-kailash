"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuoteSectionProps {
  quoteKey?: string;
  attributionKey?: string;
}

export function QuoteSection({ quoteKey = "quote", attributionKey = "quoteAttribution" }: QuoteSectionProps) {
  const { t } = useLanguage();

  const quote = (t as Record<string, string>)[quoteKey] || "";
  const attribution = (t as Record<string, string>)[attributionKey] || "";

  if (!quote) return null;

  return (
    <section className="px-5 py-5">
      <motion.blockquote
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <div className="w-6 h-[2px] bg-primary mb-3" />
        <p className="text-sm font-light text-foreground leading-relaxed tracking-tight">
          {quote}
        </p>
        {attribution && (
          <p className="text-[11px] text-muted-foreground mt-4 tracking-widest uppercase">
            {attribution}
          </p>
        )}
      </motion.blockquote>
    </section>
  );
}
