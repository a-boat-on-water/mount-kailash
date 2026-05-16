"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mountain, Route, ThermometerSun, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast"
  + "?latitude=31.067&longitude=81.312"
  + "&current=temperature_2m"
  + "&timezone=Asia%2FShanghai";

function useKailashWeather() {
  const [temp, setTemp] = useState<string | null>(null);

  useEffect(() => {
    fetch(WEATHER_URL)
      .then((r) => r.json())
      .then((data) => setTemp(`${Math.round(data.current.temperature_2m)}°C`))
      .catch(() => setTemp("—"));
  }, []);

  return temp;
}

export function StatsStrip() {
  const { t } = useLanguage();
  const weather = useKailashWeather();

  const stats = [
    { label: t.elevation, value: "5,648m", icon: <Mountain className="w-3.5 h-3.5" /> },
    { label: t.trail, value: "52 km", icon: <Route className="w-3.5 h-3.5" /> },
    { label: t.temp, value: weather || "—", icon: <ThermometerSun className="w-3.5 h-3.5" /> },
    { label: t.gain, value: "1,200m", icon: <ArrowUp className="w-3.5 h-3.5" /> },
  ];

  return (
    <motion.div
      className="grid grid-cols-4 gap-0 border-y border-border bg-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center justify-center py-5 gap-1.5"
          style={{
            borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
        >
          <span className="text-muted-foreground">{stat.icon}</span>
          <span className="text-[10px] tracking-[0.15em] text-muted-foreground font-medium">
            {stat.label}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {stat.value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
