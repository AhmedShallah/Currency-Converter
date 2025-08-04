import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { ThemeProvider, LanguageProvider } from './providers';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-arabic',
});

export const metadata: Metadata = {
  title: 'Professional Currency Converter - Live Exchange Rates',
  description: 'Convert currencies instantly with live exchange rates. Support for 170+ currencies with real-time updates. Available in English and Arabic.',
  keywords: 'currency converter, exchange rates, USD, ILS, live rates, currency exchange',
  authors: [{ name: 'Currency Converter' }],
  openGraph: {
    title: 'Professional Currency Converter',
    description: 'Convert currencies instantly with live exchange rates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Currency Converter',
    description: 'Convert currencies instantly with live exchange rates',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  {/* Google AdSense Meta Tag */}
  <meta name="google-adsense-account" content="ca-pub-1336844014493722" />

  {/* Google AdSense Script */}
  <Script
    id="adsense-script"
    strategy="afterInteractive"
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1336844014493722"
    crossOrigin="anonymous"
  />

  {/* Favicon */}
  <link rel="icon" type="image/png" sizes="32x32" href="/iconCurrency.png" />
  <link rel="shortcut icon" href="/iconCurrency.png" type="image/png" />
  <link rel="apple-touch-icon" href="/iconCurrency.png" />
</head>
      <body className={`${inter.variable} ${notoSansArabic.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
