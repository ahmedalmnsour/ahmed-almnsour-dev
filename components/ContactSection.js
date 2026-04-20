"use client";

import React from 'react';
import styles from './ContactSection.module.css';
import { WhatsappIcon, EnvelopeIcon } from './Icons';

export default function ContactSection() {
  const yourEmail = "almnsour.ahmed@gmail.com";
  const whatsappUrl = "https://wa.me/96597311821";

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>لنتحدث!</h2>
        <div className={styles.underline}></div>
        <p className={styles.subtitle}>
          الباب مفتوح، تواصل معي عبر الواتساب أو البريد الإلكتروني.
        </p>

        <div className={styles.socialLinks}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="WhatsApp"
          >
            <WhatsappIcon />
          </a>
          
          <a
            href={`mailto:${yourEmail}`}
            className={styles.socialIcon}
            aria-label="Email"
          >
            <EnvelopeIcon />
          </a>
        </div>
      </div>
    </section>
  );
}