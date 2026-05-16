"use client";

import { motion } from "framer-motion";
import { Mountain, CloudSun, Backpack, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ElevationChart } from "@/components/ElevationChart";

interface Props {
  weatherByMonth: { month: number; raw_spec: string; description: string }[];
  gear: { item: string; notes: string }[];
  coordinates: [number, number, number][];
}

export default function InfoContent({ weatherByMonth, gear, coordinates }: Props) {
  const { lang, t } = useLanguage();

  const stages = [
    {
      day: 1,
      zh: "塔钦 → 止热寺",
      en: "Darchen → Drirapuk",
      distance: "20 km",
      elevation: "4,675m → 5,080m",
      time: "7-9h",
    },
    {
      day: 2,
      zh: "止热寺 → 尊珠寺",
      en: "Drirapuk → Zutul Puk",
      distance: "18 km",
      elevation: "5,080m → 5,630m → 4,820m",
      time: "8-10h",
    },
    {
      day: 3,
      zh: "尊珠寺 → 塔钦",
      en: "Zutul Puk → Darchen",
      distance: "14 km",
      elevation: "4,820m → 4,675m",
      time: "4-6h",
    },
  ];

  return (
    <div className="px-4 pt-6 pb-8">
      {/* Header */}
      <h1 className="text-xl font-semibold text-foreground tracking-tight mb-1">
        {t.infoTitle}
      </h1>
      <p className="text-xs text-muted-foreground mb-5">
        {lang === "en" ? "52km kora circuit overview" : "52公里转山环线概览"}
      </p>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <StatCard label={t.totalDistance} value="~52 km" />
        <StatCard label={t.highestPoint} value="5,630m" />
        <StatCard label={t.suggestedDays} value="2-3" />
      </div>

      {/* Elevation Profile */}
      <Section title={t.elevationProfile} icon={<Mountain className="w-4 h-4" />}>
        <div className="bg-card rounded-xl p-4 border border-border">
          <ElevationChart coordinates={coordinates} />
        </div>
      </Section>

      {/* Stage breakdown */}
      <Section title={t.stages} icon={<Mountain className="w-4 h-4" />}>
        <div className="space-y-2.5">
          {stages.map((stage) => (
            <div
              key={stage.day}
              className="bg-card rounded-xl p-4 border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  D{stage.day}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {lang === "en" ? stage.en : stage.zh}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground">{t.totalDistance}</p>
                  <p className="font-medium">{stage.distance}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t.elevation}</p>
                  <p className="font-medium">{stage.elevation}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    {lang === "en" ? "Time" : "时间"}
                  </p>
                  <p className="font-medium">{stage.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Weather */}
      <Section title={t.weather} icon={<CloudSun className="w-4 h-4" />}>
        <div className="space-y-2">
          {weatherByMonth.map((w) => (
            <div key={w.month} className="bg-card rounded-xl p-3 border border-border">
              <p className="text-sm font-medium text-foreground mb-1">
                {lang === "en" ? `Month ${w.month}` : `${w.month}月`}
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed line-clamp-4">
                {w.description.replace(/\n/g, ' ')}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gear */}
      <Section title={t.gear} icon={<Backpack className="w-4 h-4" />}>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {gear.slice(1).map((g, i) => (
            <div key={i} className="p-3">
              <p className="text-sm font-medium text-foreground">{g.item}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {g.notes.replace(/\n/g, ' ')}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Safety */}
      <Section title={t.safety} icon={<AlertTriangle className="w-4 h-4" />}>
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 space-y-2.5">
          <Tip
            zh="注意高反，建议在塔钦适应至少一天"
            en="Acclimatize in Darchen at least 1 day"
          />
          <Tip zh="携带足够的水和食物" en="Bring enough water and food" />
          <Tip zh="注意天气变化，注意保暖" en="Watch weather changes, stay warm" />
          <Tip zh="不要独自转山" en="Don't trek alone" />
          <Tip
            zh="卓玛拉山口海拔5630m，注意慢行"
            en="Dolma La pass at 5630m — go slow"
          />
        </div>
      </Section>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.section
      className="mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-primary">{icon}</span>
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </motion.section>
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

function Tip({ zh, en }: { zh: string; en: string }) {
  const { lang } = useLanguage();
  return (
    <div className="flex gap-2">
      <AlertTriangle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
      <p className="text-sm text-foreground">{lang === "en" ? en : zh}</p>
    </div>
  );
}
