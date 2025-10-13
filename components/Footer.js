import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  // للحصول على السنة الحالية تلقائيًا
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyrightText}>
        © {currentYear} Ahmed.Almnsour.dev | كل الحقوق محفوظة
      </p>
    </footer>
  );
}