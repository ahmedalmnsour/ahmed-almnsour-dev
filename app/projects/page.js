"use client";

import React, { useState } from 'react';
import styles from './projects.module.css';
import ProjectCard from '@/components/ProjectCard';

// قائمة بيانات كل مشاريعك
const allProjects = [
  // --- الأعمال البرمجية ---
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
    title: 'كودي - مولد الباركود', 
    description: 'تطبيق ويب لإنشاء وتخصيص رموز QR بشكل فوري وسهل.',
    image: '/images/placeholder.png', // استخدم صورة مؤقتة
    link: '#',
    category: 'code'
  },
  { 
    id: 3, 
    title: 'معرض الأعمال (هذا الموقع)', 
    description: 'قريباً: سأكتب دراسة حالة عن كيفية بناء هذا الموقع باستخدام Next.js.',
    image: '/images/placeholder.png',
    link: '#',
    category: 'code'
  },
  { 
    id: 4, 
    title: 'اختبارات الثانوية التجريبية', 
    description: 'قريباً: منصة تفاعلية لطلاب الثانوية العامة لأداء اختبارات تجريبية.',
    image: '/images/placeholder.png',
    link: '#',
    category: 'code'
  },
  // --- التصاميم ---
  {
    id: 5,
    title: 'أحداث في حياة النبي',
    image: '/images/1.webp',
    link: '/files/1.pdf',
    category: 'design',
    type: 'مطوية',
    views: '1,500',
    downloads: '750'
  },
  {
    id: 6,
    title: 'تصميم إعلان سوشيال ميديا',
    image: '/images/2.webp',
    link: '/files/2.pdf',
    category: 'design',
    type: 'تصميم',
    views: '2,100',
    downloads: '980'
  },
  {
    id: 7,
    title: 'مطوية إرشادية',
    image: '/images/3.webp',
    link: '/files/3.pdf',
    category: 'design',
    type: 'مطوية',
    views: '1,250',
    downloads: '600'
  },
  {
    id: 8,
    title: 'تصميم هوية بصرية',
    image: '/images/4.webp',
    link: '/files/4.pdf',
    category: 'design',
    type: 'هوية بصرية',
    views: '3,500',
    downloads: '1,200'
  },
  {
    id: 9,
    title: 'غلاف كتاب',
    image: '/images/5.webp',
    link: '/files/5.pdf',
    category: 'design',
    type: 'تصميم',
    views: '800',
    downloads: '320'
  },
  {
    id: 10,
    title: 'بطاقة عمل',
    image: '/images/6.webp',
    link: '/files/6.pdf',
    category: 'design',
    type: 'تصميم',
    views: '1,900',
    downloads: '1,150'
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('code'); // البدء بـ "أعمال برمجية" افتراضيًا

  const filteredProjects = allProjects.filter(p => p.category === filter);

  return (
    <main className="main-content">
      <section className={styles.projectsSection}>
        <div className={styles.header}>
          <h1>أعمالي</h1>
          <p>تصفح مجموعة من المشاريع التي قمت بتصميمها وبرمجتها.</p>
        </div>

        <div className={styles.filterButtons}>
          <button onClick={() => setFilter('code')} className={filter === 'code' ? styles.active : ''}>أعمال برمجية</button>
          <button onClick={() => setFilter('design')} className={filter === 'design' ? styles.active : ''}>تصاميم</button>
        </div>

        {/* النص الخاص الذي يظهر مع قسم التصاميم فقط */}
        {filter === 'design' && (
          <div className={styles.designNote}>
            <p>ملاحظة: جميع التصاميم محمية بعلامة مائية. إذا رغبت في استخدام أي من هذه المطويات لعملك الخاص، يرجى التواصل معي لإزالة العلامة المائية.</p>
          </div>
        )}

        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}