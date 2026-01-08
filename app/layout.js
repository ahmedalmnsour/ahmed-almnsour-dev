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
  title: 'Ahmed Almnsour - Software Developer',
  description: 'The personal portfolio for Ahmed Almnsour.',
  icons: { icon: '/icon.svg' },
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