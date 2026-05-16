"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="relative h-dvh overflow-hidden">
      {/* Fixed background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kailash-hero.jpg"
          alt="Mount Kailash"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Glass nav bar */}
        <motion.div
          className="mx-4 mt-4 flex items-center justify-between px-5 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-sm font-semibold tracking-wider text-foreground">
            KAILASH
          </span>
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 hover:bg-foreground/10 transition-colors"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </motion.div>

        {/* Hero text */}
        <div className="px-6 pt-[60vh] pb-6">
          <motion.h1
            className="text-white text-3xl font-semibold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.heroSubtitle}
          </motion.h1>
          <motion.p
            className="text-white/80 text-base font-light leading-snug mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {t.heroLine1}
            <br />
            {t.heroLine2}
            <br />
            {t.heroLine3}
          </motion.p>
        </div>

      </div>
    </div>
  );
}
