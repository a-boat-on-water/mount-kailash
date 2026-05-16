"use client";

import { motion } from "framer-motion";
import { Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { culturalProtocols, environmentalProtocols } from "@/data/about/protocols";

export default function ProtocolsPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/sacred-card.jpg">
      <BackButton href="/about" />

      <h1 className="text-xl font-semibold text-white tracking-tight mb-5">
        {t.protocols}
      </h1>

      <Section title={lang === "en" ? "Respect & Etiquette" : "尊重与礼节"} icon={<Heart className="w-4 h-4" />}>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg divide-y divide-border/50">
          {culturalProtocols.map((p) => (
            <div key={p.id} className="p-3.5">
              <p className="text-sm font-medium text-foreground">{p.title[lang]}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.content[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={lang === "en" ? "Environmental Responsibility" : "环境责任"} icon={<Leaf className="w-4 h-4" />}>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg divide-y divide-border/50">
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
