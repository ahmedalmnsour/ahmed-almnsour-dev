'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProject from '@/components/FeaturedProject';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import FeaturedArticle from '@/components/FeaturedArticle';

export default function Home() {


useEffect(() => {

    const asciiArt = `
     _    _   _ __  __ _____ ____  
    / \\  | | | |  \\/  | ____|  _ \\
   / _ \\ | |_| | |\\/| |  _| | | | |
  / ___ \\|  _  | |  | | |___| |_| |
 /_/   \\_\\_| |_|_|  |_|_____|____/
     _    _     __  __ _   _ ____   ___  _   _ ____  
    / \\  | |   |  \\/  | \\ | / ___| / _ \\| | | |  _ \\
   / _ \\ | |   | |\\/| |  \\| \\___ \\| | | | | | | |_) |
  / ___ \\| |___| |  | | |\\  |___) | |_| | |_| |  _ <
 /_/   \\_\\_____|_|  |_|_| \\_|____/ \\___/ \\___/|_| \\_\\
    `;

    console.log(
      `%c${asciiArt}`,
      `color: #000000; font-weight: bold; font-family: monospace; font-size: 12px;`
    );

    console.log(
      '%c ☕ Turning Coffee into Code... ',
      'color: #000000; background: #ffffff; font-family: monospace; font-size: 14px; font-weight: bold; padding: 5px; border: 1px solid #000; border-radius: 4px;'
    );

    if (typeof window !== 'undefined') {
     

      window.Ahmed = {
        about: "Full-Stack Developer specializing in FinTech & AI.",
        skills: ["Next.js", "React", "Node.js", "Firebase", "AI Integration", "Trading Algorithms"],
        contact: {
          email: "almnsour.ahmed@gmail.com",
          github: "https://github.com/ahmedalmnsour",
          //linkedin: "https://www.linkedin.com/in/ahmedalmnsour/"
        },
 
        hireMe: function() {
          console.log("%c Thanks for your interest! Let's build something great together.", "color: #4caf50; font-size: 14px; font-weight: bold;");
          console.log("📧 Please email me at: " + this.contact.email);
          return "Waiting for your email...";
        }
      };

 
      console.log(
        '%c 💡 Hint: Type "Ahmed" or "Ahmed.skills" below to interact with my portfolio object!',
        'color: #555; font-style: italic; font-size: 11px; margin-top: 5px;'
      );
    }

  }, []);

  return (
    <main className="main-content">
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <SkillsSection />
      <FeaturedArticle />
      <ContactSection />
    </main>
  );
}