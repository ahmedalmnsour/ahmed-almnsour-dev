"use client";

import { useState, useEffect } from 'react';
import styles from './WorkloadWidget.module.css';

interface SystemStatus {
  text: string;
  color: string;
}

interface QueueProject {
  id: number;
  name: string;
  baseProgress: number;
  type: 'private' | 'internal';
  progress: number;
}

export default function WorkloadWidget() {
  
  const [activeQueue, setActiveQueue] = useState<QueueProject[]>([]);
  
  const [bookedHours, setBookedHours] = useState(0); 
  
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({ 
    text: "جاري تحليل البيانات...", 
    color: "#718096" 
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const maxCapacity = 160;
  const nextAvailableDate = "11 أكتوبر 2026"; 

  useEffect(() => {
    const now = new Date();

    // --- حساب الساعات (الدورة الشهرية) ---
    const currentDay = now.getDate(); 
    const baseRetainerHours = 115; 
    const dailyIncrement = currentDay * 1.4; 
    
    const calculatedHours = Math.min(Math.floor(baseRetainerHours + dailyIncrement), 159);
    setBookedHours(calculatedHours);

    // --- تحديد الحالة واللون ---
    let newStatus: SystemStatus;
    if (calculatedHours < 135) {
        newStatus = { text: "مستقر (Active Load)", color: "#48BB78" }; // أخضر
    } else if (calculatedHours < 150) {
        newStatus = { text: "ضغط متوسط (Medium Load)", color: "#ECC94B" }; // أصفر
    } else {
        newStatus = { text: "ضغط مرتفع (High Load)", color: "#F56565" }; // أحمر
    }
    setSystemStatus(newStatus);

    // --- حساب نسب المشاريع ---
    const startDate = new Date('2025-11-29T00:00:00'); 
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const projectProgressIncrement = Math.floor(diffDays / 2);

    const baseProjects: Omit<QueueProject, 'progress'>[] = [
      { id: 1, name: "🔒 مشروع خاص (NDA)", baseProgress: 66, type: "private" },
      { id: 3, name: "منصة اختبارات الثانوية", baseProgress: 27, type: "internal" },
      { id: 4, name: "Arabic PDF Tool", baseProgress: 8, type: "internal" },
      { id: 5, name: "الجدول الذكي (Smart Scheduler)", baseProgress: 1, type: "internal" },
    ];

    const updatedQueue: QueueProject[] = baseProjects.map(p => ({
      ...p,
      progress: Math.min(p.baseProgress + projectProgressIncrement, 100)
    }));

    setActiveQueue(updatedQueue);
    
    setIsLoaded(true);

  }, []);

  return (
    <div className={styles.widgetContainer}>
      
      {/* 1. رأس اللوحة */}
      <div className={styles.header}>
        <div className={styles.statusIndicator}>
          <span className={styles.dot} style={{ backgroundColor: systemStatus.color }}></span>
          <span className={styles.statusTextLabel}>
            الحالة: <span className={styles.statusTextValue} style={{ color: systemStatus.color }}>{systemStatus.text}</span>
          </span>
        </div>
        <div className={styles.nextSlot}>
          📅 الحجز للمشاريع الكبيرة: <strong>{nextAvailableDate}</strong>
        </div>
      </div>

      {/* 2. قسم التحذير */}
      <div className={styles.alertBox}>
        <p>
          ⚠️ <strong>تنويه:</strong> لا أقبل أي مشروع جديد يتطلب أكثر من 15 ساعة،
          لأنني مرتبط بأعمال دعم فني وإدارة سيرفرات.
          <strong> المشاريع الكبيرة أقبلها بعد أكتوبر 2026.</strong>
        </p>
      </div>

      {/* 3. طابور العمل */}
      <div className={styles.queueSection}>
        <h4>🚀 جارٍ المعالجة (Live Processing Queue):</h4>
        <div className={styles.queueGrid}>
          {activeQueue.map((project) => (
            <div key={project.id} className={styles.queueItem}>
              <div className={styles.projectInfo}>
                <span className={`${styles.projectName} ${project.type === 'private' ? styles.privateProject : styles.publicProject}`}>
                  {project.name}
                </span>
                <span>{project.progress}%</span>
              </div>
              <div className={styles.progressBarBg}>
                <div 
                  className={styles.progressBarFill} 
                  style={{ 
                    width: isLoaded ? `${project.progress}%` : '0%',
                    background: project.type === 'private' ? '#718096' : 'linear-gradient(90deg, #3182CE, #63B3ED)',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. إحصائية ضغط السيرفر البشري */}
      <div className={styles.capacityBar}>
        <div className={styles.capacityHeader}>
           <span>⚡ ضغط السيرفر البشري</span>
           <span className={styles.capacityPercentage} style={{color: systemStatus.color}}>
             {isLoaded ? Math.round((bookedHours / maxCapacity) * 100) : 0}% مستخدم
           </span>
        </div>
        
        <div className={styles.capacityTrack}>
          <div 
            className={styles.capacityFill} 
            style={{ 
                width: isLoaded ? `${(bookedHours / maxCapacity) * 100}%` : '0%',
                background: bookedHours < 135 
                  ? 'linear-gradient(90deg, #48BB78, #38B2AC)' 
                  : bookedHours < 150 
                    ? 'linear-gradient(90deg, #38B2AC, #ECC94B)' 
                    : 'linear-gradient(90deg, #E53E3E, #F6AD55)',
            }}
          >
            {isLoaded ? `${bookedHours} / ${maxCapacity}` : 'جاري الحساب...'} ساعة محجوزة
          </div>
        </div>
        
        <p className={styles.disclaimer}>
          * تُحدَّث الساعات كل شهر حسب عقود الصيانة والمشاريع.
        </p>
      </div>

    </div>
  );
}