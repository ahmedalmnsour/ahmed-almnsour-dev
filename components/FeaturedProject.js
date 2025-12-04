"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProject() {
  const projectUrl = '/images/gold-ai-full.webp'; 

  return (
    <section id="project" style={{ padding: '4rem 2rem', backgroundColor: '#171923', borderTop: '1px solid #2D3748' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* --- الرأس الموحد (نفس تنسيق المقالات) --- */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#E2E8F0', margin: 0, fontWeight: 'bold' }}>
             آخر مشاريعي (Featured Work)
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#3182CE', margin: '15px auto 0', borderRadius: '2px' }}></div>
          <p style={{ color: '#A0AEC0', marginTop: '15px' }}>
            نظرة على أحدث ما قمت ببنائه وتطبيق المهارات التقنية.
          </p>
        </div>

        {/* --- البطاقة الموحدة --- */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            backgroundColor: '#171923',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #4A5568',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          
          {/* العمود الأول: الصورة (مطابقة للمقالات) */}
          <div style={{ position: 'relative', minHeight: '350px' }}>
            <Image 
              src="/images/gold-ai-thumb.webp"
              alt="واجهة لوحة تحكم العقل الذهبي"
              fill
              style={{ objectFit: 'cover' }}
            />
             {/* شارة مميزة للمشروع */}
             <span style={{ 
               position: 'absolute', top: '20px', right: '20px', 
               background: 'rgba(0,0,0,0.7)', color: '#48BB78', 
               padding: '6px 12px', borderRadius: '20px', 
               fontSize: '0.9rem', backdropFilter: 'blur(5px)', border: '1px solid #48BB78'
             }}>
               Live System 🟢
             </span>
          </div>

          {/* العمود الثاني: المحتوى */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.3' }}>
              منصة "تداول الذهب" (Gold-AI-Core)
            </h3>

            <p style={{ color: '#CBD5E0', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.05rem' }}>
              نظام تداول خوارزمي مستقل لسوق الذهب (XAUUSD). يعتمد النظام في جوهره على <strong>نموذج خاص (Proprietary Model)</strong> خضع لعملية ضبط دقيق (Fine-Tuning) باستخدام بيانات تاريخية تمتد لأكثر من <strong>16 عاماً</strong>.
              <br /><br />
              يعمل هذا النموذج ضمن منظومة <strong>"مجلس مستشارين"</strong> تضم 4 نماذج عالمية لتطبيق آلية الإجماع.
            </p>
            
            {/* التقنيات (Badges) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2.5rem' }}>
               {['Next.js', 'React', 'Firebase Functions', 'Fine-Tuned LLMs'].map(tech => (
                 <span key={tech} style={{ background: '#1A202C', color: '#A0AEC0', padding: '5px 12px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid #4A5568' }}>
                   {tech}
                 </span>
               ))}
            </div>

            {/* الأزرار (مطابقة لتصميم المقالات) */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ 
                padding: '12px 25px', 
                background: 'linear-gradient(90deg, #3182CE, #63B3ED)', 
                color: 'white', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(49, 130, 206, 0.4)',
                textAlign: 'center'
              }}>
                معاينة هيكل النظام (صورة)
              </a>

              <Link href="/projects" style={{ color: '#A0AEC0', textDecoration: 'underline', fontSize: '1rem' }}>
                تصفح كل المشاريع &larr;
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}