"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
      <Link href="/#home" className={styles.logo} onClick={handleLinkClick}>
        Ahmed.Almnsour.dev
      </Link>
      
      <nav>
        <ul className={isMenuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
          
          <li className={styles.navLink}><Link href="/#home" onClick={handleLinkClick}>الرئيسية</Link></li>
          <li className={styles.navLink}><Link href="/#about" onClick={handleLinkClick}>نبذة عني</Link></li>
          <li className={styles.navLink}><Link href="/#project" onClick={handleLinkClick}>أعمالي</Link></li>
          <li className={styles.navLink}><Link href="/#skills" onClick={handleLinkClick}>المهارات</Link></li>
          <li className={styles.navLink}><Link href="/#contact" onClick={handleLinkClick}>اتصل بي</Link></li>

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