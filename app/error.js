"use client";

import Link from 'next/link';
import styles from './error.module.css';

export default function Error({ error, reset }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <span className="material-symbols-outlined" style={{ fontSize: '60px' }}>
          bug_report
        </span>
      </div>

      <h1 className={styles.title}>500: خطأ في النظام</h1>

      {/* تم إزالة علامات التنصيص من حول كلمة bug هنا */}
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