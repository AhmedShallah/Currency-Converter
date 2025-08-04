'use client';

import { CurrencyConverter } from './components/currency-converter';
import { ThemeToggle } from './components/theme-toggle';
import { LanguageToggle } from './components/language-toggle';
import { useLanguage } from './providers';
import { TrendingUp } from 'lucide-react';
import AdBanner from './components/AdBanner'; // ✅ استيراد مكون الإعلان

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen gradient-bg">
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

          <CurrencyConverter />

          {/* إعلان Google AdSense */}
          <div className="my-8">
            <AdBanner />
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'ar' ? 'أسعار مباشرة' : 'Live Rates'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' 
                  ? 'أسعار صرف محدثة كل 5 دقائق'
                  : 'Exchange rates updated every 5 minutes'
                }
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">170+</span>
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'ar' ? 'عملات متعددة' : 'Multiple Currencies'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' 
                  ? 'دعم لأكثر من 170 عملة عالمية'
                  : 'Support for 170+ global currencies'
                }
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'ar' ? 'تحويل فوري' : 'Instant Convert'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' 
                  ? 'تحويل فوري أثناء الكتابة'
                  : 'Real-time conversion as you type'
                }
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            {language === 'ar' 
              ? '© 2025 محول العملات. جميع الحقوق محفوظة.'
              : '© 2025 Currency Converter. All rights reserved.'
            }
          </p>
        </div>
      </footer>
    </div>
  );
}
