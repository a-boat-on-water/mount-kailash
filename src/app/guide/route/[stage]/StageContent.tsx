"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Home, Package, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import type { Stage, StageLandmark } from "@/data/guide/stages";

const typeIcons = {
  sacred: MapPin,
  supply: Package,
  accommodation: Home,
  landmark: Landmark,
};

const typeColors = {
  sacred: "text-amber-600 bg-amber-50",
  supply: "text-emerald-600 bg-emerald-50",
  accommodation: "text-blue-600 bg-blue-50",
  landmark: "text-purple-600 bg-purple-50",
};

export default function StageContent({ stage }: { stage: Stage }) {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide/route" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          {stage.id}
        </span>
        <div>
          <h1 className="text-lg font-semibold text-white">{stage.title[lang]}</h1>
          <p className="text-xs text-white/70">
            {stage.distance} • {stage.duration} • {stage.elevationGain}
          </p>
        </div>
      </div>

      {/* Timing tip */}
      <div className="card-glass p-3 mb-4">
        <p className="text-sm text-foreground">{stage.timingTip[lang]}</p>
      </div>

      {/* Safety alert */}
      {stage.safetyAlert && (
        <div className="bg-red-50/90 backdrop-blur-sm rounded-xl p-3 border border-red-200 shadow-lg mb-4 flex gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{stage.safetyAlert[lang]}</p>
        </div>
      )}

      {/* Landmarks */}
      <h2 className="text-base font-semibold text-white mb-3">
        {t.landmarks}
      </h2>
      <div className="space-y-2.5">
        {stage.landmarks.map((lm, i) => (
          <LandmarkCard key={lm.id} landmark={lm} index={i} lang={lang} />
        ))}
      </div>
    </PageBackground>
  );
}

function LandmarkCard({ landmark, index, lang }: { landmark: StageLandmark; index: number; lang: "en" | "zh" }) {
  const Icon = typeIcons[landmark.type];
  const color = typeColors[landmark.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      className="card-glass p-3.5"
    >
      <div className="flex items-start gap-3">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">
            {landmark.name[lang]}
            {landmark.elevation && (
              <span className="text-xs text-muted-foreground ml-1.5">{landmark.elevation}m</span>
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {landmark.description[lang]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
