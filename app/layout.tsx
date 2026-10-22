import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Apex Custom Garage — Dubai',
    template: '%s | Apex Custom Garage',
  },
  description:
    'Elite automotive customization, custom painting, performance accessories, and restomod projects in Dubai. Where Builds Become Legends.',
  keywords: [
    'custom car Dubai',
    'car paint Dubai',
    'automotive customization UAE',
    'car wrap Dubai',
    'restomod UAE',
    'PPF Dubai',
    'ceramic coating Dubai',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    siteName: 'Apex Custom Garage',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-l-snow text-l-text font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
