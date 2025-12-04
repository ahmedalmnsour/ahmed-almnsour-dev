import { Tajawal } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tajawal',
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
      </head>
      <body className={`${tajawal.className} ${tajawal.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}