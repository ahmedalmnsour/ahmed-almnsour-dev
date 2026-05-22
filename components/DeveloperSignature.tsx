'use client';

import { useEffect, useRef } from 'react';

interface AhmedPortfolio {
  about: string;
  skills: string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  hireMe: () => string;
}

declare global {
  interface Window {
    Ahmed?: AhmedPortfolio;
  }
}

export default function DeveloperSignature() {

  const printedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || printedRef.current) return;

    printedRef.current = true;

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
      `color: #1976D2; font-weight: bold; font-family: monospace; font-size: 10px;`
    );

    window.Ahmed = {
      about: "I build SaaS for Kuwait's education sector. Teacher + developer.",
      skills: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Python",
        "Supabase",
        "Tailwind"
      ],
      
      contact: {
        email: "almnsour.ahmed@gmail.com",
        github: "https://github.com/ahmedalmnsour",
        linkedin: "https://www.linkedin.com/in/ahmedalmnsour/",
      },
      hireMe: function() {
        console.log("%c Thanks for your interest! Let's build something great together.", "color: #4caf50; font-size: 14px; font-weight: bold;");
        console.log("📧 Please email me at: " + this.contact.email);
        console.log("💼 LinkedIn: " + this.contact.linkedin);
        return "Waiting for your email...";
      }
    };

    console.log(
      '%c 💡 Hint: Type "Ahmed" below to interact with my portfolio object!',
      'color: #666; font-style: italic; font-size: 11px; margin-top: 5px;'
    );

  }, []);

  return null;
}