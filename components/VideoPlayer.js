"use client";

import React, { useState } from 'react';
import styles from './VideoPlayer.module.css';
import { PlayIcon } from './Icons';

export default function VideoPlayer({ videoId, title, caption }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // نبدأ بمحاولة جلب الصورة عالية الجودة
  const [thumbnailUrl, setThumbnailUrl] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);

  return (
    <div className={styles.container}>
      
      <div className={styles.videoWrapper}>
        {!isPlaying ? (
          <button 
            onClick={() => setIsPlaying(true)}
            aria-label={`تشغيل الفيديو: ${title}`}
            className={styles.thumbnailButton}
          >
            {/* صورة الغلاف */}
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className={styles.thumbnailImage}
              onError={() => {
                // إذا فشلت الصورة العالية، نستخدم الصورة القياسية
                setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
              }}
            />

            {/* زر التشغيل في المنتصف */}
            <div className={styles.playIconWrapper}>
              <PlayIcon className={styles.iconSvg} />
            </div>
            
            {/* عنوان الفيديو */}
            <div className={styles.videoTitle}>
                {title}
            </div>
          </button>
        ) : (
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            className={styles.iframe}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title={title}
          />
        )}
      </div>

      {caption && (
        <p className={styles.caption}>
          💡 {caption}
        </p>
      )}
    </div>
  );
}