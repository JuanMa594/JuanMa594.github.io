'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DICTIONARIES, type Translation } from '../data/locales';
import type { Language } from '../types/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'es';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (isLanguage(savedLanguage)) {
      // localStorage is only reachable client-side, so the persisted language can only be applied post-mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    localStorage.setItem('language', nextLanguage);
    setLanguageState(nextLanguage);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: DICTIONARIES[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
