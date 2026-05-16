"use client";

import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { CategoryGrid } from "@/components/CategoryGrid";
import { QuoteSection } from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh bg-background">
      <HeroSection />
      <StatsStrip />
      <CategoryGrid />
      <QuoteSection />
    </div>
  );
}
