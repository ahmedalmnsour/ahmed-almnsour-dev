import React from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from '@/data/articles';
import styles from './articles.module.css';

export default function ArticlesArchive() {
  
  return (
    <main className={styles.main}>
      
      <div className={styles.header}>
              <h1 className={styles.title}>
                المعمل
              </h1>
              <div className={styles.underline}></div>
              <p className={styles.description}>
                في هذا المعمل بعض المشاكل التي واجهتها، واكتفيت بتوثيق ما يستحق، وهي خلاصة تجربة تتجاوز 15 عاماً. ستجد هنا عامية كويتية أحياناً، هذا متعمد.
              </p>
      </div>

      <div className={styles.grid}>
        
        {[...articlesData].sort((a, b) => b.id - a.id).map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} className={styles.cardLink} prefetch={false}>
            <article className={styles.card}>
              
              {article.image && (
                <div className={styles.imageWrapper}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className={styles.categoryBadge}>
                    {article.categoryLabel}
                  </span>
                </div>
              )}

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>📅 {article.date}</span>
                </div>

                <h3 className={styles.cardTitle}>
                  {article.title}
                </h3>

                <p className={styles.excerpt}>
                  {article.excerpt}
                </p>

                <div className={styles.cardFooter}>
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