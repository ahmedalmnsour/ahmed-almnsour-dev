import styles from './SkillsSection.module.css';

const skills: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python'
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>المهارات</h2>
        <div className={styles.underline}></div>
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.badge}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}