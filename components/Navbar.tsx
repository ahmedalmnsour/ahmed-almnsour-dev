"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <CloseIcon /> 
          ) : (
            <MenuIcon />
          )}
        </button>
      
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/#home" onClick={() => setIsMenuOpen(false)} prefetch={false}>الرئيسية</Link></li>
            <li className={styles.navItem}><Link href="/#about" onClick={() => setIsMenuOpen(false)} prefetch={false}>نبذة عني</Link></li>
            <li className={styles.navItem}><Link href="/#projects" onClick={() => setIsMenuOpen(false)} prefetch={false}>أعمالي</Link></li>
            <li className={styles.navItem}><Link href="/#skills" onClick={() => setIsMenuOpen(false)} prefetch={false}>المهارات</Link></li>
            <li className={styles.navItem}><Link href="/#articles" onClick={() => setIsMenuOpen(false)} prefetch={false}>المعمل</Link></li>
            <li className={styles.navItem}><Link href="/#contact" onClick={() => setIsMenuOpen(false)} prefetch={false}>لنتحدث</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}