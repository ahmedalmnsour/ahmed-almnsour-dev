import React from 'react';
import styles from './HeroSection.module.css';
import { FaCode } from 'react-icons/fa';

export default function HeroSection() {
  return (
    // 1. إضافة لون خلفية صريح هنا ليراه WAVE ويحسب التباين بشكل صحيح
    <div id="home" className={styles.heroContainer} style={{ backgroundColor: '#171923' }}>
      
      {/* الاسم هو العنوان الرئيسي */}
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      
      {/* 2. تغيير المسمى الوظيفي إلى H2 (لإصلاح تنبيه العنوان المحتمل) */}
      <h2 className={styles.subtitle} style={{ color: '#E2E8F0', fontSize: '1.5rem', fontWeight: 'normal' }}>
        مُطوِّر برمجيات
      </h2>

      {/* 3. الشعار يكون H3 (تسلسل منطقي) مع الحفاظ على التنسيق */}
      <h3 className={styles.slogan} style={{ color: '#CBD5E0', fontWeight: 'normal', fontSize: '1.2rem' }}>
        <strong>
          أُحَوِّل القهوةَ ☕ إلى كود{' '}
          <FaCode style={{ verticalAlign: 'middle' }} />
        </strong>
      </h3>
      
    </div>
  );
}