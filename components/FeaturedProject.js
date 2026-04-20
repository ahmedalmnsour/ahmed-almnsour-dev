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
              أعمالي
          </h2>
          <div className={styles.underline}></div>
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
                نظام تداول - العقل الذهبي 
              </h3>

              <p className={styles.projectDescription}>
                نظام تداول خوارزمي مستقل لسوق الذهب (XAUUSD)، 
                اختُبر على بيانات تاريخية تمتد لأكثر من <strong>16 عاماً</strong>.
                <br /><br />
                يعتمد على منظومة <strong>"مجلس مستشارين"</strong> تضم أربعة نماذج عالمية؛ 
                GPT, Gemini, Claude, DeepSeek، لكل واحد دور محدد، 
                والقرار النهائي لا يملكه أحد بمفرده.
              </p>
              
              {/* التقنيات (Badges) */}
              <div className={styles.techStack}>
                {['Next.js', 'React',  'Node.js', 'Firestore', 'Firebase Functions'].map(tech => (
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