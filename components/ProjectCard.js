"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {

  const [displayViews, setDisplayViews] = useState(project.views);
  const [displayDownloads, setDisplayDownloads] = useState(project.downloads);

  useEffect(() => {
    if (project.category === 'design') {
      
      const calculateDynamicCount = (baseString, hoursPerIncrement) => {
        const baseNumber = parseInt(String(baseString).replace(/,/g, ''), 10);
        if (isNaN(baseNumber)) return baseString;

        // --- المنطق الجديد للزيادة المستمرة ---
        const launchDate = new Date(2025, 9, 9); // 9 أكتوبر 2025
        const now = new Date();
        const timeElapsedInHours = (now.getTime() - launchDate.getTime()) / (1000 * 60 * 60);

        if (timeElapsedInHours < 0) return baseString; 

        const increments = Math.floor(timeElapsedInHours / hoursPerIncrement);
        const finalCount = baseNumber + increments;
        
        return finalCount.toLocaleString('en-US');
      };

      setDisplayViews(calculateDynamicCount(project.views, 2));
      setDisplayDownloads(calculateDynamicCount(project.downloads, 5));
    }
  }, [project.category, project.views, project.downloads]);


  // ---------------------------------------------------------
  // 1. حالة التصاميم (كما هي لم تتغير)
  // ---------------------------------------------------------
  if (project.category === 'design') {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.designCard}>
        <div className={styles.cardHeader}>
          <h3>{project.title}</h3>
          <span>{project.type}</span>
        </div>
        <div className={styles.circularImageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
          />
        </div>
        <div className={styles.cardFooter}>
          <span>التحميلات: {displayDownloads}</span>
          <span>المشاهدات: {displayViews}</span>
        </div>
      </a>
    );
  }

  // ---------------------------------------------------------
  // 2. حالة الأعمال البرمجية (هنا أضفنا السحر ✨)
  // ---------------------------------------------------------
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.codeCard}>
      <div className={styles.rectangularImageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.projectImage}
          // إذا كان المشروع مغلقاً، نجعل الصورة رمادية قليلاً لتعطي انطباع "الأرشيف"
          style={project.status === 'closed' ? { filter: 'grayscale(100%) opacity(0.8)' } : {}}
        />
        
        {/* --- إضافة الشارة فوق الصورة (اختياري) --- */}
        {project.status === 'soon' && (
           <span style={{
             position: 'absolute', top: '10px', left: '10px', 
             backgroundColor: '#D69E2E', color: '#fff', 
             padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 10
           }}>قريباً</span>
        )}
      </div>

      <div className={styles.cardContent}>
        {/* --- منطقة الشارات بجانب العنوان --- */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
            {project.status === 'beta' && (
                <span style={{ backgroundColor: '#3182CE', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem' }}>نسخة تجريبية</span>
            )}
            {project.status === 'closed' && (
                <span style={{ backgroundColor: '#4A5568', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem' }}>مغلق (Enterprise)</span>
            )}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}