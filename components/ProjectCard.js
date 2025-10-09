import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    // عند الضغط على البطاقة، يتم فتح الرابط (ملف PDF)
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>

      {/* الجزء العلوي: اسم العمل والنوع */}
      <div className={styles.cardHeader}>
        <h3>{project.title}</h3>
        <span>{project.type}</span>
      </div>

      {/* الجزء الأوسط: الصورة الدائرية */}
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.projectImage}
        />
      </div>

      {/* الجزء السفلي: المشاهدات والتحميلات */}
      <div className={styles.cardFooter}>
        <span>التحميلات: {project.downloads}</span>
        <span>المشاهدات: {project.views}</span>
      </div>

    </a>
  );
}