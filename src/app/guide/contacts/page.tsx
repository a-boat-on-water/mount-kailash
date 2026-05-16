"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { contacts, contactCategories } from "@/data/contacts";

export default function ContactsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="px-4 pt-6 pb-8">
      <BackButton href="/guide" />

      <h1 className="text-xl font-semibold text-foreground tracking-tight mb-5">
        {t.contacts}
      </h1>

      <div className="space-y-4">
        {(['emergency', 'services', 'transport', 'accommodation'] as const).map((cat) => {
          const catContacts = contacts.filter((c) => c.category === cat);
          if (catContacts.length === 0) return null;
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {contactCategories[cat][lang]}
              </p>
              <div className="bg-card rounded-xl border border-border divide-y divide-border">
                {catContacts.map((c) => (
                  <div key={c.id} className="p-3.5">
                    <p className="text-sm font-medium text-foreground">{c.label[lang]}</p>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {c.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-xs text-primary font-medium bg-primary/10 rounded-md px-2 py-0.5"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                    {c.verified && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        {lang === "en" ? `Verified: ${c.verified}` : `核实: ${c.verified}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
