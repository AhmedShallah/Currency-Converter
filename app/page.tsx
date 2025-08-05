'use client';

import { CurrencyConverter } from './components/currency-converter';
import { ThemeToggle } from './components/theme-toggle';
import { LanguageToggle } from './components/language-toggle';
import { useLanguage } from './providers';
import { TrendingUp } from 'lucide-react';
import AdBanner from './components/AdBanner';
import Link from 'next/link';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      {/* Header */}
      <header className="w-full px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-xl">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{t('title')}</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                {t('description')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Currency Converter */}
          <CurrencyConverter />

          {/* Google AdSense Banner */}
          <div className="my-8 min-h-[100px]">
            <AdBanner />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-2 md:mb-0">
            <Link href="/about" className="hover:underline mx-2">
              {language === 'ar' ? 'من نحن' : 'About'}
            </Link>
            |
            <Link href="/privacy-policy" className="hover:underline mx-2">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
          </div>
          <div>
            © 2025 {language === 'ar' ? 'محول العملات. جميع الحقوق محفوظة.' : 'Currency Converter. All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
}
