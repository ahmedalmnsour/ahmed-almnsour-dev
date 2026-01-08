import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>نبذة عني</h2>
        
       <div className={styles.content}>
          <p>
            بين دقّة اللغة ومنطق البرمجة، اكتشفتُ مساري المهني. باعتباري مُعلِّم لغة عربية، أؤمن أن المعرفة تُبنى على الفهم العميق، وباعتباري مُطوِّر أترجم هذا الفهم إلى تجارب رقمية تنطق بالبساطة والوضوح.
          </p>
          <p>
            أعمل على تطوير واجهات تفاعلية حديثة باستخدام TypeScript، React، وNext.js، مع شغفٍ بالتصميم النظيف (Pure CSS) الذي يخدم المستخدم. أما خلف الكواليس، فأبني خوادم سريعة باستخدام Node.js، وأوظف Python لدمج تقنيات الذكاء الاصطناعي.
          </p>
          <p>
            أرى في التعليم والبرمجة وجهين لرسالة واحدة: توصيل المعنى بأفضل صورة ممكنة.
          </p>
        </div>
        
      </div>
    </section>
  );
}