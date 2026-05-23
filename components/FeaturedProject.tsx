import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject() {
  const projectUrl = '/images/gold-ai-full.webp'; 

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={styles.title}>
              أعمالي
          </h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            
            <div className={styles.imageColumn}>
              <Image 
                  src="/images/gold-ai-thumb.webp"
                  alt="واجهة لوحة تحكم العقل الذهبي"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
               <span className={styles.badgeResearch}>
                قيد التطوير ⚙️
              </span>
            </div>

            <div className={styles.contentColumn}>
              
              <h3 className={styles.projectTitle}>
                نظام تداول - العقل الذهبي 
              </h3>

              <p className={styles.projectDescription}>
                نظام تداول خاص بسوق الذهب (XAUUSD)، ما زال قيد البحث والتطوير.<br />
                يعتمد النظام على فكرة <strong>الكشّافة والقنّاص</strong> و<strong>مجلس المستشارين</strong>،<br /> لكل مستشار
                دور محدّد، ويراقب أداءهم نظام <strong>AdvisorsScoreboard</strong>.<br />
                ما زلت أختبره على بيانات تاريخية <strong>12 عاماً</strong>، قبل الانتقال للتداول الحقيقي.
              </p>
              
              <div className={styles.techStack}>
                {['Next.js', 'React',  'Node.js', 'Firestore', 'Firebase Functions'].map(tech => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.actions}>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                   معاينة هيكل النظام (صورة)
                </a>

                <Link href="/projects" className={styles.viewAllLink} prefetch={false}>
                   تصفح كل المشاريع &larr;
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}