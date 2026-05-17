"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { glossaryEntries } from "@/data/about/glossary";

export default function GlossaryPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href="/about" />

      <PageTitle>{t.glossary}</PageTitle>

      <div className="space-y-2">
        {glossaryEntries.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.25 }}
            className="card-glass p-3.5"
          >
            <p className="text-sm font-semibold text-primary">
              {entry.term[lang]}
            </p>
            <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
              {entry.meaning[lang]}
            </p>
          </motion.div>
        ))}
      </div>
    </PageBackground>
  );
}
