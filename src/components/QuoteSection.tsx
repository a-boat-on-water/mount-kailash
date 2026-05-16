"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-8">
      <motion.blockquote
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <div className="w-8 h-[2px] bg-primary mb-4" />
        <p className="text-lg font-light text-foreground leading-relaxed tracking-tight">
          {t.quote}
        </p>
        <p className="text-[11px] text-muted-foreground mt-4 tracking-widest uppercase">
          {t.quoteAttribution}
        </p>
      </motion.blockquote>
    </section>
  );
}
