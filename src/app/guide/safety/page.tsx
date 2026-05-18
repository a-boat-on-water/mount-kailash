"use client";

import { Shield, AlertTriangle, Lightbulb, Activity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { Section } from "@/components/Section";
import { ExpandableCard } from "@/components/ExpandableCard";
import { DepthContent } from "@/components/DepthContent";
import { altitudeTips, otherRisks, incidents, authorTips, spo2Guide } from "@/data/guide/safety";

export default function SafetyPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

      <PageTitle>{t.safety}</PageTitle>

      <Section title={t.altitudeSickness} icon={<AlertTriangle className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {altitudeTips.map((tip) => (
            <div key={tip.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{tip.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tip.content[lang]}</p>
              <DepthContent context={tip.context} />
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.spo2Guide} icon={<Activity className="w-4 h-4" />}>
        <div className="card-glass p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{lang === 'en' ? 'Sea level (normal)' : '平原（正常）'}</p>
            <span className="text-xs font-semibold text-emerald-600">{spo2Guide.normalSeaLevel[lang]}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{lang === 'en' ? 'At 4,600m+' : '海拔4600米以上'}</p>
            <span className="text-xs font-semibold text-blue-600">{spo2Guide.normalAtAltitude[lang]}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{lang === 'en' ? 'Caution' : '注意'}</p>
            <span className="text-xs font-semibold text-amber-600">{spo2Guide.cautionThreshold[lang]}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{lang === 'en' ? 'Danger' : '危险'}</p>
            <span className="text-xs font-semibold text-red-600">{spo2Guide.dangerThreshold[lang]}</span>
          </div>
          <p className="text-[10px] text-muted-foreground/70 leading-relaxed pt-1 border-t border-border/50">
            {spo2Guide.disclaimer[lang]}
          </p>
        </div>
      </Section>

      <Section title={t.otherRisks} icon={<Shield className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {otherRisks.map((risk) => (
            <div key={risk.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{risk.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{risk.content[lang]}</p>
              <DepthContent context={risk.context} />
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.realIncidents} icon={<AlertTriangle className="w-4 h-4" />}>
        <div className="space-y-2">
          {incidents.map((inc) => (
            <ExpandableCard
              key={inc.id}
              title={inc.title[lang]}
              icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />}
            >
              <p className="text-xs text-muted-foreground leading-relaxed">
                {inc.description[lang]}
              </p>
            </ExpandableCard>
          ))}
        </div>
      </Section>

      <Section title={t.practicalTips} icon={<Lightbulb className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {authorTips.map((tip) => (
            <div key={tip.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{tip.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tip.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageBackground>
  );
}
