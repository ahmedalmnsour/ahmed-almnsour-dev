import { Tajawal } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap', // <-- 1. تم إضافة هذا السطر لتحسين تحميل الخط الرئيسي
});

export const metadata = {
  title: 'Ahmed Almnsour - Software Developer',
  description: 'The personal portfolio for Ahmed Almnsour, a software developer specializing in modern web technologies like React and Next.js.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* 2. تم إضافة &display=optional هنا لإصلاح التحذير */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
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