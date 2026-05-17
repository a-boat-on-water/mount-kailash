"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ElevationChart } from "@/components/ElevationChart";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { StatCard } from "@/components/StatCard";
import { stages } from "@/data/guide/stages";

interface Props {
  coordinates: [number, number, number][];
}

export default function RouteContent({ coordinates }: Props) {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

      <PageTitle className="mb-1">{t.route}</PageTitle>
      <p className="text-xs text-white/70 mb-5">
        {t.routeSubtitle}
      </p>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <StatCard label={t.totalDistance} value="~52 km" />
        <StatCard label={t.highestPoint} value="5,650m" />
        <StatCard label={t.suggestedDays} value="2-3" />
      </div>

      {/* Elevation Profile */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Mountain className="w-4 h-4 text-white/80" />
          <h2 className="text-base font-semibold text-white">{t.elevationProfile}</h2>
        </div>
        <div className="card-glass p-4">
          <ElevationChart coordinates={coordinates} />
        </div>
      </div>

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
              href={`/guide/route/${stage.id}`}
              className="block card-glass p-4 active:bg-white/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {stage.id}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {stage.title[lang]}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground">{t.totalDistance}</p>
                  <p className="font-medium">{stage.distance}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t.duration}</p>
                  <p className="font-medium">{stage.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t.elevationGain}</p>
                  <p className="font-medium">{stage.elevationGain}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageBackground>
  );
}
