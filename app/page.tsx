'use client';

import { CurrencyConverter } from './components/currency-converter';
import { useLanguage } from './providers';
import AdBanner from './components/AdBanner';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="gradient-bg">
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t('title')}
            </h1>
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
      </div>
    </div>
  );
}
