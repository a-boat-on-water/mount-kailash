"use client";

import { Mountain, MapPin, Heart, BookOpen, Sparkles, Flame } from "lucide-react";
import { HubPage } from "@/components/HubPage";

const cards = [
  { href: "/about/mountain", icon: Mountain, key: "sacredMountain", descKey: "sacredMountainDesc" },
  { href: "/about/sacred-sites", icon: MapPin, key: "sacredSites", descKey: "sacredSitesDesc" },
  { href: "/about/protocols", icon: Heart, key: "protocols", descKey: "protocolsDesc" },
  { href: "/about/glossary", icon: BookOpen, key: "glossary", descKey: "glossaryDesc" },
  { href: "/about/legends", icon: Sparkles, key: "legends", descKey: "legendsDesc" },
  { href: "/about/rituals", icon: Flame, key: "rituals", descKey: "ritualsDesc" },
] as const;

export default function AboutPage() {
  return (
    <HubPage
      image="/images/sacred-card.jpg"
      titleKey="aboutTitle"
      subtitleKey="aboutSubtitle"
      cards={cards}
    />
  );
}
