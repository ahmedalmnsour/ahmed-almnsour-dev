import Link from 'next/link';
import Image from 'next/image';
import { articlesData } from '@/data/articles';
import styles from './FeaturedArticle.module.css';

export default function FeaturedArticle() {
  
  const featuredPosts = [...articlesData].sort((a, b) => b.id - a.id).slice(0, 2);

  return (
    <section id="articles" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
              المعمل
          </h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          
          {featuredPosts.map((post) => (
            <div key={post.id} className={styles.card}>
              
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
             تصفح الأرشيف الكامل للمقالات ←
           </Link>
        </div>

      </div>
    </section>
  );
}