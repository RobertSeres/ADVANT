import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import BackToTop from '@/components/BackToTop';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'ADVANT — Vendéglátóhelyek Digitális Szintemelése',
  description: 'Web-optimalizálás, SEO, prémium vizuális tartalom és AI integráció vendéglátóhelyeknek. Több foglalás, erősebb bizalom, látható növekedés.',
  icons: {
    icon: '/A.png',
    apple: '/A.png',
  },
  openGraph: {
    title: 'ADVANT — Vendéglátóhelyek Digitális Szintemelése',
    description: 'Web-optimalizálás, SEO, prémium vizuális tartalom és AI integráció vendéglátóhelyeknek.',
    images: [{ url: '/A.png', width: 512, height: 512 }],
    type: 'website',
    locale: 'hu_HU',
  },
  twitter: {
    card: 'summary',
    title: 'ADVANT',
    description: 'Vendéglátóhelyek digitális szintemelése.',
    images: ['/A.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
