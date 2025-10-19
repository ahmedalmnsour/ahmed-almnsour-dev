"use client";

import Link from 'next/link';
import styles from './error.module.css';
// 1. Import the new icon from react-icons/vsc
import { VscBug } from 'react-icons/vsc';

export default function Error({ error, reset }) {
  return (
    <div className={styles.container}>
      {/* 2. Replace <span> with the new icon component */}
      <div className={styles.icon}>
        <VscBug />
      </div>

      <h1 className={styles.title}>500: خطأ في النظام</h1>

      <p className={styles.subtitle}>
        عذرًا، حدث خطأ غير متوقع. يبدو أن هناك bug صغير تسلل إلى الكود بينما كنت أُعد القهوة. لقد تم إبلاغي بالمشكلة تلقائيًا، ويمكنك محاولة تحديث الصفحة أو العودة بأمان إلى الصفحة الرئيسية.
      </p>

      <div className={styles.buttonsContainer}>
        <Link href="/" className={styles.primaryButton}>
          العودة إلى الصفحة الرئيسية
        </Link>
        <button onClick={() => reset()} className={styles.secondaryButton}>
          تحديث الصفحة
        </button>
      </div>
    </div>
  );
}