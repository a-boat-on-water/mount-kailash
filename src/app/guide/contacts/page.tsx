"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BackButton } from "@/components/BackButton";
import { PageBackground } from "@/components/PageBackground";
import { contacts, contactCategories } from "@/data/contacts";

export default function ContactsPage() {
  const { lang, t } = useLanguage();

  return (
    <PageBackground image="/images/trail-card.jpg">
      <BackButton href="/guide" />

      <h1 className="text-xl font-semibold text-white tracking-tight mb-5">
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
              <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                {contactCategories[cat][lang]}
              </p>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg divide-y divide-border/50">
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
    </PageBackground>
  );
}
