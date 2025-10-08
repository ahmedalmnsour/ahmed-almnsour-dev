"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      {/* --- هذا هو التعديل الوحيد والمهم --- */}
      {/* تم تغيير الوسم <a> إلى <div> لإلغاء الرابط */}
      <div className={styles.logo}>
        Ahmed.Almnsour.dev
      </div>
      
      <nav>
        <ul className={isMenuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
          <li className={styles.navLink}><a href="#home" onClick={handleLinkClick}>الرئيسية</a></li>
          <li className={styles.navLink}><a href="#about" onClick={handleLinkClick}>نبذة عني</a></li>
          <li className={styles.navLink}><a href="#project" onClick={handleLinkClick}>أعمالي</a></li>
          <li className={styles.navLink}><a href="#skills" onClick={handleLinkClick}>المهارات</a></li>
          <li className={styles.navLink}><a href="#contact" onClick={handleLinkClick}>اتصل بي</a></li>
        </ul>
      </nav>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className="material-symbols-outlined">
          {isMenuOpen ? 'close' : 'menu'}
        </span>
      </div>
    </header>
  );
}