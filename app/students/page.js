import React from 'react';
import styles from './students.module.css';

// 1. قائمة المذكرات (اسم العرض، واسم الملف الفعلي في مجلد public/files)
const memos = [
  {
    title: 'تحميل مذكرة القصير الأول',
    filename: 'q1_memo.pdf' // <-- تأكد من مطابقة اسم الملف لديك
  },
  {
    title: 'تحميل مذكرة القصير الثاني',
    filename: 'q2_memo.pdf' // <-- تأكد من مطابقة اسم الملف لديك
  }
  // يمكنك إضافة المزيد من المذكرات هنا بنفس الطريقة
];

export default function StudentsPage() {
  return (
    <main className="main-content">
      <section className={styles.studentsSection}>
        <div className={styles.header}>
          <h1>صفحة الطلاب</h1>
          <p>هنا يمكنك تحميل المذكرات والمواد الدراسية.</p>
        </div>

        {/* 2. استخدام map لإنشاء الأزرار تلقائيًا */}
        <div className={styles.downloadLinks}>
          {memos.map((memo, index) => (
            <a 
              key={index} 
              href={`/files/${memo.filename}`} // الرابط إلى الملف
              download // هذه الخاصية تخبر المتصفح ببدء التحميل
              className={styles.downloadButton}
            >
              {memo.title} {/* النص الذي يظهر على الزر */}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}