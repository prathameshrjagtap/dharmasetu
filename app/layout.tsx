import type { Metadata } from 'next';

import './globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { SITE } from '@/config/site';

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
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}