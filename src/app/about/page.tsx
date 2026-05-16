"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, MapPin, Heart, BookOpen, Sparkles, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const cards = [
  { href: "/about/mountain", icon: Mountain, key: "sacredMountain", descKey: "sacredMountainDesc" },
  { href: "/about/sacred-sites", icon: MapPin, key: "sacredSites", descKey: "sacredSitesDesc" },
  { href: "/about/protocols", icon: Heart, key: "protocols", descKey: "protocolsDesc" },
  { href: "/about/glossary", icon: BookOpen, key: "glossary", descKey: "glossaryDesc" },
  { href: "/about/legends", icon: Sparkles, key: "legends", descKey: "legendsDesc" },
  { href: "/about/rituals", icon: Flame, key: "rituals", descKey: "ritualsDesc" },
] as const;

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-dvh">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sacred-card.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-8 pb-24">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {t.aboutTitle}
          </h1>
          <p className="text-sm text-white/70 mt-1">{t.aboutSubtitle}</p>
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
                  className="flex items-center gap-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/10 active:scale-[0.98] transition-transform"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {(t as Record<string, string>)[card.key]}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {(t as Record<string, string>)[card.descKey]}
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
