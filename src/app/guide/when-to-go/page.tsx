"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, Calendar, Sparkles, Wind, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { Section } from "@/components/Section";
import { DepthContent } from "@/components/DepthContent";
import { seasons, seasonOverview, monthByMonth, sagaDawa, bestTiming, windWarning } from "@/data/guide/seasons";

const ratingConfig = {
  best: { icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50/90 border-emerald-200", label: { en: "Best", zh: "最佳" } },
  good: { icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-50/90 border-blue-200", label: { en: "Good", zh: "推荐" } },
  caution: { icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50/90 border-amber-200", label: { en: "Caution", zh: "注意" } },
  closed: { icon: XCircle, color: "text-red-600", bg: "bg-red-50/90 border-red-200", label: { en: "Closed", zh: "封山" } },
};

export default function WhenToGoPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

      <PageTitle className="mb-1">{t.whenToGo}</PageTitle>
      <p className="text-xs text-white/70 mb-5">
        {seasonOverview.openingSeason[lang]}
      </p>

      <div className="space-y-3">
        {seasons.map((season, i) => {
          const config = ratingConfig[season.rating];
          const Icon = config.icon;
          return (
            <motion.div
              key={season.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className={`rounded-xl p-4 border backdrop-blur-sm shadow-lg ${config.bg}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${config.color}`} />
                <span className={`text-xs font-semibold ${config.color}`}>
                  {config.label[lang]}
                </span>
                <span className="text-sm font-medium text-foreground ml-1">
                  {season.period[lang]}
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {season.description[lang]}
              </p>
              <DepthContent context={season.context} />
            </motion.div>
          );
        })}
      </div>

      <Section title={lang === 'en' ? 'Quick Recommendation' : '快速推荐'} icon={<Star className="w-4 h-4" />}>
        <div className="card-glass p-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              {lang === 'en' ? '1st Choice' : '首选'}
            </p>
            <p className="text-sm font-medium text-foreground">{bestTiming.firstChoice.period[lang]}</p>
            <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">{bestTiming.firstChoice.note[lang]}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              {lang === 'en' ? '2nd Choice' : '次选'}
            </p>
            <p className="text-sm font-medium text-foreground">{bestTiming.secondChoice.period[lang]}</p>
            <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">{bestTiming.secondChoice.note[lang]}</p>
          </div>
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-red-400 leading-relaxed">{bestTiming.winterWarning[lang]}</p>
          </div>
        </div>
      </Section>

      <Section title={windWarning.title[lang]} icon={<Wind className="w-4 h-4" />}>
        <div className="card-glass p-4">
          <p className="text-sm text-foreground/80 leading-relaxed">{windWarning.content[lang]}</p>
        </div>
      </Section>

      <Section title={t.monthByMonth} icon={<Calendar className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {monthByMonth.map((m) => (
            <div key={m.id} className="p-3.5">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-foreground">{m.month[lang]}</p>
                <span className="text-[10px] text-muted-foreground">{m.temp[lang]}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.conditions[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.sagaDawaFestival} icon={<Sparkles className="w-4 h-4" />}>
        <div className="card-glass p-4 space-y-3">
          <p className="text-sm text-foreground/80 leading-relaxed">
            {sagaDawa.description[lang]}
          </p>
          <div className="space-y-1.5">
            {sagaDawa.dates.map((d) => (
              <div key={d.year} className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{d.year}</span>
                <span className="text-xs text-primary font-semibold">{d.display[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageBackground>
  );
}
