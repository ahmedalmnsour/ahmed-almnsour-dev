import React from 'react';
import styles from './SkillsSection.module.css';

const skills = [
  'HTML5 & CSS3',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python (AI)'
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>المهارات التقنية</h2>
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.badge}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}