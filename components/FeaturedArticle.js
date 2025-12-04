"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from '@/data/articles'; 

export default function FeaturedArticle() {
  
  // تحديد المقالين (الذهب + الفيديو)
  const goldArticle = articlesData.find(p => p.id === 1);
  const graphqlArticle = articlesData.find(p => p.id === 2);

  const featuredPosts = [goldArticle, graphqlArticle].filter(Boolean);

  const [viewsMap, setViewsMap] = useState({});

  useEffect(() => {
    const startDate = new Date('2025-11-29T00:00:00'); 
    const now = new Date();
    const timeDiff = now - startDate;
    const daysPassed = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    
    const newViews = {};
    featuredPosts.forEach(post => {
      newViews[post.id] = post.baseViews + (daysPassed * 2);
    });
    
    setViewsMap(newViews);
  }, []);

  return (
    <section id="articles" style={{ padding: '4rem 2rem', backgroundColor: '#171923', borderTop: '1px solid #2D3748' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}> 
        
        {/* --- الرأس --- */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#E2E8F0', margin: 0, fontWeight: 'bold' }}>
             ما وراء الكود <span style={{ fontFamily: 'sans-serif', fontWeight: '300', opacity: 0.8 }}>(Behind the Code)</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#3182CE', margin: '15px auto 0', borderRadius: '2px' }}></div>
        </div>

        {/* --- الشبكة (Grid) --- */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            // 👇 التعديل السحري للتوسيط 👇
            justifyContent: 'center' 
        }}>
          
          {featuredPosts.map((post) => (
            <div key={post.id} style={{ 
                backgroundColor: '#2D3748',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #4A5568',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                // إضافة حد أقصى للعرض لضمان عدم تمدد البطاقة بشكل مبالغ فيه في الشاشات الكبيرة جداً
                maxWidth: '600px',
                margin: '0 auto',
                width: '100%'
            }}>
              
              {/* الصورة */}
              <div style={{ position: 'relative', height: '250px' }}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                 <span style={{ 
                   position: 'absolute', top: '15px', right: '15px', 
                   background: 'rgba(0,0,0,0.8)', color: '#fff', 
                   padding: '6px 12px', borderRadius: '20px', 
                   fontSize: '0.8rem', backdropFilter: 'blur(5px)' 
                 }}>
                   {post.categoryLabel}
                 </span>
              </div>

              {/* المحتوى */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', lineHeight: '1.3', minHeight: '3.9rem' }}>
                  {post.title}
                </h3>

                <p style={{ color: '#CBD5E0', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>
                  {post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <Link href={`/articles/${post.id}`} style={{ 
                    padding: '10px 20px', 
                    background: 'linear-gradient(90deg, #3182CE, #63B3ED)', 
                    color: 'white', 
                    borderRadius: '8px', 
                    textDecoration: 'none', 
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 10px rgba(49, 130, 206, 0.3)'
                  }}>
                    اقرأ المزيد
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
        
        {/* رابط الأرشيف */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
           <Link href="/articles" style={{ color: '#A0AEC0', textDecoration: 'underline', fontSize: '1.1rem' }}>
             تصفح الأرشيف الكامل للمقالات &larr;
           </Link>
        </div>

      </div>
    </section>
  );
}