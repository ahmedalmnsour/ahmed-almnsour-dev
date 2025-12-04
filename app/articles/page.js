"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from '@/data/articles';

export default function ArticlesArchive() {
  
  const [articlesWithViews, setArticlesWithViews] = useState([]);

  useEffect(() => {
    const now = new Date();
    // نحدد تاريخاً مرجعياً لبدء حساب "الزيادة الإضافية"
    // سنجعله 1 نوفمبر 2025، لكي يكون هناك أيام محسوبة بالفعل
    const simulationStartDate = new Date('2025-11-01'); 
    const daysPassed = Math.floor((now - simulationStartDate) / (1000 * 60 * 60 * 24));

    const calculatedArticles = articlesData.map((article, index) => {
      let additionalViews = 0;

      // --- 🧠 الخوارزمية الذكية لتنويع المشاهدات ---
      
      // الحالة 1: المقالات "الساخنة" (كل ثالث مقال) -> تزيد ببطء لتبدو مستقرة
      if (article.id % 3 === 0) {
         additionalViews = Math.floor(daysPassed / 3); // قراءة كل 3 أيام
      } 
      // الحالة 2: المقالات الزوجية -> نمو متوسط
      else if (article.id % 2 === 0) {
         additionalViews = daysPassed * 1; // قراءة يومياً
      } 
      // الحالة 3: المقالات الفردية (والأهم) -> نمو سريع
      else {
         additionalViews = daysPassed * 2; // قراءتين يومياً
      }

      return {
        ...article,
        liveViews: article.baseViews + additionalViews
      };
    });

    setArticlesWithViews(calculatedArticles);
  }, []);

  return (
    <main className="main-content" style={{ backgroundColor: '#171923', minHeight: '100vh', padding: '4rem 1.5rem' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto 4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#E2E8F0', marginBottom: '1rem', lineHeight: '1.3' }}>
  المعمل التقني <span style={{ whiteSpace: 'nowrap', display: 'inline-block', direction: 'ltr' }}>(The Lab)</span>
     </h1>
        <p style={{ fontSize: '1.1rem', color: '#A0AEC0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          أرشيف كامل للدراسات التقنية، حلول المشاكل البرمجية المعقدة، وأفضل الممارسات التي اكتسبتها خلال 16 عاماً.
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem',
        justifyContent: 'center'
      }}>
        
        {(articlesWithViews.length > 0 ? articlesWithViews : articlesData).map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} style={{ textDecoration: 'none' }}>
            <article style={{ 
              backgroundColor: '#2D3748', 
              borderRadius: '16px', 
              overflow: 'hidden',
              border: '1px solid #4A5568',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = '#63B3ED';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#4A5568';
            }}
            >
              {article.image && (
                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <span style={{ 
                    position: 'absolute', top: '15px', right: '15px', 
                    background: 'rgba(0,0,0,0.8)', color: '#fff', 
                    padding: '4px 10px', borderRadius: '4px', 
                    fontSize: '0.8rem', fontWeight: 'bold' 
                  }}>
                    {article.categoryLabel}
                  </span>
                </div>
              )}

              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#A0AEC0', marginBottom: '1rem' }}>
                  <span>📅 {article.date}</span>
                  <span style={{ color: '#48BB78', fontWeight: 'bold' }}>
                    👁️ {article.liveViews ? article.liveViews.toLocaleString() : article.baseViews.toLocaleString()}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', lineHeight: '1.4' }}>
                  {article.title}
                </h3>

                <p style={{ color: '#CBD5E0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {article.excerpt}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #4A5568', color: '#63B3ED', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  قراءة المزيد &larr;
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}