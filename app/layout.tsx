import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DeveloperSignature from '@/components/DeveloperSignature';
import './globals.css';

const tajawal = localFont({
  src: [
    { path: '../public/fonts/Tajawal-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Tajawal-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Tajawal-Bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-tajawal',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed.almnsour.net'),
  title: 'أحمد المنصور | مُعلِّم ومُطوِّر',
  description: 'أسكن المسافة بين الفصل الدراسي وشاشة الكود. مُعلِّم حتى يتضح المعنى، ومُطوِّر حتى تظهر الفكرة.',
  icons: { icon: '/icon.svg' },
  
  openGraph: {
    title: 'أحمد المنصور | مُعلِّم ومُطوِّر',
    description: 'أسكن المسافة بين الفصل الدراسي وشاشة الكود. مُعلِّم حتى يتضح المعنى، ومُطوِّر حتى تظهر الفكرة.',
    url: 'https://ahmed.almnsour.net',
    siteName: 'أحمد المنصور',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Almnsour Portfolio Preview',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'أحمد المنصور | مُعلِّم ومُطوِّر',
    description: 'أسكن المسافة بين الفصل الدراسي وشاشة الكود. مُعلِّم حتى يتضح المعنى، ومُطوِّر حتى تظهر الفكرة.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#171923',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.variable}>
        <DeveloperSignature />
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}