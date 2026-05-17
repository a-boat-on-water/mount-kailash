"use client";

import { Map, Calendar, Backpack, Truck, Shield, Phone } from "lucide-react";
import { HubPage } from "@/components/HubPage";

const cards = [
  { href: "/guide/route", icon: Map, key: "route", descKey: "routeDesc" },
  { href: "/guide/when-to-go", icon: Calendar, key: "whenToGo", descKey: "whenToGoDesc" },
  { href: "/guide/packing", icon: Backpack, key: "packingList", descKey: "packingListDesc" },
  { href: "/guide/logistics", icon: Truck, key: "logistics", descKey: "logisticsDesc" },
  { href: "/guide/safety", icon: Shield, key: "safety", descKey: "safetyDesc" },
  { href: "/guide/contacts", icon: Phone, key: "contacts", descKey: "contactsDesc" },
] as const;

export default function GuidePage() {
  return (
    <HubPage
      image="/images/trail-card.jpg"
      titleKey="guideTitle"
      subtitleKey="guideSubtitle"
      cards={cards}
    />
  );
}
