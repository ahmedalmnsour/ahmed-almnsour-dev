// 1. هذا السطر ضروري جداً لتحويل الصفحة إلى Client Component ليعمل الكنسول
'use client';

import { useEffect } from 'react'; // 2. استيراد useEffect
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProject from '@/components/FeaturedProject';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {

  // 3. كود التوقيع الشخصي في الكنسول
  useEffect(() => {
    const asciiName = `
      █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗ 
     ██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗
     ███████║███████║██╔████╔██║█████╗  ██║  ██║
     ██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝ 
    `;

    // طباعة الاسم (أسود على خلفية بيضاء)
    console.log(
      `%c${asciiName}`, 
      `color: #000000; background: #ffffff; font-weight: bold; font-size: 10px; padding: 10px; border: 2px solid #000000;`
    );

    // طباعة العبارة
    console.log(
      '%c ☕ Turning Coffee into Code...', 
      'color: #000000; font-family: monospace; font-size: 14px; font-weight: bold; padding-top: 5px;'
    );
    
    // الرابط
    console.log(
      '%c ahmed.almnsour.net', 
      'color: #555; font-size: 11px; padding-bottom: 10px;'
    );

  }, []);

  return (
    <main className="main-content">
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}