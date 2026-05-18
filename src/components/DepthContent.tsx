"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface DepthContentProps {
  context?: { en: string; zh: string };
  deepDive?: { en: string; zh: string };
}

export function DepthContent({ context, deepDive }: DepthContentProps) {
  const { lang, t } = useLanguage();
  const [contextOpen, setContextOpen] = useState(false);
  const [deepDiveOpen, setDeepDiveOpen] = useState(false);

  if (!context) return null;

  return (
    <div className="mt-2">
      <button
        onClick={() => setContextOpen(!contextOpen)}
        className="flex items-center gap-1 text-xs text-primary font-medium"
      >
        <ChevronRight
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            contextOpen && "rotate-90"
          )}
        />
        {contextOpen ? t.showLess : t.learnMore}
      </button>

      <AnimatePresence>
        {contextOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 pl-3 border-l-2 border-primary/30">
              <p className="text-xs text-foreground/70 leading-relaxed">
                {context[lang]}
              </p>

              {deepDive && (
                <div className="mt-2">
                  <button
                    onClick={() => setDeepDiveOpen(!deepDiveOpen)}
                    className="flex items-center gap-1 text-xs text-primary/70 font-medium"
                  >
                    <ChevronRight
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        deepDiveOpen && "rotate-90"
                      )}
                    />
                    {deepDiveOpen ? t.showLess : t.deepDiveLabel}
                  </button>

                  <AnimatePresence>
                    {deepDiveOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 pl-3 border-l-2 border-dashed border-primary/20">
                          <p className="text-xs text-foreground/60 leading-relaxed">
                            {deepDive[lang]}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
