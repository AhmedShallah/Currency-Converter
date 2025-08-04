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
    <div ref={adRef} style={{ marginTop: '2rem', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', maxWidth: '728px', height: '90px' }}
        data-ad-client="ca-pub-1336844014493722"
        data-ad-slot="2739904829"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
