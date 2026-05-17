"use client";

import { Shield, AlertTriangle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { Section } from "@/components/Section";
import { ExpandableCard } from "@/components/ExpandableCard";
import { altitudeTips, otherRisks, incidents, authorTips } from "@/data/guide/safety";

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
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.otherRisks} icon={<Shield className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {otherRisks.map((risk) => (
            <div key={risk.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{risk.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{risk.content[lang]}</p>
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
