"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  titleKey: "glossary" | "legends" | "rituals";
  content: string;
  backHref?: string;
}

export default function MarkdownPage({ titleKey, content, backHref = "/about" }: Props) {
  const { lang, t } = useLanguage();

  return (
    <div className="px-4 pt-4 pb-8">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-4 active:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === "en" ? "Back" : "返回"}
      </Link>

      <h1 className="text-xl font-semibold text-foreground leading-tight mb-6">
        {t[titleKey]}
      </h1>

      <article className="prose prose-sm max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-foreground/85 prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
