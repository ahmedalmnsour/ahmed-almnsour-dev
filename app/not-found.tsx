"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CodeOffIcon } from '@/components/Icons';

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (countdown <= 0) {
      router.push('/');
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="nf-container">
      
      <div className="nf-iconWrapper">
        <CodeOffIcon />
      </div>

      <h1 className="nf-title">404: null</h1>

      <p className="nf-subtitle">
       الصفحة اللي تدور عليها مو موجودة، ثواني وبنردّك للرئيسية.
      </p>

      <Link href="/" className="nf-homeButton" prefetch={false}>
        العودة إلى الصفحة الرئيسية
      </Link>

      <p className="nf-countdownText">
        سيتم تحويلك تلقائيًا خلال {countdown} ثوانٍ...
      </p>
    </div>
  );
}