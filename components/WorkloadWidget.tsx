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
  progress: number;
  type: 'private' | 'internal';
}

export default function WorkloadWidget() {
  const [isLoaded, setIsLoaded] = useState(false);

  const maxCapacity = 160;
  const bookedHours = 152;
  const nextAvailableDate = "11 أكتوبر 2026";

  const systemStatus: SystemStatus = bookedHours < 135
    ? { text: "مستقر — متاح للحجوزات", color: "#48BB78" }
    : bookedHours < 150
      ? { text: "ضغط متوسط — نوافذ محدودة", color: "#ECC94B" }
      : { text: "مغلق للحجوزات الجديدة", color: "#F56565" };

  const activeQueue: QueueProject[] = [
    { id: 1, name: "🔒 مشروع خاص (NDA)", progress: 70, type: "private" },
    { id: 3, name: "منصة اختبارات الثانوية", progress: 30, type: "internal" },
    { id: 4, name: "Arabic PDF Tool", progress: 15, type: "internal" },
    { id: 5, name: "الجدول الذكي (Smart Scheduler)", progress: 5, type: "internal" },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.widgetContainer}>
      
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

      <div className={styles.alertBox}>
        <p>
          ⚠️ <strong>تنويه:</strong> لا أقبل أي مشروع جديد يتطلب أكثر من 15 ساعة،
          لأنني مرتبط بأعمال دعم فني وإدارة سيرفرات.
          <strong> المشاريع الكبيرة أقبلها بعد أكتوبر 2026.</strong>
        </p>
      </div>

      <div className={styles.queueSection}>
        <h4>🚀 تجري المعالجة (In Progress):</h4>
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
      </div>

    </div>
  );
}