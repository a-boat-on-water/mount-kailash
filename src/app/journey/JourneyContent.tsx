"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, Package, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { StatCard } from "@/components/StatCard";
import { Section } from "@/components/Section";
import { DepthContent } from "@/components/DepthContent";
import { stages, itineraryOverview } from "@/data/guide/stages";

export default function JourneyContent() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <PageTitle className="mb-1">{t.journey}</PageTitle>
      <p className="text-xs text-white/70 mb-5">
        {t.routeSubtitle}
      </p>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <StatCard label={t.totalDistance} value="~52 km" />
        <StatCard label={t.highestPoint} value="5,650m" />
        <StatCard label={t.suggestedDays} value="2-3" />
      </div>

      {/* Why 3 Days */}
      <Section title={t.whyThreeDays} icon={<Mountain className="w-4 h-4" />}>
        <div className="card-glass p-4">
          <p className="text-sm text-foreground/80 leading-relaxed">
            {itineraryOverview.philosophy[lang]}
          </p>
          <DepthContent context={itineraryOverview.context} deepDive={itineraryOverview.deepDive} />
        </div>
      </Section>

      {/* Stage cards */}
      <div className="space-y-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <Link
              href={`/journey/${stage.id}`}
              className="block card-glass p-4 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {stage.id}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {stage.title[lang]}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground">{t.totalDistance}</p>
                  <p className="font-medium text-foreground">{stage.distance}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t.duration}</p>
                  <p className="font-medium text-foreground">{stage.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t.elevationGain}</p>
                  <p className="font-medium text-foreground">{stage.elevationGain}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Supply Points Overview */}
      <Section title={t.supplyOverview} icon={<Package className="w-4 h-4" />}>
        <div className="card-glass p-4">
          <p className="text-sm text-foreground/80 leading-relaxed">
            {itineraryOverview.supplyOverview[lang]}
          </p>
        </div>
      </Section>
    </PageBackground>
  );
}
