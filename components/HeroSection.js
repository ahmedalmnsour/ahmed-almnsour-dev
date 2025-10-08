import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    // لاحظ كيف أن لدينا الآن div واحد فقط وهو الذي يحمل الـ id والكلاس معًا
    <div id="home" className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      <p className={styles.subtitle}>مُطوِّر برمجيات</p>
      <p className={styles.slogan}><strong> أُحَوِّل القهوةَ إلى كود ☕</strong></p>
    </div>
  );
}