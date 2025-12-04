import React from 'react';
import Link from 'next/link'; // استيراد Link للتنقل السريع
import styles from './students.module.css';

// 1. تحديث القائمة لإضافة الملف الجديد
const memos = [
  {
    title: 'تحميل مذكرة الفصل الدراسي الأول',
    filename: 'notebook.pdf'
  },
  {
    title: 'تحميل ملف العلاقات بين الجمل', 
    filename: 'relations.pdf'
  }
];

export default function StudentsPage() {
  return (
    <main className="main-content">
      <section className={styles.studentsSection}>
        <div className={styles.header}>
          <h1>صفحة الطلاب</h1>
          <p>المذكرة لا تغنيك عن الكتاب المدرسي</p>
        </div>

        {/* 2. أزرار التحميل */}
        <div className={styles.downloadLinks}>
          {memos.map((memo, index) => (
            <a 
              key={index} 
              href={`/files/${memo.filename}`} 
              download 
              className={styles.downloadButton}
            >
              {memo.title}
            </a>
          ))}
        </div>

        {/* 3. زر العودة للصفحة الرئيسية (كبير ومميز) */}
        <div style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #2D3748', paddingTop: '30px' }}>
          <Link 
            href="/" 
            style={{
              display: 'inline-block',
              padding: '15px 50px', // حجم أكبر للحشوة
              backgroundColor: 'transparent', 
              color: '#63B3ED', // لون أزرق مميز
              border: '2px solid #63B3ED',
              textDecoration: 'none',
              borderRadius: '50px', // حواف دائرية بالكامل
              fontWeight: 'bold',
              fontSize: '1.2rem', // خط أكبر
              transition: 'all 0.3s ease'
            }}
          >
            🏠 العودة للصفحة الرئيسية
          </Link>
        </div>

      </section>
    </main>
  );
}