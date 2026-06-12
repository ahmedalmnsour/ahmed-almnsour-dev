import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './ProjectCard.module.css';

export interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  category: 'design' | 'code';
  type?: string;
  description?: string;
  status?: 'soon' | 'beta' | 'closed' | 'live' | 'research' | 'alpha';
}

interface ProjectCardProps {
  project: Project;
}

function CardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {

  if (project.category === 'design') {
    return (
      <CardLink href={project.link} className={styles.designCard}>
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
      </CardLink>
    );
  }

  return (
    <CardLink href={project.link} className={styles.codeCard}>
      <div className={styles.rectangularImageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.projectImage}
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
            <span className={styles.badgeClosed}>خاص (Private)</span>
          )}
          {project.status === 'research' && (
            <span className={styles.badgeResearch}>قيد التطوير</span>
          )}
          {project.status === 'alpha' && (
            <span className={styles.badgeAlpha}>ألفا (Alpha)</span>
          )}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
      </div>
    </CardLink>
  );
}