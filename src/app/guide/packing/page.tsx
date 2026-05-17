"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { packingList, packingCategoryLabels, type PackingItem } from "@/data/packingList";

export default function PackingPage() {
  const { lang, t } = useLanguage();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const copyList = () => {
    const text = packingList
      .map((item) => `☐ ${item.name[lang]}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = Object.keys(packingCategoryLabels) as PackingItem["category"][];

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

        <div className="flex items-center justify-between mb-5">
          <div>
            <PageTitle className="mb-0">{t.packingList}</PageTitle>
            <p className="text-xs text-white/70 mt-0.5">
              {t.itemCount.replace('{count}', String(packingList.length))}
            </p>
          </div>
          <button
            onClick={copyList}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white active:bg-white/30 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? t.copied : t.copyList}
          </button>
        </div>

        <div className="space-y-5">
          {categories.map((cat) => {
            const items = packingList.filter((i) => i.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  {packingCategoryLabels[cat][lang]}
                </p>
                <div className="card-glass divide-y divide-border/50">
                  {items.map((item) => (
                    <div key={item.id} className="p-3">
                      <div className="flex items-start gap-2.5">
                        <button
                          onClick={() => toggle(item.id)}
                          className={`mt-0.5 w-[18px] h-[18px] rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                            checked.has(item.id)
                              ? "bg-primary border-primary"
                              : "border-border"
                          }`}
                        >
                          {checked.has(item.id) && (
                            <Check className="w-3 h-3 text-primary-foreground" />
                          )}
                        </button>
                        <div className="flex-1 min-w-0">
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="flex items-center gap-1 w-full text-left"
                          >
                            <span className={`text-sm font-medium ${checked.has(item.id) ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {item.name[lang]}
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground ml-auto flex-shrink-0 transition-transform ${expanded.has(item.id) ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {expanded.has(item.id) && (
                              <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-xs text-muted-foreground mt-1 leading-relaxed overflow-hidden"
                              >
                                {item.note[lang]}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
    </PageBackground>
  );
}
