"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BookSection } from "@/data/guide-chapters";

interface ChapterRendererProps {
  sections: BookSection[];
  /** If true, all sections start expanded (for short chapters) */
  defaultOpen?: boolean;
}

function ChapterSection({
  section,
  defaultOpen = false,
}: {
  section: BookSection;
  defaultOpen?: boolean;
}) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(defaultOpen);

  const title = section.title[lang] || section.title.zh;
  const content = section.content[lang] || section.content.zh;
  const isMainSection = section.title.zh === section.title.en || section.id.indexOf(".") === -1;

  // Split content into paragraphs on double newlines or single newlines
  const paragraphs = content
    .split(/\n\s*\n|\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  if (paragraphs.length === 0) return null;

  // For single-section chapters ("main"), render without accordion
  if (isMainSection && section.title.zh === "main") {
    return (
      <div className="space-y-3">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm text-white/80 leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="card-glass overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3.5 flex items-center gap-2 text-left"
      >
        <span className="text-xs text-primary/60 font-mono min-w-[2rem]">
          {section.id}
        </span>
        <span className="text-sm font-medium text-foreground flex-1">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground ml-auto transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5 space-y-2.5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-xs text-foreground/70 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ChapterRenderer({
  sections,
  defaultOpen = false,
}: ChapterRendererProps) {
  const hasMultipleSections = sections.length > 1;

  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <ChapterSection
          key={section.id}
          section={section}
          defaultOpen={defaultOpen || !hasMultipleSections}
        />
      ))}
    </div>
  );
}
