"use client";

import { Navigation, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGeolocation } from "@/hooks/useGeolocation";

export function DistanceOverlay() {
  const { lang } = useLanguage();
  const { position, nearest, watching, startWatching } = useGeolocation();

  if (!watching) {
    return (
      <button
        onClick={startWatching}
        className="absolute bottom-4 left-4 z-20 bg-card/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-md border border-border flex items-center gap-2 active:scale-95 transition-transform"
      >
        <Navigation className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-foreground">
          {lang === "en" ? "Start GPS" : "开启GPS"}
        </span>
      </button>
    );
  }

  if (!position || !nearest) return null;

  return (
    <div className="absolute bottom-4 left-4 z-20 bg-card/95 backdrop-blur-md rounded-xl px-3.5 py-2.5 shadow-md border border-border min-w-[180px]">
      <div className="flex items-center gap-2 mb-1.5">
        <Navigation className="w-3.5 h-3.5 text-primary" />
        <span className="text-[11px] text-muted-foreground font-medium">
          {lang === "en" ? "Next waypoint" : "下一路标"}
        </span>
      </div>
      <p className="text-sm font-semibold text-foreground">
        {nearest.name[lang]}
      </p>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-xs text-foreground/70">
          {nearest.distance} km
        </span>
        <span className="text-xs text-muted-foreground">
          {nearest.bearing}°
        </span>
        {position.altitude && (
          <span className="text-xs text-muted-foreground flex items-center gap-0.5">
            <Mountain className="w-3 h-3" />
            {Math.round(position.altitude)}m
          </span>
        )}
      </div>
    </div>
  );
}
