// components/AdBanner.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      // إعادة تحميل الإعلان عند عرض المكون
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsbygoogle error:', e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-1336844014493722"
        data-ad-slot="27399004829" // <-- استبدل هذا بالرقم الصحيح من AdSense
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
        }}
      />
    </>
  );
}
