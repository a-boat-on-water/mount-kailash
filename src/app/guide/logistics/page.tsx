"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Ticket, Users, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { transport, darchen, fees, porters, supplyPoints } from "@/data/guide/logistics";

export default function LogisticsPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

        <h1 className="text-xl font-semibold text-white tracking-tight mb-5">
          {t.logistics}
        </h1>

        {/* Getting there */}
        <Section title={lang === "en" ? "Getting to Darchen" : "到达塔钦"} icon={<Truck className="w-4 h-4" />}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg divide-y divide-border/50">
            {transport.map((t) => (
              <div key={t.id} className="p-3.5">
                <p className="text-sm font-medium text-foreground">{t.name[lang]}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{t.details[lang]}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Darchen */}
        <Section title={lang === "en" ? "Darchen Base Camp" : "塔钦大本营"} icon={<MapPin className="w-4 h-4" />}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 space-y-3">
            <p className="text-sm text-foreground/80 leading-relaxed">{darchen.overview[lang]}</p>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                {lang === "en" ? "Accommodation" : "住宿"}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">{darchen.accommodation[lang]}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                {lang === "en" ? "Facilities" : "配套设施"}
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

        {/* Fees */}
        <Section title={lang === "en" ? "Fees & Shuttles" : "费用与接驳"} icon={<Ticket className="w-4 h-4" />}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg divide-y divide-border/50">
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

        {/* Porters */}
        <Section title={lang === "en" ? "Porters & Horses" : "背夫与马匹"} icon={<Users className="w-4 h-4" />}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg divide-y divide-border/50">
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

        {/* Supply Points */}
        <Section title={lang === "en" ? "Supply Points" : "沿途补给"} icon={<Package className="w-4 h-4" />}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 space-y-2">
            <InfoRow label={lang === "en" ? "Count" : "数量"} value={supplyPoints.count[lang]} />
            <InfoRow label={lang === "en" ? "Max gap" : "最远间距"} value={supplyPoints.maxGap[lang]} />
            <InfoRow label={lang === "en" ? "Infrastructure" : "基础设施"} value={supplyPoints.infrastructure[lang]} />
            <InfoRow label={lang === "en" ? "Services" : "服务"} value={supplyPoints.services[lang]} />
          </div>
        </Section>
    </PageBackground>
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
        <span className="text-white/80">{icon}</span>
        <h2 className="text-base font-semibold text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
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
