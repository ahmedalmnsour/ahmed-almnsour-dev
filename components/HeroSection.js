import React from 'react';
import styles from './HeroSection.module.css';
export default function HeroSection() {
  return (
    <div id="home" className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      <p className={styles.subtitle}>مُطوِّر برمجيات</p>
      <p className={styles.slogan}>
        <strong>
          أُحَوِّل القهوةَ ☕ إلى كود 
          <span className={`material-symbols-outlined ${styles.codeIcon}`}>
            code
          </span>
        </strong>
      </p>
    </div>
  );
}