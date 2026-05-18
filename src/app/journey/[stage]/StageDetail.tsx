"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Home, Package, Landmark, Info, ArrowRight, ArrowLeft, Footprints, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { DepthContent } from "@/components/DepthContent";
import type { Stage, StageLandmark } from "@/data/guide/stages";
import type { GuideChapter, StageSegment, GuideSite } from "@/data/guide/types";

const typeIcons = {
  sacred: MapPin,
  supply: Package,
  accommodation: Home,
  landmark: Landmark,
  info: Info,
};

const typeColors = {
  sacred: "text-amber-600 bg-amber-50",
  supply: "text-emerald-600 bg-emerald-50",
  accommodation: "text-blue-600 bg-blue-50",
  landmark: "text-purple-600 bg-purple-50",
  info: "text-slate-600 bg-slate-50",
};

interface Props {
  stage: Stage;
  chapter?: GuideChapter;
  prevStage: number | null;
  nextStage: number | null;
}

export default function StageDetail({ stage, chapter, prevStage, nextStage }: Props) {
  const { lang, t } = useLanguage();
  const segments = chapter?.stageData?.segments;
  const stageData = chapter?.stageData;

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/journey" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          {stage.id}
        </span>
        <div>
          <h1 className="text-lg font-semibold text-white">{stage.title[lang]}</h1>
          <p className="text-xs text-white/70">
            {stageData?.distance ?? stage.distance} • {stageData?.duration ?? stage.duration} • {stageData?.elevationGain ?? stage.elevationGain}
          </p>
        </div>
      </div>

      {/* Timing tip */}
      <div className="card-glass p-3 mb-4">
        <p className="text-sm text-foreground">
          {stageData?.timingTip[lang] ?? stage.timingTip[lang]}
        </p>
      </div>

      {/* Safety alert */}
      {(stageData?.safetyAlert ?? stage.safetyAlert) && (
        <div className="bg-red-50/90 backdrop-blur-sm rounded-xl p-3 border border-red-200 shadow-lg mb-4 flex gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">
            {(stageData?.safetyAlert ?? stage.safetyAlert)?.[lang]}
          </p>
        </div>
      )}

      {/* Deep tree: Segments with nested sites */}
      {segments ? (
        <div className="space-y-5">
          {segments.map((seg, si) => (
            <SegmentSection key={seg.id} segment={seg} index={si} lang={lang} t={t} isLast={si === segments.length - 1} />
          ))}
        </div>
      ) : (
        /* Fallback: flat landmarks */
        <>
          <h2 className="text-base font-semibold text-white mb-3">{t.landmarks}</h2>
          <div className="space-y-2.5">
            {stage.landmarks.map((lm, i) => (
              <FlatLandmarkCard key={lm.id} landmark={lm} index={i} lang={lang} />
            ))}
          </div>
        </>
      )}

      {/* Prev / Next navigation */}
      <div className="flex gap-3 mt-8 mb-4">
        {prevStage ? (
          <Link
            href={`/journey/${prevStage}`}
            className="flex-1 card-glass p-3 flex items-center gap-2 active:scale-[0.98] transition-transform"
          >
            <ChevronLeft className="w-4 h-4 text-white/60" />
            <span className="text-sm text-foreground">
              {lang === "en" ? `Stage ${prevStage}` : `第${prevStage}阶段`}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextStage ? (
          <Link
            href={`/journey/${nextStage}`}
            className="flex-1 card-glass p-3 flex items-center justify-end gap-2 active:scale-[0.98] transition-transform"
          >
            <span className="text-sm text-foreground">
              {lang === "en" ? `Stage ${nextStage}` : `第${nextStage}阶段`}
            </span>
            <ChevronRight className="w-4 h-4 text-white/60" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </PageBackground>
  );
}

function SegmentSection({
  segment,
  index,
  lang,
  t,
  isLast,
}: {
  segment: StageSegment;
  index: number;
  lang: "en" | "zh";
  t: Record<string, string>;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
    >
      {/* Segment header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
          {index + 1}
        </div>
        <div className="flex items-center gap-1 text-sm text-white font-medium min-w-0">
          <span className="truncate">{segment.from[lang]}</span>
          <ArrowRight className="w-3 h-3 flex-shrink-0 text-white/50" />
          <span className="truncate">{segment.to[lang]}</span>
        </div>
      </div>

      {/* Segment stats */}
      <div className="flex gap-3 text-[10px] text-white/60 mb-2 ml-8">
        <span>{segment.distance}</span>
        <span>{segment.duration}</span>
        <span>{segment.elevationChange}</span>
      </div>

      {/* Terrain + trail note */}
      <div className="ml-8 mb-3">
        <p className="text-xs text-white/50">{segment.terrain[lang]}</p>
        {segment.trailNote && (
          <p className="text-xs text-amber-300/80 mt-1 italic flex items-center gap-1">
            <Footprints className="w-3 h-3 flex-shrink-0" />
            {segment.trailNote[lang]}
          </p>
        )}
      </div>

      {/* Sites within segment */}
      {segment.sites.length > 0 && (
        <div className="ml-4 pl-4 border-l-2 border-white/10 space-y-2">
          {segment.sites.map((site, i) => (
            <SiteCard key={site.id} site={site} index={i} lang={lang} t={t} />
          ))}
        </div>
      )}

      {/* Connector */}
      {!isLast && (
        <div className="flex justify-center my-3">
          <div className="w-px h-4 bg-white/15" />
        </div>
      )}
    </motion.div>
  );
}

function SiteCard({
  site,
  index,
  lang,
  t,
}: {
  site: GuideSite;
  index: number;
  lang: "en" | "zh";
  t: Record<string, string>;
}) {
  const Icon = typeIcons[site.type];
  const color = typeColors[site.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03, duration: 0.2 }}
      className="card-glass p-3"
    >
      <div className="flex items-start gap-2.5">
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
          <Icon className="w-3 h-3" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <p className="text-sm font-medium text-foreground">
              {site.name[lang]}
            </p>
            {site.elevation && (
              <span className="text-[10px] text-muted-foreground">{site.elevation}m</span>
            )}
          </div>
          {site.tibetan && (
            <p className="text-[10px] text-muted-foreground/60 mt-0.5">{site.tibetan}</p>
          )}

          {/* Key content (always shown) */}
          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
            {site.content.key[lang]}
          </p>

          {/* Progressive disclosure */}
          <DepthContent context={site.content.context} deepDive={site.content.deepDive} />

          {/* Side trip badge */}
          {site.sideTrip && (
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-blue-600 bg-blue-50 rounded-md px-2 py-1 w-fit">
              <Footprints className="w-3 h-3" />
              <span className="font-medium">{t.sideTrip}: {site.sideTrip.duration}</span>
              <span className="text-blue-500">— {site.sideTrip.note[lang]}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function FlatLandmarkCard({ landmark, index, lang }: { landmark: StageLandmark; index: number; lang: "en" | "zh" }) {
  const Icon = typeIcons[landmark.type as keyof typeof typeIcons] ?? Landmark;
  const color = typeColors[landmark.type as keyof typeof typeColors] ?? typeColors.landmark;

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
