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

export const metadata = {
  metadataBase: new URL('https://ahmed.almnsour.net'),
  title: 'Ahmed Almnsour | Software Developer & Full-Stack Specialist',
  description: 'Explore my professional portfolio built with high-performance Next.js environments and clean, maintainable CSS. Showcasing modern web development skills and creative digital solutions.',
  icons: { icon: '/icon.svg' },
  
  openGraph: {
    title: 'Ahmed Almnsour | Software Developer & Full-Stack Specialist',
    description: 'Explore my professional portfolio built with high-performance Next.js environments and clean, maintainable CSS. Showcasing modern web development skills and creative digital solutions.',
    url: 'https://ahmed.almnsour.net',
    siteName: 'Ahmed Almnsour',
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
    title: 'Ahmed Almnsour | Software Developer & Full-Stack Specialist',
    description: 'Explore my professional portfolio built with high-performance Next.js environments and clean, maintainable CSS.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
};

export const viewport = {
  themeColor: '#171923',
};

export default function RootLayout({ children }) {
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