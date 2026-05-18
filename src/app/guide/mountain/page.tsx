"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { mountainSections } from "@/data/about/mountain";
import { DepthContent } from "@/components/DepthContent";

export default function MountainPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href="/guide" />

      <PageTitle>{t.sacredMountain}</PageTitle>

      <div className="space-y-4">
        {mountainSections.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-glass p-4"
          >
            <h2 className="text-sm font-semibold text-foreground mb-2">
              {section.title[lang]}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {section.content[lang]}
            </p>
            <DepthContent context={section.context} deepDive={section.deepDive} />
          </motion.div>
        ))}
      </div>
    </PageBackground>
  );
}
