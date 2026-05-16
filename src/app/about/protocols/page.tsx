"use client";

import { motion } from "framer-motion";
import { Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { culturalProtocols, environmentalProtocols } from "@/data/about/protocols";

export default function ProtocolsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="px-4 pt-6 pb-8">
      <BackButton href="/about" />

      <h1 className="text-xl font-semibold text-foreground tracking-tight mb-5">
        {t.protocols}
      </h1>

      {/* Cultural */}
      <Section title={lang === "en" ? "Respect & Etiquette" : "尊重与礼节"} icon={<Heart className="w-4 h-4" />}>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {culturalProtocols.map((p) => (
            <div key={p.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{p.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Environmental */}
      <Section title={lang === "en" ? "Environmental Responsibility" : "环境责任"} icon={<Leaf className="w-4 h-4" />}>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {environmentalProtocols.map((p) => (
            <div key={p.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{p.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.content[lang]}</p>
            </div>
          ))}
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
