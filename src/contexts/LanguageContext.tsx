'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { en } from '@/i18n/en'
import { zh } from '@/i18n/zh'

type Lang = 'en' | 'zh'
type Translations = Record<keyof typeof en, string>

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: en,
})

const dictionaries = { en, zh } as const

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('kailash-lang') as Lang | null
    if (saved === 'en' || saved === 'zh') {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('kailash-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
