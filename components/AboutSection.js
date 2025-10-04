import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.sectionTitle}>نبذة عني</h2>
        <p className={styles.aboutText}>
          أنا مطور متخصص بشكل أساسي في الواجهة الأمامية (Frontend) باستخدام JavaScript, React, و Next.js، مع شغف لبناء واجهات مستخدم نظيفة وتفاعلية. بالإضافة إلى ذلك، لدي خبرة عملية ومعرفة جيدة في بناء الواجهات الخلفية (Backend) باستخدام PHP و Python، مما يمنحني القدرة على فهم وتنفيذ المشاريع من الألف إلى الياء.
          <br /><br />
          <strong>أنا أحول القهوة إلى كود ☕</strong>
        </p>
      </div>
    </section>
  );
}