'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProject from '@/components/FeaturedProject';
import SkillsSection from '@/components/SkillsSection';
import FeaturedArticle from '@/components/FeaturedArticle';
import ContactSection from '@/components/ContactSection';

export default function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <SkillsSection />
      <FeaturedArticle />
      <ContactSection />
    </>
  );
}