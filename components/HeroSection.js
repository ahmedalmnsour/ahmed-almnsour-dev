import React from 'react';
import styles from './HeroSection.module.css';
import { CodeIcon } from './Icons';

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroContainer}>
      
      {/* الاسم (العنوان الرئيسي) */}
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      
      {/* المسمى الوظيفي */}
      <h2 className={styles.subtitle}>
        مُطوِّر برمجيات
      </h2>

      {/* الشعار */}
      <h3 className={styles.slogan}>
        <strong>
          أُحَوِّل القهوةَ ☕ إلى كود{' '}
          <span className={styles.iconWrapper}>
            <CodeIcon />
          </span>
        </strong>
      </h3>
      
    </section>
  );
}