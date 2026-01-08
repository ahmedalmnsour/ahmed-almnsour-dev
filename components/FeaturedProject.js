"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject() {
  const projectUrl = '/images/gold-ai-full.webp'; 

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>

        {/* --- الرأس الموحد --- */}
        <div className={styles.header}>
          <h2 className={styles.title}>
              آخر مشاريعي <span className={styles.subtitle}>(Featured Work)</span>
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            نظرة على أحدث ما قمت ببنائه وتطبيق المهارات التقنية.
          </p>
        </div>

        {/* --- البطاقة --- */}
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            
            {/* العمود الأول: الصورة */}
            <div className={styles.imageColumn}>
              <Image 
                  src="/images/gold-ai-thumb.webp"
                  alt="واجهة لوحة تحكم العقل الذهبي"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
               <span className={styles.badge}>
                 Live System 🟢
               </span>
            </div>

            {/* العمود الثاني: المحتوى */}
            <div className={styles.contentColumn}>
              
              <h3 className={styles.projectTitle}>
                منصة "تداول الذهب" (Gold-AI-Core)
              </h3>

              <p className={styles.projectDescription}>
                نظام تداول خوارزمي مستقل لسوق الذهب (XAUUSD). يعتمد النظام في جوهره على <strong>نموذج خاص (Proprietary Model)</strong> خضع لعملية ضبط دقيق (Fine-Tuning) باستخدام بيانات تاريخية تمتد لأكثر من <strong>16 عاماً</strong>.
                <br /><br />
                يعمل هذا النموذج ضمن منظومة <strong>"مجلس مستشارين"</strong> تضم 4 نماذج عالمية لتطبيق آلية الإجماع.
              </p>
              
              {/* التقنيات (Badges) */}
              <div className={styles.techStack}>
                 {['Next.js', 'React', 'Firebase Functions', 'Fine-Tuned LLMs'].map(tech => (
                   <span key={tech} className={styles.techBadge}>
                     {tech}
                   </span>
                 ))}
              </div>

              {/* الأزرار */}
              <div className={styles.actions}>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                   معاينة هيكل النظام (صورة)
                </a>

                {/* 👇 التعديل هنا: إضافة prefetch={false} */}
                <Link href="/projects" className={styles.viewAllLink} prefetch={false}>
                   تصفح كل المشاريع &larr;
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}