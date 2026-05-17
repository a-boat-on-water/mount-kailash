"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ExpandableCard({ title, icon, children }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-glass overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3.5 flex items-center gap-2 text-left"
      >
        {icon}
        <span className="text-sm font-medium text-foreground">{title}</span>
        <ChevronDown className={cn("w-3.5 h-3.5 text-muted-foreground ml-auto transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
