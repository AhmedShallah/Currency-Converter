'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '../providers';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary hover:bg-accent transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}