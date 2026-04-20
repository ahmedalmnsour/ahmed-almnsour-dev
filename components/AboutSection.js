import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>نبذة عني</h2>
        <div className={styles.underline}></div>
        <div className={styles.content}>
          <p>
            أسكن المسافة بين الفصل الدراسي وشاشة الكود، وفي المكانين أكون.<br />

            أبني الواجهات بـ TypeScript مع React وNext.js، وأعتني بتصميمها وفق ما يتطلبه المشروع من CSS. ومن الخلف، أبني الخوادم بـ Node.js، وأوظّف Python كلّما ضاقت المسافة بين الفكرة والتنفيذ.<br />

            حين يلتقي الفصل بالكود، تولد أداة مبتدؤها الحاجة وخبرها الحل.<br />

            في النهاية، التعليم والبرمجة، كلاهما يخدمان شيئاً واحداً، أن يبقى الأثر.
          </p>
        </div>
      </div>
    </section>
  );
}