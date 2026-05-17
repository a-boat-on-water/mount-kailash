"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { LucideIcon } from "lucide-react";

interface HubCard {
  href: string;
  icon: LucideIcon;
  key: string;
  descKey: string;
}

interface HubPageProps {
  image: string;
  titleKey: string;
  subtitleKey: string;
  cards: readonly HubCard[];
}

export function HubPage({ image, titleKey, subtitleKey, cards }: HubPageProps) {
  const { t } = useLanguage();
  const translations = t as Record<string, string>;

  return (
    <div className="relative min-h-dvh">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 px-4 pt-8 pb-24">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {translations[titleKey]}
          </h1>
          <p className="text-sm text-white/70 mt-1">{translations[subtitleKey]}</p>
        </motion.div>

        <div className="space-y-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={card.href}
                  className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg shadow-black/10 active:scale-[0.98] transition-transform"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {translations[card.key]}
                    </p>
                    <p className="text-xs text-white/70 mt-0.5">
                      {translations[card.descKey]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
