"use client";

import Image from 'next/image';
import styles from './ProjectCard.module.css';

export interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  category: 'design' | 'code';
  type?: string;
  description?: string;
  status?: 'soon' | 'beta' | 'closed' | 'live';
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {

  // 1. حالة التصاميم (Design)
  if (project.category === 'design') {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.designCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.projectType}>{project.type}</span>
        </div>
        
        <div className={styles.circularImageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100px, 150px"
            className={styles.projectImage}
          />
        </div>
      </a>
    );
  }

  // 2. حالة الأعمال البرمجية (Code)
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.codeCard}>
      <div className={styles.rectangularImageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${styles.projectImage} ...`}
        />
        
        {project.status === 'soon' && (
           <span className={styles.badgeSoon}>قريباً</span>
        )}
      </div>

      <div className={styles.cardContent}>
        <div className={styles.statusWrapper}>
            {project.status === 'beta' && (
                <span className={styles.badgeBeta}>نسخة تجريبية</span>
            )}
            {project.status === 'closed' && (
                <span className={styles.badgeClosed}>مغلق (Enterprise)</span>
            )}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
      </div>
    </a>
  );
}