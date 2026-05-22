import styles from './HeroSection.module.css';
import { CodeIcon } from './Icons';

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroContainer}>
      
      <h1 className={styles.mainTitle}>أحمد المنصور</h1>
      
      <h2 className={styles.subtitle}>
         مُعلِّم ومُطوِّر
      </h2>

      <h3 className={styles.slogan}>
      مُعلِّم حتى يتضح المعنى،
      <span className={styles.sloganBreak}>
        {" "}ومُطوِّر حتى تظهر الفكرة.
      </span>
    </h3>
      
    </section>
  );
}