import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.sectionTitle}>نبذة عني</h2>
        <p className={styles.aboutText}>
          بين دقّة اللغة ومنطق البرمجة، اكتشفتُ مساري المهني. باعتباري مُعلِّم لغة عربية، أؤمن أن المعرفة تُبنى على الفهم العميق، وباعتباري مُطوِّر أترجم هذا الفهم إلى تجارب رقمية تنطق بالبساطة والوضوح.
          <br /><br />
          أعمل على تطوير واجهات تفاعلية باستخدام JavaScript، React، وNext.js، مع حرصٍ على أن تخدم المستخدم قبل الكود. أما خلف الكواليس، فتمكّنني معرفتي بـ PHP وPython من بناء أنظمة متينة تتحدث بلغة الأداء والكفاءة.
          <br /><br />
          أرى في التعليم والبرمجة وجهين لرسالة واحدة: توصيل المعنى بأفضل صورة ممكنة.
        </p>
      </div>
    </section>
  );
}