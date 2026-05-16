"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertTriangle, ChevronDown, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { altitudeTips, otherRisks, incidents, authorTips } from "@/data/guide/safety";

export default function SafetyPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="px-4 pt-6 pb-8">
      <BackButton href="/guide" />

      <h1 className="text-xl font-semibold text-foreground tracking-tight mb-5">
        {t.safety}
      </h1>

      {/* Altitude */}
      <Section title={lang === "en" ? "Altitude Sickness" : "高原反应"} icon={<AlertTriangle className="w-4 h-4" />}>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {altitudeTips.map((tip) => (
            <div key={tip.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{tip.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tip.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Other risks */}
      <Section title={lang === "en" ? "Other Risks" : "其他风险"} icon={<Shield className="w-4 h-4" />}>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {otherRisks.map((risk) => (
            <div key={risk.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{risk.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{risk.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Incidents */}
      <Section title={lang === "en" ? "Real Incidents" : "真实事故"} icon={<AlertTriangle className="w-4 h-4" />}>
        <div className="space-y-2">
          {incidents.map((inc) => (
            <IncidentCard key={inc.id} incident={inc} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Author tips */}
      <Section title={lang === "en" ? "Practical Tips" : "实用建议"} icon={<Lightbulb className="w-4 h-4" />}>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {authorTips.map((tip) => (
            <div key={tip.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{tip.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tip.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function IncidentCard({ incident, lang }: { incident: typeof incidents[number]; lang: "en" | "zh" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3.5 flex items-center gap-2 text-left"
      >
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
        <span className="text-sm font-medium text-foreground">{incident.title[lang]}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground ml-auto transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-3.5 pb-3.5 text-xs text-muted-foreground leading-relaxed">
              {incident.description[lang]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
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
