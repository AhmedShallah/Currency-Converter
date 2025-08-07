'use client';

import { CurrencyConverter } from './components/currency-converter';
import { useLanguage } from './providers';
import AdBanner from './components/AdBanner';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="gradient-bg">
      <div className="px-4 py-10 sm:py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-normal">
              {t('description')}
            </p>
          </div>

          {/* Currency Converter */}
          <CurrencyConverter />

          {/* Google AdSense Banner */}
          <div className="my-10 min-h-[100px]">
            {/* <AdBanner /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
