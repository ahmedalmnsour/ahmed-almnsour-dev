'use client';

import { useEffect, useRef } from 'react';

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

    console.log(
      '%c ☕ Turning Coffee into Code... ',
      'color: #000; background: #fff; font-family: monospace; font-size: 12px; font-weight: bold; padding: 4px 8px; border: 1px solid #333; border-radius: 4px;'
    );

    window.Ahmed = {
      about: "Full-Stack Developer | Obsessed with Pure CSS & Clean Code.",
      skills: [
        "HTML5 & CSS3",
        "TypeScript",
        "React & Next.js",
        "Node.js",
        "AI Integration"
      ],
      
      contact: {
        email: "almnsour.ahmed@gmail.com",
        github: "https://github.com/ahmedalmnsour",
      },
      hireMe: function() {
        console.log("%c Thanks for your interest! Let's build something great together.", "color: #4caf50; font-size: 14px; font-weight: bold;");
        console.log("📧 Please email me at: " + this.contact.email);
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