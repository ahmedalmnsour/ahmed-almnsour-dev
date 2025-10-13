"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';

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
    <div className={styles.container}>
      <div className={styles.icon}>
        <span className="material-symbols-outlined" style={{ fontSize: '60px' }}>
          code_off
        </span>
      </div>

      <h1 className={styles.title}>404: null</h1>

      <p className={styles.subtitle}>
        {/* --- تم تصحيح الكلمة هنا --- */}
        يبدو أنك سلكت طريقًا غير موجود في الكود المصدري لهذا الموقع. دعنا نعيدك للصفحة الرئيسية قبل أن تبرد القهوة ☕
      </p>

      <Link href="/" className={styles.homeButton}>
        العودة إلى الصفحة الرئيسية
      </Link>

      <p className={styles.countdownText}>
        سيتم تحويلك تلقائيًا خلال {countdown} ثوانٍ...
      </p>
    </div>
  );
}