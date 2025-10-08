import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

// لاحظ كيف نستقبل "project" بين الأقواس {}. هذه هي الـ "Prop"
// إنها الطريقة التي نمرر بها البيانات من المكون الأب (صفحة المشاريع) إلى المكون الابن (بطاقة المشروع)
export default function ProjectCard({ project }) {
  return (
    // نجعل البطاقة بأكملها رابطًا قابلاً للنقر يفتح في نافذة جديدة
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.projectCard}
    >
      <div className={styles.imageContainer}>
        {/* نستخدم مكون Image المحسّن من Next.js لعرض الصورة */}
        <Image
          src={project.image}
          alt={project.title}
          fill // "fill" تجعل الصورة تملأ الحاوية تلقائيًا بشكل متجاوب
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        {/* نعرض العنوان والوصف من البيانات التي استقبلناها */}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}