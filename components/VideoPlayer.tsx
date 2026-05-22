"use client";

import { useState } from 'react';
import styles from './VideoPlayer.module.css';
import { PlayIcon } from './Icons';
import Image from 'next/image';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  caption?: string;
}

export default function VideoPlayer({ videoId, title, caption }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
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
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className={styles.thumbnailImage}
              onError={() => {
                setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
              }}
            />

            <div className={styles.playIconWrapper}>
              <PlayIcon className={styles.iconSvg} />
            </div>
            
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