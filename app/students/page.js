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
          
          {/* ✅ تم دمج الأزرار هنا في حاوية واحدة لتنسيق أفضل */}
          <div className={styles.actions}>
            <a 
              href="/files/first.pdf" 
              download 
              className={styles.primaryButton}
            >
              تحميل الدرس الأول
            </a>

            <a 
              href="/files/second.pdf" 
              download 
              className={styles.primaryButton}
            >
              تحميل الدرس الثاني
            </a>
          </div>
        </div>

        {/* زر العودة للرئيسية */}
        <div className={styles.footer}>
          <Link href="/" className={styles.backButton} prefetch={false}>
            🏠 العودة للرئيسية
          </Link>
        </div>

      </section>
    </main>
  );
}