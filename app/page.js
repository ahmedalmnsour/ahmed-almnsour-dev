'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const FeaturedProject = dynamic(() => import('@/components/FeaturedProject'));
const SkillsSection = dynamic(() => import('@/components/SkillsSection'));
const FeaturedArticle = dynamic(() => import('@/components/FeaturedArticle'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

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