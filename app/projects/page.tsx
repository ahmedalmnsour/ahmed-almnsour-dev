"use client";

import { useState } from 'react';
import styles from './projects.module.css';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import WorkloadWidget from '@/components/WorkloadWidget';

const allProjects: Project[] = [

  {
    id: 16,
    title: 'خِطاب (@khitab/core)',
    description: 'مكتبة npm عربية مفتوحة المصدر تقدّم صيغ المخاطبة الصحيحة (مذكّر ومؤنّث ومحايد) لنصوص الواجهات: 1367 عبارة مراجَعة لغوياً، بـTypeScript وصفر تبعيات تشغيل.',
    image: '/images/khitab-cover.webp',
    link: 'https://www.npmjs.com/package/@khitab/core',
    category: 'code',
    status: 'alpha'
  },
  {
    id: 15,
    title: 'نظامي، منصة لإنشاء الجداول',
    description: 'منصة ويب لإنشاء الجداول المدرسية، تتيح للإدارة توزيع الحصص وفق أحدث المعايير والخوارزميات الحديثة.',
    image: '/images/mynizam.webp',
    link: '#',
    category: 'code',
    status: 'soon'
  },
  {
    id: 14,
    title: 'منصة زميلي (v2.0.0)',
    description: 'الإصدار الثاني المكتمل: حل هندسي متكامل لإدارة حصص الاحتياط في القطاع التعليمي بكفاءة عالية.',
    image: '/images/myzameel.2.0.0.webp',
    link: 'https://www.myzameel.com/welcome',
    category: 'code',
    status: 'live'
  },
  {
    id: 13,
    title: 'نظام تداول | العقل الذهبي',
    description: "نظام تداول خاص بسوق الذهب (XAUUSD)، ما زال قيد البحث والتطوير. يعتمد على فكرة الكشّافة والقنّاص ومجلس المستشارين، مع خوارزمية Causal Decision لتقييم الأدوار.",
    image: '/images/trade-screenshot.webp',
    link: "/images/gold-ai-full.webp",
    category: 'code',
    status: 'research'
  },
  {
    id: 12,
    title: 'كودي | مولد الباركود',
    description: 'تطبيق ويب لإنشاء وتخصيص رموز QR بشكل فوري وسهل.',
    image: '/images/qrcodi.webp',
    link: 'https://www.qrcodi.me/',
    category: 'code',
    status: 'live'
  },
  {
    id: 11,
    title: 'اختبارات الثانوية',
    description: 'قريباً: منصة تفاعلية لطلاب الثانوية العامة لأداء اختبارات تجريبية.',
    image: '/images/quiz.webp',
    link: '#',
    category: 'code',
    status: 'soon'
  },
  {
    id: 10,
    title: 'المحول العربي (Arabic PDF Master)',
    description: 'قريباً: الأداة الأولى من نوعها المعتمدة على الذكاء الاصطناعي لتحويل ملفات Word العربية إلى PDF مع الحفاظ على الجداول.',
    image: '/images/pdf-master.webp',
    link: '#',
    category: 'code',
    status: 'soon'
  },
  {
    id: 9,
    title: 'مَعْرِض الأعمال',
    description: 'دراسة حالة عن كيفية بناء هذا الموقع باستخدام Next.js.',
    image: '/images/nextjs.webp',
    link: '/portfolio-story',
    category: 'code',
    status: 'live'
  },
  {
    id: 8,
    title: 'أعمال خاصّة غير معروضة',
    description: 'أعمال برمجيّة مدفوعة نفّذتُها لأفراد وشركات على مدى سنوات، بِيعت بحقوقها الكاملة لأصحابها فلا تُعرَض هنا.',
    image: '/images/private.webp',
    link: '#',
    category: 'code',
    status: 'closed'
  },
  {
    id: 7,
    title: 'عقود الصيانة والدعم',
    description: 'صيانة ودعم تقنيّ مستمر، استقرار المواقع، الحماية من الثغرات عبر التحديثات الدورية، وتحديث الأنظمة بشكلٍ متواصل',
    image: '/images/maintenance.webp',
    link: 'https://wa.me/96597311821',
    category: 'code',
    status: 'live'
  },

  {
    id: 6,
    title: 'الدولة العباسية الأولى',
    image: '/images/1.webp',
    link: 'https://github.com/ahmedalmnsour/ahmed-almnsour-dev/releases/download/files-v1/1.pdf',
    category: 'design',
    type: 'مطوية',
  },
  {
    id: 5,
    title: 'الدولة الأموية',
    image: '/images/2.webp',
    link: 'https://github.com/ahmedalmnsour/ahmed-almnsour-dev/releases/download/files-v1/2.pdf',
    category: 'design',
    type: 'مطوية',
  },
  {
    id: 4,
    title: 'خلافة النبوة',
    image: '/images/3.webp',
    link: 'https://github.com/ahmedalmnsour/ahmed-almnsour-dev/releases/download/files-v1/3.pdf',
    category: 'design',
    type: 'مطوية',
  },
  {
    id: 3,
    title: 'مشجرة بني أمية',
    image: '/images/4.webp',
    link: 'https://github.com/ahmedalmnsour/ahmed-almnsour-dev/releases/download/files-v1/4.pdf',
    category: 'design',
    type: 'مطوية',
  },
  {
    id: 2,
    title: 'مشجرة نسب النبي',
    image: '/images/5.webp',
    link: 'https://github.com/ahmedalmnsour/ahmed-almnsour-dev/releases/download/files-v1/5.pdf',
    category: 'design',
    type: 'مطوية',
  },
  {
    id: 1,
    title: 'أحداث في حياة النبي',
    image: '/images/6.webp',
    link: 'https://github.com/ahmedalmnsour/ahmed-almnsour-dev/releases/download/files-v1/6.pdf',
    category: 'design',
    type: 'مطوية',
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'code' | 'design'>('code');

  const filteredProjects = allProjects
    .filter(p => p.category === filter)
    .sort((a, b) => (filter === 'code' ? b.id - a.id : a.id - b.id));

  return (
    <main className="main-content">
      <section className={styles.projectsSection}>

        <div className={styles.header}>
          <h1 className={styles.title}>أعمالي</h1>
          <p className={styles.subtitle}>هذه مشاريعي، بعضها مفتوح للعرض وبعضها لأصحابها حقوقهم محفوظة.</p>
        </div>

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

        <WorkloadWidget />

      </section>
    </main>
  );
}