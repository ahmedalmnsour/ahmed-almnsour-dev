"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from '@/data/articles'; 
import styles from './FeaturedArticle.module.css';

export default function FeaturedArticle() {
  
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
    <section id="articles" className={styles.section}>
      <div className={styles.container}>
        
        {/* --- الرأس --- */}
        <div className={styles.header}>
          <h2 className={styles.title}>
              ما وراء الكود <span className={styles.subtitle}>(Behind the Code)</span>
          </h2>
          <div className={styles.underline}></div>
        </div>

        {/* --- الشبكة (Grid) --- */}
        <div className={styles.grid}>
          
          {featuredPosts.map((post) => (
            <div key={post.id} className={styles.card}>
              
              {/* الصورة */}
              <div className={styles.imageWrapper}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                 <span className={styles.badge}>
                   {post.categoryLabel}
                 </span>
              </div>

              {/* المحتوى */}
              <div className={styles.content}>
                
                <h3 className={styles.cardTitle}>
                  {post.title}
                </h3>

                <p className={styles.excerpt}>
                  {post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}
                </p>

                <div className={styles.cardFooter}>

                  <Link href={`/articles/${post.id}`} className={styles.readMoreBtn} prefetch={false}>
                      اقرأ المزيد
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
        <div className={styles.archiveWrapper}>
           <Link href="/articles" className={styles.archiveLink} prefetch={false}>
             تصفح الأرشيف الكامل للمقالات &larr;
           </Link>
        </div>

      </div>
    </section>
  );
}