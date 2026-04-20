"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from '@/data/articles';
import styles from './FeaturedArticle.module.css';

export default function FeaturedArticle() {
  
  const featuredPosts = [...articlesData].sort((a, b) => b.id - a.id).slice(0, 2);

  const [viewsMap, setViewsMap] = useState<Record<number, number>>({});

  useEffect(() => {
    const startDate = new Date('2025-11-29T00:00:00'); 
    const now = new Date();
    const timeDiff = now.getTime() - startDate.getTime();
    const daysPassed = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    
    const newViews: Record<number, number> = {};
    featuredPosts.forEach(post => {
      newViews[post.id] = (post.baseViews ?? 0) + (daysPassed * 2);
    });
    
    setViewsMap(newViews);
  }, []);

  return (
    <section id="articles" className={styles.section}>
      <div className={styles.container}>
        
        {/* --- الرأس --- */}
        <div className={styles.header}>
          <h2 className={styles.title}>
              المعمل
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