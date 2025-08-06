'use client';

import Link from 'next/link';
import { useLanguage } from '../providers';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-background mt-8 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-sm text-muted-foreground text-center gap-2">
        
        {/* روابط الصفحات */}
        <div className="space-x-4 rtl:space-x-reverse">
          <Link href="/about" className="hover:underline">
            {language === 'ar' ? 'من نحن' : 'About'}
          </Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:underline">
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:underline">
            {language === 'ar' ? 'اتصل بي' : 'Contact'}
          </Link>
        </div>

        {/* النص الحقوقي */}
        <div>
          © 2025 {language === 'ar' ? 'محول العملات. جميع الحقوق محفوظة.' : 'Currency Converter. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}
