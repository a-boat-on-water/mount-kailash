"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";

interface Props {
  titleKey: "glossary" | "legends" | "rituals";
  content: string;
  backHref?: string;
}

export default function MarkdownPage({ titleKey, content, backHref = "/about" }: Props) {
  const { t } = useLanguage();

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href={backHref} />

      <h1 className="text-xl font-semibold text-white leading-tight mb-6">
        {t[titleKey]}
      </h1>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
        <article className="prose prose-sm max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-foreground/85 prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </PageBackground>
  );
}
