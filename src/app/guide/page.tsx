"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, MapPin, Compass, Sparkles, Calendar } from "lucide-react";
import { chapters } from "@/data/chapters";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryIcons = {
  planning: Calendar,
  route: Compass,
  culture: Sparkles,
};

export default function GuidePage() {
  return (
    <Suspense fallback={<div className="px-4 pt-6 animate-pulse">Loading...</div>}>
      <GuidePageContent />
    </Suspense>
  );
}

function GuidePageContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const activeCat = searchParams.get("cat") || "all";

  const filtered = activeCat === "all"
    ? chapters
    : chapters.filter((ch) => ch.category === activeCat);

  const tabs = [
    { key: "all", label: t.allChapters },
    { key: "planning", label: t.planning },
    { key: "route", label: t.route },
    { key: "culture", label: t.culture },
  ];

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-foreground tracking-tight">
          {t.guideTitle}
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          {lang === 'en' ? 'Mount Kailash Pilgrimage Guide' : '冈仁波齐转山朝圣指南'}
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.key === "all" ? "/guide" : `/guide?cat=${tab.key}`}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCat === tab.key
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Chapter list */}
      <div className="space-y-2.5">
        {filtered.map((ch, i) => {
          const Icon = categoryIcons[ch.category];
          return (
            <motion.div
              key={ch.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link
                href={`/guide/${ch.slug}`}
                className="block bg-card rounded-xl p-4 border border-border active:bg-muted transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground leading-tight">
                      {ch.title[lang]}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {lang === 'en' ? `Chapter ${ch.num}` : `第${ch.num}章`}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Links to supplementary content */}
      <div className="mt-6 pt-4 border-t border-border space-y-2">
        <Link
          href="/guide/sacred-sites"
          className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border active:bg-muted"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{t.sacredSites}</span>
          <span className="ml-auto text-xs text-muted-foreground">87</span>
        </Link>
        <Link
          href="/guide/glossary"
          className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border active:bg-muted"
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{t.glossary}</span>
        </Link>
        <Link
          href="/guide/legends"
          className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border active:bg-muted"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{t.legends}</span>
        </Link>
        <Link
          href="/guide/rituals"
          className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border active:bg-muted"
        >
          <Compass className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{t.rituals}</span>
        </Link>
      </div>

      <div className="h-8" />
    </div>
  );
}
