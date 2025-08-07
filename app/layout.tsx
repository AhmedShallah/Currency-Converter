import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { ThemeProvider, LanguageProvider } from './providers';
import Script from 'next/script';
import { Header } from './components/header';
import { Footer } from './components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
});

export const metadata: Metadata = {
  title: 'Currency Converter – Real-Time Rates',
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
        {/* Google AdSense Verification Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-1336844014493722"
          crossOrigin="anonymous"
        ></script>

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/newicon.png" />
        <link rel="shortcut icon" href="/newicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/newicon.png" />
      </head>
      <body className={`${inter.variable} ${notoSansArabic.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
