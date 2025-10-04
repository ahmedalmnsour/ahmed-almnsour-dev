import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; // 1. استيراد المكون الجديد
import FeaturedProject from '@/components/FeaturedProject';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="main-content">
      <HeroSection />
      <AboutSection /> {/* 2. إضافته هنا في الترتيب الصحيح */}
      <FeaturedProject />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}