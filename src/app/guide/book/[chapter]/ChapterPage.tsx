"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PageBackground } from "@/components/PageBackground";
import { BackButton } from "@/components/BackButton";
import { PageTitle } from "@/components/PageTitle";
import { ChapterRenderer } from "@/components/ChapterRenderer";
import type { BookChapter } from "@/data/guide-chapters";

interface ChapterPageProps {
  chapter: BookChapter;
}

export default function ChapterPage({ chapter }: ChapterPageProps) {
  const { lang } = useLanguage();

  const hasEnglish = chapter.sections.some((s) => s.content.en.length > 0);
  const showLanguageNote = !hasEnglish && lang === "en";

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide/book" />

      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-mono text-white/40">
          {lang === "en" ? `Chapter ${chapter.number}` : `第${chapter.number}章`}
        </span>
        <span className="text-[10px] text-white/30">
          {lang === "en"
            ? `pp. ${chapter.pageRange[0]}–${chapter.pageRange[1]}`
            : `第${chapter.pageRange[0]}–${chapter.pageRange[1]}页`}
        </span>
      </div>

      <PageTitle>{chapter.title[lang]}</PageTitle>

      {showLanguageNote && (
        <div className="card-glass p-3 mb-4">
          <p className="text-xs text-foreground/60 leading-relaxed">
            This chapter is currently available in Chinese only. Toggle to 中文 to read the original content.
          </p>
        </div>
      )}

      <ChapterRenderer sections={chapter.sections} />
    </PageBackground>
  );
}
