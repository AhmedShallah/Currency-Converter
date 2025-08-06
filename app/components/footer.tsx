'use client';

import Link from 'next/link';
import { useLanguage } from '../providers';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border mt-8 py-6">
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
  );
}