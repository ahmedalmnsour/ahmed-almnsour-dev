import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject() {
  const projectUrl = 'https://ahmed.almnsour.net'; 

  return (
    <section id="project" className={styles.sectionContainer}>
      <div className={styles.maxWidthWrapper}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            مشروعي المُميّز
          </h2>
          <p className={styles.sectionSubtitle}>
            هذا المشروع يمثل خلاصة خبرتي في تحويل الأفكار إلى حلول برمجية عملية.
          </p>
        </div>

        <div className={styles.gridContainer}>
          
          <div className={styles.textColumn}>
            <h3 style={{ fontSize: '2rem', margin: '0 0 15px 0' }}>منصة زميلي</h3>
            {/* تم التعديل النهائي هنا */}
            <p style={{ lineHeight: '1.8', marginBottom: '30px', color: '#E2E8F0' }}>
              هي ليست مجرد منصة، بل حل هندسي متكامل لأزمة حقيقية في القطاع التعليمي. تم بناء زميلي لمواجهة تحدي إدارة حصص الاحتياط، معتمدًا على منطق برمجي ديناميكي يضمن توزيع الحصص بكفاءة وعدالة.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '15px', marginBottom: '40px' }}>
              <li style={{ backgroundColor: '#1A202C', padding: '5px 15px', borderRadius: '20px' }}>HTML</li>
              <li style={{ backgroundColor: '#1A202C', padding: '5px 15px', borderRadius: '20px' }}>CSS</li>
              <li style={{ backgroundColor: '#1A202C', padding: '5px 15px', borderRadius: '20px' }}>JavaScript</li>
            </ul>
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ backgroundColor: '#007BFF', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', display: 'inline-block' }}
            >
              عرض مباشر للمشروع
            </a>
          </div>

          <div className={styles.imageColumn}>
            <Image 
              src="/images/myzameel-screenshot.png"
              alt="لقطة شاشة لمشروع منصة زميلي"
              width={1200}
              height={800}
              className={styles.projectImage}
            />
          </div>

        </div>
      </div>
    </section>
  );
}