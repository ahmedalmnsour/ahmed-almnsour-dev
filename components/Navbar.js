"use client"; // هذا المكون أصبح تفاعليًا

import React, { useState } from 'react';
import Link from 'next/link';
// 1. استيراد "Hook" جديد من Next.js لمعرفة المسار الحالي
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. نحصل على المسار الحالي للصفحة (سيكون إما "/" أو "/projects")
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // 3. بناء اسم الكلاس ديناميكيًا لرابط "أعمالي"
  // إذا كنا في صفحة /projects، أضف كلاس "activeLink"
  const projectsLinkClassName = `${styles.navLink} ${pathname === '/projects' ? styles.activeLink : ''}`;

  return (
    <header className={styles.navbar}>
      {/* هذا الرابط دائمًا يعود للرئيسية */}
      <Link href="/#home" className={styles.logo} onClick={handleLinkClick}>
        Ahmed.Almnsour.dev
      </Link>
      
      <nav>
        <ul className={isMenuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
          
          {/* الروابط التالية دائمًا تعود لأقسام الصفحة الرئيسية */}
          <li className={styles.navLink}><Link href="/#home" onClick={handleLinkClick}>الرئيسية</Link></li>
          <li className={styles.navLink}><Link href="/#about" onClick={handleLinkClick}>نبذة عني</Link></li>

          {/* رابط "أعمالي" هو الوحيد الذي يذهب لصفحة مستقلة */}
          <li className={projectsLinkClassName}>
            <Link href="/projects" onClick={handleLinkClick}>أعمالي</Link>
          </li>
          
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