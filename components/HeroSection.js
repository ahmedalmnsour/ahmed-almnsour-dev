import React from 'react';
import styles from './HeroSection.module.css';
// 1. استيراد أيقونة الكود من react-icons/fa
import { FaCode } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div id="home" className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      <p className={styles.subtitle}>مُطوِّر برمجيات</p>
      <p className={styles.slogan}>
        <strong>
          أُحَوِّل القهوةَ ☕ إلى كود{' '} {/* إضافة مسافة صغيرة */}
          {/* 2. استخدام أيقونة الكود الجديدة هنا */}
          <FaCode style={{ verticalAlign: 'middle' }} /> {/* إضافة تنسيق بسيط للمحاذاة */}
        </strong>
      </p>
    </div>
  );
}