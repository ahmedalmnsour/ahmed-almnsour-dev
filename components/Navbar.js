"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
// 1. تم استيراد الأيقونات الجديدة من react-icons/hi
import { HiMenu, HiX } from 'react-icons/hi';

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
      <div className={styles.logo}>
      Ahmed.Almnsour.dev
        </div>
     
      <nav>
        <ul className={isMenuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
         
          <li className={styles.navLink}><Link href="/#home" onClick={handleLinkClick}>الرئيسية</Link></li>
          <li className={styles.navLink}><Link href="/#about" onClick={handleLinkClick}>نبذة عني</Link></li>
          <li className={styles.navLink}><Link href="/#project" onClick={handleLinkClick}>أعمالي</Link></li>
          <li className={styles.navLink}><Link href="/#skills" onClick={handleLinkClick}>المهارات</Link></li>
          <li className={styles.navLink}><Link href="/#articles" onClick={handleLinkClick}>المعمل</Link></li>
          <li className={styles.navLink}><Link href="/#contact" onClick={handleLinkClick}>اتصل بي</Link></li>

        </ul>
      </nav>
      {/* 2. تم استبدال الوسم <span> بالأيقونات الجديدة هنا */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </div>
    </header>
  );
}