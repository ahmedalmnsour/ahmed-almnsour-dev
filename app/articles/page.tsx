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
                اكتفيت في هالمعمل بتوثيق بعض المشاكل اللي واجهتها، وهي خلاصة تجربة شخصية في الميدان.<br />
                 اللي تلقاه هني تجربة في سياقها، مو حكم عام ومو مرجع. وقد أٌُسقِطت وغُيِّرت بعض التفاصيل غير المؤثرة، إما لأنها لا تخدم الفكرة، أو لاعتبارات خصوصية، مع بقاء الفكرة التقنية ومسار التشخيص كما هما، ستجد عامية كويتية أحياناً، هذا متعمد.
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
                {article.date && <span>📅 {article.date}</span>}
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