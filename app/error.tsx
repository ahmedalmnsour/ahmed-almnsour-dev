"use client";

import Link from 'next/link';
import styles from './error.module.css';
import { BugIcon } from '@/components/Icons';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className={styles.container}>
      
      <div className={styles.iconWrapper}>
        <BugIcon />
      </div>

      <h1 className={styles.title}>500: خطأ في النظام</h1>

      <p className={styles.subtitle}>
        عذرًا، حدث خطأ غير متوقع. يبدو أن هناك خطأ تقني (Bug) بسيط ظهر بينما كنت أُعد القهوة. لقد تم إبلاغي بالمشكلة تلقائيًا، ويمكنك محاولة تحديث الصفحة أو العودة بأمان إلى الصفحة الرئيسية.
      </p>

      <div className={styles.buttonsContainer}>
        {/* 👇 التعديل هنا: إضافة prefetch={false} */}
        <Link href="/" className={styles.primaryButton} prefetch={false}>
          العودة إلى الصفحة الرئيسية
        </Link>
        <button onClick={() => reset()} className={styles.secondaryButton}>
          تحديث الصفحة
        </button>
      </div>
    </div>
  );
}