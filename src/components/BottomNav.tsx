"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, MapPin, BookOpen, Footprints } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const tabs = [
  { href: "/", key: "home" as const, icon: Home },
  { href: "/map", key: "map" as const, icon: MapPin },
  { href: "/guide", key: "guide" as const, icon: BookOpen },
  { href: "/journey", key: "journey" as const, icon: Footprints },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav
      className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
      role="tablist"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around px-2 py-2.5 bg-foreground/95 backdrop-blur-xl rounded-2xl shadow-lg">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname?.startsWith(tab.href + "/");
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              role="tab"
              aria-selected={isActive}
              className="relative flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-active"
                  className="absolute inset-0 bg-white/15 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`w-[18px] h-[18px] relative z-10 transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              />
              <span
                className={`text-[9px] font-medium relative z-10 tracking-wide transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {t[tab.key]}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
