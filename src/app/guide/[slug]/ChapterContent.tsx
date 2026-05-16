"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Chapter } from "@/data/chapters";

interface Props {
  chapter: Chapter;
  content: string;
}

export default function ChapterContent({ chapter, content }: Props) {
  const { lang } = useLanguage();

  return (
    <div className="px-4 pt-4 pb-8">
      {/* Back button */}
      <Link
        href="/guide"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-4 active:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'en' ? 'Back' : '返回'}
      </Link>

      {/* Title */}
      <h1 className="text-xl font-semibold text-foreground leading-tight mb-1">
        {chapter.title[lang]}
      </h1>
      <p className="text-xs text-muted-foreground mb-6">
        {lang === 'en' ? `Chapter ${chapter.num}` : `第${chapter.num}章`}
      </p>

      {/* Markdown content */}
      <article className="prose prose-sm max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-foreground/85 prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
