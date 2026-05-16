"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Compass, BookOpen, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

interface PhotoCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: ReactNode;
  href: string;
  delay: number;
}

function PhotoCard({ title, subtitle, description, image, icon, href, delay }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={href}
        className="relative overflow-hidden rounded-xl text-left group w-full h-full block active:scale-[0.98] transition-transform"
      >
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
        <div className="relative z-10 flex flex-col justify-end h-full p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/90">{icon}</span>
            </div>
            <span className="text-[10px] tracking-[0.15em] text-white/50 font-medium uppercase">
              {subtitle}
            </span>
          </div>
          <h3 className="text-[17px] font-semibold text-white leading-tight">
            {title}
          </h3>
          <p className="text-[11px] text-white/50 leading-relaxed mt-1">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoryGrid() {
  const { t } = useLanguage();

  return (
    <section className="px-5 py-6">
      <motion.div
        className="flex items-baseline justify-between mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          {t.explore}
        </h2>
        <span className="text-xs text-muted-foreground tracking-wide">
          {t.categories}
        </span>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {/* Row 1: tall left, short right */}
        <div className="row-span-2 h-[296px]">
          <PhotoCard
            title={t.tripPlanning}
            subtitle={t.tripPlanningSubtitle}
            description={t.tripPlanningDesc}
            image="/images/planning-card.jpg"
            icon={<Calendar className="w-3.5 h-3.5" />}
            href="/guide?cat=planning"
            delay={0.3}
          />
        </div>
        <div className="h-[143px]">
          <PhotoCard
            title={t.onTheTrail}
            subtitle={t.onTheTrailSubtitle}
            description={t.onTheTrailDesc}
            image="/images/trail-card.jpg"
            icon={<Compass className="w-3.5 h-3.5" />}
            href="/map"
            delay={0.45}
          />
        </div>

        {/* Row 2: companion card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="h-[143px]"
        >
          <Link
            href="/info"
            className="relative overflow-hidden rounded-xl text-left bg-primary h-full block active:scale-[0.98] transition-transform"
          >
            <div className="relative z-10 flex flex-col justify-between h-full p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-primary-foreground/90" />
                </div>
                <span className="text-[10px] tracking-[0.15em] text-primary-foreground/50 font-medium uppercase">
                  {t.companionSubtitle}
                </span>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-primary-foreground leading-tight">
                  {t.companion}
                </h3>
                <p className="text-[11px] text-primary-foreground/50 leading-relaxed mt-1">
                  {t.companionDesc}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Row 3: full-width Sacred Knowledge */}
        <div className="col-span-2 h-[180px]">
          <PhotoCard
            title={t.sacredKnowledge}
            subtitle={t.sacredKnowledgeSubtitle}
            description={t.sacredKnowledgeDesc}
            image="/images/sacred-card.jpg"
            icon={<BookOpen className="w-3.5 h-3.5" />}
            href="/guide?cat=culture"
            delay={0.75}
          />
        </div>
      </div>
    </section>
  );
}
