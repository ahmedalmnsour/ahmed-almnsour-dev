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
    category: 'code'
  },
  { 
    id: 2, 
    title: 'معرض المطويات التفاعلي', 
    description: 'معرض ويب لعرض التصاميم والمطويات مع تأثيرات تفاعلية.',
    image: '/images/placeholder.png',
    link: '#', 
    category: 'code'
  },
  {
    id: 3,
    title: 'تصميم مطوية تعليمية',
    description: 'تصميم جرافيكي لمطوية إرشادية للطلاب.',
    image: '/images/placeholder.png', 
    link: '#', 
    category: 'design'
  }
];

export default function ProjectsPage() {
  // 1. تغيير الحالة الافتراضية إلى 'code' لتبدأ الصفحة بعرض الأعمال البرمجية
  const [filter, setFilter] = useState('code');

  // 2. تبسيط منطق الفلترة لأنه لم يعد لدينا خيار 'all'
  const filteredProjects = allProjects.filter(p => p.category === filter);

  return (
    <main className="main-content">
      <section className={styles.projectsSection}>
        <div className={styles.header}>
          <h1>أعمالي</h1>
          <p>تصفح مجموعة من المشاريع التي قمت بتصميمها وبرمجتها.</p>
        </div>

        <div className={styles.filterButtons}>
          {/* 3. حذف زر 'الكل' */}
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