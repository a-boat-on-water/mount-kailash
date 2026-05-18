"use client";

import { useState } from "react";
import { MapPin, BookOpen, Flame, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import type { SacredSite } from "@/data/sacred-sites";

const stageColors = { 1: "bg-blue-500", 2: "bg-red-500", 3: "bg-green-500" } as Record<number, string>;

interface Props {
  sites: SacredSite[];
}

export default function SacredSitesList({ sites }: Props) {
  const { lang, t } = useLanguage();
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeStage
    ? sites.filter((s) => s.stage === activeStage)
    : sites;

  const stageFilters = [
    { value: null, label: t.allStages },
    { value: 1, label: `${t.stage} 1` },
    { value: 2, label: `${t.stage} 2` },
    { value: 3, label: `${t.stage} 3` },
  ];

  const stageCounts = { 1: 0, 2: 0, 3: 0 };
  sites.forEach((s) => { stageCounts[s.stage as 1 | 2 | 3]++; });

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href="/guide" />

      <PageTitle className="mb-1">{t.sacredSites}</PageTitle>
      <p className="text-xs text-white/70 mb-4">
        {t.sacredSitesCount.replace('{count}', String(sites.length))}
      </p>

      {/* Stage filter */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {stageFilters.map((f) => (
          <button
            key={String(f.value)}
            onClick={() => setActiveStage(f.value)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeStage === f.value
                ? "bg-white text-foreground"
                : "bg-white/20 text-white/80"
            }`}
          >
            {f.label}
            {f.value && (
              <span className="ml-1 opacity-60">
                ({stageCounts[f.value as 1 | 2 | 3]})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Sites list */}
      <div className="space-y-2">
        {filtered.map((site, i) => {
          const isExpanded = expandedId === site.id;
          return (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.25 }}
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : site.id)}
                className="w-full text-left card-glass p-3.5 active:bg-white/80 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg ${stageColors[site.stage] || 'bg-primary'} flex items-center justify-center`}>
                    <span className="text-white text-[10px] font-bold">
                      {site.id.replace('ss-', '')}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground leading-tight">
                        {site.name_zh}
                      </p>
                      {isExpanded
                        ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      }
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-muted-foreground">
                        {`${t.stage} ${site.stage}`}
                      </span>
                      {site.elevation_m && (
                        <span className="text-[11px] text-muted-foreground">
                          {site.elevation_m}m
                        </span>
                      )}
                      <span className="text-[11px] text-muted-foreground">
                        p.{site.source_page}
                      </span>
                      {site.has_legend && <BookOpen className="w-3 h-3 text-secondary" />}
                      {site.has_ritual && <Flame className="w-3 h-3 text-primary" />}
                    </div>
                    {!isExpanded && (
                      <p className="text-xs text-foreground/60 mt-1 line-clamp-2 leading-relaxed">
                        {site.description.replace(/\n/g, ' ')}
                      </p>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-border/50 space-y-2.5">
                        <p className="text-xs text-foreground/80 leading-relaxed whitespace-pre-line">
                          {site.description_full || site.description}
                        </p>

                        {site.legend && (
                          <div className="bg-secondary/10 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <BookOpen className="w-3.5 h-3.5 text-secondary" />
                              <span className="text-[11px] font-medium text-secondary">
                                {t.legend}
                              </span>
                            </div>
                            <p className="text-xs text-foreground/70 leading-relaxed whitespace-pre-line line-clamp-6">
                              {site.legend}
                            </p>
                          </div>
                        )}

                        {site.ritual_practices && (
                          <div className="bg-primary/5 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Flame className="w-3.5 h-3.5 text-primary" />
                              <span className="text-[11px] font-medium text-primary">
                                {t.practice}
                              </span>
                            </div>
                            <p className="text-xs text-foreground/70 leading-relaxed whitespace-pre-line line-clamp-6">
                              {site.ritual_practices}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </PageBackground>
  );
}
