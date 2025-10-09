import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {

  // إذا كان المشروع من نوع "تصميم"، اعرض التصميم الدائري
  if (project.category === 'design') {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.designCard}>
        <div className={styles.cardHeader}>
          <h3>{project.title}</h3>
          <span>{project.type}</span>
        </div>
        <div className={styles.circularImageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
          />
        </div>
        <div className={styles.cardFooter}>
          <span>التحميلات: {project.downloads}</span>
          <span>المشاهدات: {project.views}</span>
        </div>
      </a>
    );
  }

  // وإلا (إذا كان المشروع من نوع "برمجي")، اعرض التصميم المستطيل
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.codeCard}>
      <div className={styles.rectangularImageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}