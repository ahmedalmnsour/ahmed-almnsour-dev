"use client";

import React from 'react';
import styles from './ContactSection.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const yourEmail = "almnsour.ahmed@hotmail.com";
  const whatsappUrl = "https://wa.me/96597311821"; 

  return (
    // تمت إضافة id="contact" هنا
    <section id="contact" className={styles.sectionContainer}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.sectionTitle}>لنتحدث!</h2>
        <p className={styles.sectionSubtitle}>
          أنا دائمًا متحمس لمناقشة المشاريع الجديدة أو الأفكار الإبداعية. أفضل طريقة للتواصل معي هي عبر الواتساب أو البريد الإلكتروني.
        </p>
        
        <div className={styles.socialLinks}>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialIcon} 
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a 
            href={`mailto:${yourEmail}`} 
            className={styles.socialIcon} 
            aria-label="Email"
          >
            <span className="material-symbols-outlined">
              mail
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}