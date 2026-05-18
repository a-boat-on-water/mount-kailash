"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Backpack,
  Truck,
  Shield,
  Phone,
  Mountain,
  ScrollText,
  BookOpen,
  BookOpenText,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageBackground } from "@/components/PageBackground";
import { PageTitle } from "@/components/PageTitle";
import type { LucideIcon } from "lucide-react";

interface HubCard {
  href: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

interface CardGroup {
  labelKey: string;
  cards: HubCard[];
}

const groups: CardGroup[] = [
  {
    labelKey: "planYourTrip",
    cards: [
      { href: "/guide/when-to-go", icon: Calendar, titleKey: "whenToGo", descKey: "whenToGoDesc" },
      { href: "/guide/packing", icon: Backpack, titleKey: "packingList", descKey: "packingListDesc" },
      { href: "/guide/logistics", icon: Truck, titleKey: "logistics", descKey: "logisticsDesc" },
      { href: "/guide/safety", icon: Shield, titleKey: "safety", descKey: "safetyDesc" },
      { href: "/guide/contacts", icon: Phone, titleKey: "contacts", descKey: "contactsDesc" },
    ],
  },
  {
    labelKey: "understandKailash",
    cards: [
      { href: "/guide/mountain", icon: Mountain, titleKey: "sacredMountain", descKey: "sacredMountainDesc" },
      { href: "/guide/protocols", icon: ScrollText, titleKey: "protocols", descKey: "protocolsDesc" },
      { href: "/guide/glossary", icon: BookOpenText, titleKey: "glossary", descKey: "glossaryDesc" },
    ],
  },
  {
    labelKey: "fullBook",
    cards: [
      { href: "/guide/book", icon: BookOpen, titleKey: "fullBook", descKey: "fullBookDesc" },
    ],
  },
];

export default function GuidePage() {
  const { t } = useLanguage();
  const translations = t as Record<string, string>;

  let cardIndex = 0;

  return (
    <PageBackground image="/images/trail-card.jpg">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <PageTitle>{translations.guideTitle}</PageTitle>
        <p className="text-sm text-white/70 -mt-3">{translations.guideSubtitle}</p>
      </motion.div>

      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.labelKey}>
            <h2 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2.5">
              {translations[group.labelKey]}
            </h2>
            <div className="space-y-2">
              {group.cards.map((card) => {
                const Icon = card.icon;
                const idx = cardIndex++;
                return (
                  <motion.div
                    key={card.titleKey}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + idx * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={card.href}
                      className="flex items-center gap-4 p-4 card-glass active:scale-[0.98] transition-transform"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {translations[card.titleKey]}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {translations[card.descKey]}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageBackground>
  );
}
