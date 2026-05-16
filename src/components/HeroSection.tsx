"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { lang, setLang, t } = useLanguage();

  return (
    <section className="relative w-full aspect-[3/4] overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/kailash-hero.jpg"
          alt="Mount Kailash at golden hour"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Glass nav bar */}
      <motion.div
        className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between px-5 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-sm"
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
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.p
          className="text-white/70 text-xs font-medium tracking-widest uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t.heroSubtitle}
        </motion.p>
        <motion.h1
          className="text-white text-3xl font-light leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t.heroLine1}
          <br />
          <span className="font-semibold">{t.heroLine2}</span>
          <br />
          <span className="text-white/80 font-light">{t.heroLine3}</span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-sm leading-relaxed mt-3 max-w-[260px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {t.heroDescription}
        </motion.p>
      </div>
    </section>
  );
}
