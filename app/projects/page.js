"use client";

import React, { useState } from 'react';
import styles from './projects.module.css';
import ProjectCard from '@/components/ProjectCard';

const allProjects = [
  { 
    id: 1, 
    title: 'منصة زميلي', 
    description: 'حل هندسي متكامل لإدارة حصص الاحتياط في القطاع التعليمي.', 
    image: '/images/myzameel-screenshot.png',
    link: 'https://www.myzameel.com/',
    category: 'code' // تصنيف المشروع كـ "برمجي"
  },
  {
    id: 2,
    title: 'أحداث في حياة النبي', // اسم المطوية
    description: 'تصميم جرافيكي لمطوية إرشادية تلخص أحداثًا مهمة.',
    image: '/images/1.webp', // صورة المعاينة المربعة
    link: '/files/1.pdf', // ملف الـ PDF الأصلي
    category: 'design', // تصنيف المشروع كـ "تصميم"
    type: 'مطوية', // نوع التصميم
    views: '1,500', // رقم وهمي للمشاهدات
    downloads: '750' // رقم وهمي للتحميلات
  }
  // يمكنك إضافة المزيد من المشاريع هنا بنفس الطريقة
];

export default function ProjectsPage() {
  // ... بقية الكود يبقى كما هو بدون تغيير ...
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <main className="main-content">
      <section className={styles.projectsSection}>
        <div className={styles.header}>
          <h1>أعمالي</h1>
          <p>تصفح مجموعة من المشاريع التي قمت بتصميمها وبرمجتها.</p>
        </div>

        <div className={styles.filterButtons}>
          <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.active : ''}>الكل</button>
          <button onClick={() => setFilter('code')} className={filter === 'code' ? styles.active : ''}>أعمال برمجية</button>
          <button onClick={() => setFilter('design')} className={filter === 'design' ? styles.active : ''}>تصاميم</button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}