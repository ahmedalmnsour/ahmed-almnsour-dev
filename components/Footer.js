import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyrightText} style={{ color: '#E2E8F0' }}>
        © {currentYear} Ahmed.Almnsour.dev | كل الحقوق محفوظة
      </p>
    </footer>
  );
}