import React from 'react';
import styles from './SkillsSection.module.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Material Design'
];

export default function SkillsSection() {
  return (
    // تمت إضافة id="skills" هنا
    <section id="skills" className={styles.sectionContainer}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.sectionTitle}>المهارات التقنية</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillBadge}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}