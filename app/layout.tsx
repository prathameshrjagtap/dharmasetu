import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_Devanagari } from 'next/font/google';

import './globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { SITE } from '@/config/site';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),

  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
  },

  description: SITE.description,

  openGraph: {
    siteName: SITE.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansDevanagari.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased font-sans">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}