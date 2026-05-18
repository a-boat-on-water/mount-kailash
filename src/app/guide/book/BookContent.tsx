"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Footprints, Mountain, Compass, ScrollText, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageBackground } from "@/components/PageBackground";
import { BackButton } from "@/components/BackButton";
import { PageTitle } from "@/components/PageTitle";
import type { BookChapter, ChapterCategory } from "@/data/guide-chapters";

const categoryIcons: Record<ChapterCategory, React.ReactNode> = {
  introduction: <ScrollText className="w-4 h-4" />,
  prepare: <Compass className="w-4 h-4" />,
  route: <Footprints className="w-4 h-4" />,
  culture: <Mountain className="w-4 h-4" />,
  reference: <FileText className="w-4 h-4" />,
};

const categoryColors: Record<ChapterCategory, string> = {
  introduction: "bg-amber-500/20 text-amber-300",
  prepare: "bg-blue-500/20 text-blue-300",
  route: "bg-green-500/20 text-green-300",
  culture: "bg-purple-500/20 text-purple-300",
  reference: "bg-gray-500/20 text-gray-300",
};

interface BookContentProps {
  chapters: BookChapter[];
  categoryLabels: Record<ChapterCategory, { en: string; zh: string }>;
}

export default function BookContent({ chapters, categoryLabels }: BookContentProps) {
  const { lang } = useLanguage();

  const groups: { category: ChapterCategory; chapters: BookChapter[] }[] = [];
  const categoryOrder: ChapterCategory[] = ["introduction", "prepare", "route", "culture", "reference"];

  for (const cat of categoryOrder) {
    const chs = chapters.filter((ch) => ch.category === cat);
    if (chs.length > 0) {
      groups.push({ category: cat, chapters: chs });
    }
  }

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />
      <PageTitle>
        <BookOpen className="w-5 h-5 inline-block mr-2 -mt-0.5" />
        {lang === "en" ? "Full Book" : "完整指南"}
      </PageTitle>

      <p className="text-xs text-white/60 mb-5 leading-relaxed">
        {lang === "en"
          ? "Mount Kailash Pilgrimage Guide v8.0.1 by Jansen Wong — 14 chapters, 229 pages."
          : "《冈仁波齐转山朝圣指南》8.0.1版 黄振成著——14章，229页。"}
      </p>

      <div className="space-y-6">
        {groups.map(({ category, chapters: chs }) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-white/60">{categoryIcons[category]}</span>
              <h2 className="text-sm font-semibold text-white/80">
                {categoryLabels[category][lang]}
              </h2>
            </div>

            <div className="space-y-2">
              {chs.map((ch, i) => {
                // Stage chapters link to /journey/[stage] instead
                const isStage = ch.type === "stage";
                const stageNum = ch.number - 7; // ch8→1, ch9→2, ch10→3
                const href = isStage
                  ? `/journey/${stageNum}`
                  : `/guide/book/${ch.number}`;

                return (
                  <motion.div
                    key={ch.number}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link href={href} className="block">
                      <div className="card-glass p-3 flex items-center gap-3 active:scale-[0.98] transition-transform">
                        <span className="text-xs font-mono text-white/40 min-w-[1.5rem] text-right">
                          {ch.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {ch.title[lang]}
                          </p>
                          <p className="text-[10px] text-foreground/50 mt-0.5">
                            {lang === "en"
                              ? `pp. ${ch.pageRange[0]}–${ch.pageRange[1]}`
                              : `第${ch.pageRange[0]}–${ch.pageRange[1]}页`}
                            {isStage && (
                              <span className="ml-2 text-green-400/70">
                                {lang === "en" ? "→ Journey" : "→ 转山路线"}
                              </span>
                            )}
                          </p>
                        </div>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded-full ${categoryColors[category]}`}
                        >
                          {categoryLabels[category][lang]}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageBackground>
  );
}
