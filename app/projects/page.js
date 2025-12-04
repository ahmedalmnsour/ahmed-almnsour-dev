"use client";

import React, { useState } from 'react';
import styles from './projects.module.css';
import ProjectCard from '@/components/ProjectCard';
import WorkloadWidget from '@/components/WorkloadWidget'; // 1. استدعاء المكون الجديد

// --- قائمة المشاريع (محدثة مع الحالات status) ---
// --- قائمة المشاريع (محدثة بصيغة WebP) ---
const allProjects = [
  // 1. مشاريع حية وقوية
  { 
    id: 1, 
    title: 'منصة تداول الذهب (Gold-AI-Core)', 
    description: "نظام تداول خوارزمي مستقل لسوق الذهب، ذكي جداً، يعتمد في قراره على مجلس مستشارين من أفضل نماذج الذكاء الاصطناعي.",
    image: '/images/trade-screenshot.webp', // ✅ تم التحديث
    // ملاحظة: تأكد من طريقة استخدام هذا الرابط، هل هو صورة أم رابط؟
    visit: "/images/gold-ai-full.webp",     
    category: 'code',
    status: 'beta' 
  },
  { 
    id: 2, 
    title: 'منصة زميلي', 
    description: 'حل هندسي متكامل لإدارة حصص الاحتياط في القطاع التعليمي.', 
    image: '/images/myzameel-screenshot.webp', // ✅ تم التحديث
    link: 'https://www.myzameel.com/welcome',
    category: 'code',
    status: 'live' 
  },
  { 
    id: 3, 
    title: 'كودي - مولد الباركود', 
    description: 'تطبيق ويب لإنشاء وتخصيص رموز QR بشكل فوري وسهل.',
    image: '/images/qrcodi.webp', // ✅ تم التحديث
    link: 'https://www.qrcodi.me/',
    category: 'code',
    status: 'live'
  },

  // 2. مشاريع خاصة (Enterprise)
  { 
    id: 4, 
    title: '+40 مشروع خاص (Enterprise)', 
    description: 'مشاريع برمجية خاصة (Private Source) تم تطويرها لشركات وعملاء منذ عام 2008. (حقوق الملكية والنشر محفوظة للعملاء).',
    image: '/images/private.webp', // ✅ تم التحديث
    link: '#', 
    category: 'code',
    status: 'closed' 
  },

  // 3. مشاريع المستقبل
  { 
    id: 5, 
    title: 'المحول العربي (Arabic PDF Master)', 
    description: 'قريباً: الأداة الأولى من نوعها المعتمدة على الذكاء الاصطناعي لتحويل ملفات Word العربية إلى PDF مع الحفاظ على الجداول.',
    image: '/images/pdf-master.webp', // ✅ تم التحديث
    link: '#', 
    category: 'code',
    status: 'soon' 
  },
  { 
    id: 6, 
    title: 'نظام إدارة المدارس السحابي (ERP)', 
    description: 'نظام مؤسسي ضخم (Enterprise) قيد التطوير، يدير شؤون الطلاب، الموارد البشرية، والمالية في منصة سحابية موحدة.',
    image: '/images/school-erp.webp', // ✅ تم التحديث
    link: '#', 
    category: 'code',
    status: 'beta'
  },

  // 4. بقية المشاريع
  { 
    id: 7, 
    title: 'اختبارات الثانوية التجريبية', 
    description: 'قريباً: منصة تفاعلية لطلاب الثانوية العامة لأداء اختبارات تجريبية.',
    image: '/images/quiz.webp', // ✅ تم التحديث
    link: '#',
    category: 'code',
    status: 'soon'
  },
  { 
    id: 8, 
    title: 'معرض الأعمال', 
    description: 'دراسة حالة عن كيفية بناء هذا الموقع باستخدام Next.js.',
    image: '/images/nextjs.webp', // ✅ تم التحديث
    link: 'https://ahmed.almnsour.net/portfolio-story',
    category: 'code',
    status: 'live'
  },
  { 
    id: 9, 
    title: 'عقود الصيانة والدعم (Retainers)', 
    description: 'خدمة إدارة تقنية مستمرة لضمان استقرار المواقع، الحماية من الثغرات، وتحديث الأنظمة لعدد من العملاء الاستراتيجيين.',
    image: '/images/maintenance.webp', // ✅ تم التحديث
    link: 'https://wa.me/96597311821', 
    category: 'code',
    status: 'live'
  },

  // --- التصاميم (كما هي لأنها webp أصلاً) ---
  {
    id: 10,
    title: 'الدولة العباسية الأولى',
    image: '/images/1.webp',
    link: '/files/1.pdf',
    category: 'design',
    type: 'مطوية',
    views: '1,350',
    downloads: '1,000',
  },
  {
    id: 11,
    title: 'الدولة الأموية',
    image: '/images/2.webp',
    link: '/files/2.pdf',
    category: 'design',
    type: 'مطوية',
    views: '2,100',
    downloads: '1,152',
  },
  {
    id: 12,
    title: 'خلافة النبوة',
    image: '/images/3.webp',
    link: '/files/3.pdf',
    category: 'design',
    type: 'مطوية',
    views: '1,250',
    downloads: '1,010',
  },
  {
    id: 13,
    title: 'مشجرة بني أمية',
    image: '/images/4.webp',
    link: '/files/4.pdf',
    category: 'design',
    type: 'مطوية',
    views: '3,230',
    downloads: '1,200'
  },
  {
    id: 14,
    title: 'مشجرة نسب النبي',
    image: '/images/5.webp',
    link: '/files/5.pdf',
    category: 'design',
    type: 'مطوية',
    views: '3,540',
    downloads: '1,350'
  },
  {
    id: 15,
    title: 'أحداث في حياة النبي',
    image: '/images/6.webp',
    link: '/files/6.pdf',
    category: 'design',
    type: 'مطوية',
    views: '2,900',
    downloads: '1,150'
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('code');

  const filteredProjects = allProjects.filter(p => p.category === filter);

  return (
    <main className="main-content">
      <section className={styles.projectsSection}>
        
        {/* العنوان والوصف */}
        <div className={styles.header}>
          <h1>أعمالي ومشاريعي</h1>
          <p>تصفح نخبة من المشاريع البرمجية الحالية، المستقبلية، والخاصة التي قمت بتنفيذها.</p>
        </div>

        {/* 2. إضافة لوحة ضغط العمل هنا لتكون في الواجهة */}
        <WorkloadWidget />

        {/* أزرار الفلترة */}
        <div className={styles.filterButtons}>
          <button onClick={() => setFilter('code')} className={filter === 'code' ? styles.active : ''}>أعمال برمجية</button>
          <button onClick={() => setFilter('design')} className={filter === 'design' ? styles.active : ''}>تصاميم</button>
        </div>

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