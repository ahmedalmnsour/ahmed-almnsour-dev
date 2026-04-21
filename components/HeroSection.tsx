import styles from './HeroSection.module.css';
import { CodeIcon } from './Icons';

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroContainer}>
      
      {/* الاسم (العنوان الرئيسي) */}
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      
      {/* المسمى الوظيفي */}
      <h2 className={styles.subtitle}>
         مُعلِّم ومُطوِّر
      </h2>

      {/* الشعار */}
      <h3 className={styles.slogan}>
      مُعلِّم حتى يتضح المعنى،
      <span className={styles.sloganBreak}>
        {" "}ومُطوِّر حتى تظهر الفكرة.
      </span>
    </h3>
      
    </section>
  );
}