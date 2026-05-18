"use client";

import { Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { Section } from "@/components/Section";
import { culturalProtocols, environmentalProtocols } from "@/data/about/protocols";

export default function ProtocolsPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href="/guide" />

      <PageTitle>{t.protocols}</PageTitle>

      <Section title={t.respectAndEtiquette} icon={<Heart className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {culturalProtocols.map((p) => (
            <div key={p.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{p.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.environmentalResponsibility} icon={<Leaf className="w-4 h-4" />}>
        <div className="card-glass divide-y divide-border/50">
          {environmentalProtocols.map((p) => (
            <div key={p.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{p.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageBackground>
  );
}
