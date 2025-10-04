import { Tajawal } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700']
});

export const metadata = {
  title: 'Ahmed.Almnsour.dev',
  description: 'Personal Portfolio',
  viewport: 'width-device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* تم إصلاح الرابط هنا */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className={tajawal.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}