'use client';

import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import { useLanguage } from '../providers';
import { TrendingUp } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export function Header() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.location.reload();
    } else {
      router.push('/');
    }
  };

  return (
    <header className="w-full px-4 py-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
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
  );
}