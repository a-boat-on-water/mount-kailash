"use client";

import { Truck, MapPin, Ticket, Users, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import { Section } from "@/components/Section";
import { transport, darchen, fees, porters, supplyPoints } from "@/data/guide/logistics";

export default function LogisticsPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

        <PageTitle>{t.logistics}</PageTitle>

        <Section title={t.gettingToDarchen} icon={<Truck className="w-4 h-4" />}>
          <div className="card-glass divide-y divide-border/50">
            {transport.map((tr) => (
              <div key={tr.id} className="p-3.5">
                <p className="text-sm font-medium text-foreground">{tr.name[lang]}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tr.details[lang]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.darchenBaseCamp} icon={<MapPin className="w-4 h-4" />}>
          <div className="card-glass p-4 space-y-3">
            <p className="text-sm text-foreground/80 leading-relaxed">{darchen.overview[lang]}</p>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.accommodation}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">{darchen.accommodation[lang]}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.facilities}
              </p>
              <ul className="space-y-1">
                {darchen.facilities.map((f, i) => (
                  <li key={i} className="text-xs text-foreground/70 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {f[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title={t.feesAndShuttles} icon={<Ticket className="w-4 h-4" />}>
          <div className="card-glass divide-y divide-border/50">
            {fees.map((f) => (
              <div key={f.id} className="p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{f.name[lang]}</p>
                  <span className="text-sm font-bold text-primary">{f.price[lang]}</span>
                </div>
                {f.note && (
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.note[lang]}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.portersAndHorses} icon={<Users className="w-4 h-4" />}>
          <div className="card-glass divide-y divide-border/50">
            {porters.map((p) => (
              <div key={p.id} className="p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{p.name[lang]}</p>
                  <span className="text-sm font-bold text-primary">{p.price[lang]}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{p.note[lang]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.supplyPointsTitle} icon={<Package className="w-4 h-4" />}>
          <div className="card-glass p-4 space-y-2">
            <InfoRow label={t.count} value={supplyPoints.count[lang]} />
            <InfoRow label={t.maxGap} value={supplyPoints.maxGap[lang]} />
            <InfoRow label={t.infrastructure} value={supplyPoints.infrastructure[lang]} />
            <InfoRow label={t.services} value={supplyPoints.services[lang]} />
          </div>
        </Section>
    </PageBackground>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="text-sm text-foreground/80 leading-relaxed">{value}</p>
    </div>
  );
}
