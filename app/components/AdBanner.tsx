'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
      try {
        // لا تدفع الإعلانات إلا مرة واحدة لكل عنصر
        if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('Adsense error', e);
      }
    }
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"  // ← غيّر هذا برقمك الحقيقي
        data-ad-slot="xxxxxxxxxx"                 // ← غيّر هذا برقم إعلانك
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
