'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.adsbygoogle) return;

    const adElem = adRef.current?.querySelector('.adsbygoogle');

    if (adElem?.getAttribute('data-adsbygoogle-status') !== 'done') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsbygoogle error:', e);
      }
    }
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-1336844014493722"
        data-ad-slot="27399004829" // ✅ تأكد أن هذا الرقم فريد لكل إعلان مختلف
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
