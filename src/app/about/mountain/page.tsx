"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { mountainSections } from "@/data/about/mountain";

export default function MountainPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href="/about" />

      <h1 className="text-xl font-semibold text-white tracking-tight mb-5">
        {t.sacredMountain}
      </h1>

      <div className="space-y-4">
        {mountainSections.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg"
          >
            <h2 className="text-sm font-semibold text-foreground mb-2">
              {section.title[lang]}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {section.content[lang]}
            </p>
          </motion.div>
        ))}
      </div>
    </PageBackground>
  );
}
