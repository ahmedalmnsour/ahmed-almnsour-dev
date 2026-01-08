import React from 'react';
import Link from 'next/link'; 
import styles from './students.module.css';

export default function StudentsPage() {
  return (
    <main className="main-content">
      <section className={styles.studentsSection}>
        
        <div className={styles.container}>
          <h1 className={styles.title}>صفحة الطلاب</h1>
          <p className={styles.message}>أرجو لكم التوفيق ❤️</p>
        </div>

        {/* زر العودة للرئيسية */}
        <div className={styles.footer}>
          {/* 👇 التعديل هنا: إضافة prefetch={false} */}
          <Link href="/" className={styles.backButton} prefetch={false}>
            🏠 العودة للرئيسية
          </Link>
        </div>

      </section>
    </main>
  );
}