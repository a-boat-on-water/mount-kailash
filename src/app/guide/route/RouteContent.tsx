"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ElevationChart } from "@/components/ElevationChart";
import { BackButton } from "@/components/BackButton";
import { stages } from "@/data/guide/stages";

interface Props {
  coordinates: [number, number, number][];
}

export default function RouteContent({ coordinates }: Props) {
  const { lang, t } = useLanguage();

  return (
    <div className="px-4 pt-6 pb-8">
      <BackButton href="/guide" />

      <h1 className="text-xl font-semibold text-foreground tracking-tight mb-1">
        {t.route}
      </h1>
      <p className="text-xs text-muted-foreground mb-5">
        {lang === "en" ? "52km circuit • 2-3 days • max 5,650m" : "52公里环线 • 2-3天 • 最高5650米"}
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
          <Mountain className="w-4 h-4 text-primary" />
          <h2 className="text-base font-semibold text-foreground">{t.elevationProfile}</h2>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
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
              className="block bg-card rounded-xl p-4 border border-border active:bg-muted transition-colors"
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
                  <p className="text-muted-foreground">{lang === "en" ? "Duration" : "时间"}</p>
                  <p className="font-medium">{stage.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{lang === "en" ? "Elevation" : "爬升"}</p>
                  <p className="font-medium">{stage.elevationGain}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card rounded-xl p-3 border border-border text-center">
      <p className="text-lg font-bold text-primary">{value}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
    </div>
  );
}
