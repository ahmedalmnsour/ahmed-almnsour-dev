"use client";

import React, { useState, useEffect } from 'react';
import styles from './WorkloadWidget.module.css';

export default function WorkloadWidget() {
  
  // الحالة المبدئية
  const [activeQueue, setActiveQueue] = useState([]);
  
  // 1. نبدأ من الصفر (0) بدلاً من رقم افتراضي
  const [bookedHours, setBookedHours] = useState(0); 
  
  // 2. الحالة المبدئية رمادية (جاري التحليل)
  const [systemStatus, setSystemStatus] = useState({ text: "جاري تحليل البيانات...", color: "#718096" });

  // 3. حالة للتأكد من التحميل
  const [isLoaded, setIsLoaded] = useState(false);

  const maxCapacity = 160;
  const nextAvailableDate = "15 أبريل 2026"; 

  useEffect(() => {
    const now = new Date();

    // --- حساب الساعات (الدورة الشهرية) ---
    const currentDay = now.getDate(); 
    const baseRetainerHours = 115; 
    const dailyIncrement = currentDay * 1.4; 
    
    const calculatedHours = Math.min(Math.floor(baseRetainerHours + dailyIncrement), 159);
    setBookedHours(calculatedHours);

    // --- تحديد الحالة واللون ---
    let newStatus = {};
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
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const projectProgressIncrement = Math.floor(diffDays / 2);

    const baseProjects = [
      { id: 1, name: "🔒 مشروع خاص (NDA)", baseProgress: 66, type: "private" },
      { id: 2, name: "زميلي v2.0 (MyZameel)", baseProgress: 85, type: "public" },
      { id: 3, name: "منصة اختبارات الثانوية", baseProgress: 27, type: "internal" },
      { id: 4, name: "Arabic PDF Tool", baseProgress: 8, type: "internal" },
    ];

    const updatedQueue = baseProjects.map(p => ({
      ...p,
      progress: Math.min(p.baseProgress + projectProgressIncrement, 100)
    }));

    setActiveQueue(updatedQueue);
    
    // تفعيل الظهور بعد الحساب
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
          ⚠️ <strong>تنويه هام:</strong> نظراً لالتزامي بعقود الصيانة الشهرية ومواعيد التسليم الحالية، 
          <strong> أعتذر عن قبول أي مشاريع برمجية جديدة تتطلب أكثر من 30 ساعة عمل</strong> حالياً. 
          يتم جدولة المشاريع الكبرى (Enterprise) لما بعد أبريل 2026.
        </p>
      </div>

      {/* 3. طابور العمل */}
      <div className={styles.queueSection}>
        <h4>🚀 جاري المعالجة (Live Processing Queue):</h4>
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
          * يتم إعادة ضبط السعة شهرياً بناءً على عقود الصيانة وجداول تطوير المشاريع النشطة.
        </p>
      </div>

    </div>
  );
}