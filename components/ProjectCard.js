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

        // 1. نحدد تاريخ إطلاق ثابت للمشروع (يمكنك تغييره)
        // الصيغة: السنة، الشهر (يبدأ من 0)، اليوم
        const launchDate = new Date(2025, 9, 9); // 9 أكتوبر 2025

        const now = new Date();
        const timeElapsedInHours = (now.getTime() - launchDate.getTime()) / (1000 * 60 * 60);

        if (timeElapsedInHours < 0) return baseString; // إذا كان تاريخ الإطلاق في المستقبل

        // 2. نحسب كم مرة حدثت الزيادة
        const increments = Math.floor(timeElapsedInHours / hoursPerIncrement);

        const finalCount = baseNumber + increments;
        
        return finalCount.toLocaleString('en-US');
      };

      // 3. نطبق المعادلة: المشاهدات تزيد 1 كل ساعتين، والتحميلات تزيد 1 كل 5 ساعات
      setDisplayViews(calculateDynamicCount(project.views, 2));
      setDisplayDownloads(calculateDynamicCount(project.downloads, 5));
    }
    // --- هذا هو السطر الذي تم تصحيحه ---
  }, [project.category, project.views, project.downloads]);

  // ... (بقية كود العرض يبقى كما هو بدون تغيير) ...

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

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.codeCard}>
      <div className={styles.rectangularImageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}