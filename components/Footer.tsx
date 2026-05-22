import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyrightText}>
        كل الحقوق محفوظة | © {currentYear} Ahmed.Almnsour.net
      </p>
    </footer>
  );
}