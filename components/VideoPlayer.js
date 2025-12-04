// components/VideoPlayer.js
"use client";

import React, { useState } from 'react';

export default function VideoPlayer({ videoId, title, caption }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // نبدأ بمحاولة جلب الصورة عالية الجودة
  const [thumbnailUrl, setThumbnailUrl] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);

  return (
    <div style={{ margin: '30px 0', fontFamily: 'sans-serif' }}>
      
      <div 
        style={{ 
          position: 'relative', 
          paddingBottom: '56.25%', 
          height: 0, 
          overflow: 'hidden', 
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          border: '1px solid #4A5568',
          backgroundColor: '#000'
        }}
      >
        {!isPlaying ? (
          <button 
            onClick={() => setIsPlaying(true)}
            aria-label={`تشغيل الفيديو: ${title}`}
            style={{ 
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
              border: 'none', background: 'none', cursor: 'pointer', padding: 0 
            }}
          >
            {/* 👇 التغيير هنا: عدنا لاستخدام img العادي لتفادي مشاكل الإعدادات */}
            <img 
              src={thumbnailUrl} 
              alt={title} 
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                objectFit: 'cover', filter: 'brightness(0.7)' 
              }}
              onError={() => {
                // إذا فشلت الصورة العالية، نستخدم الصورة القياسية
                setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
              }}
            />

            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '60px', height: '60px', backgroundColor: 'rgba(229, 62, 62, 0.9)', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(229, 62, 62, 0.6)', transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.0)'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            <div style={{
                position: 'absolute', bottom: '20px', right: '20px', left: '20px',
                color: 'white', textAlign: 'right', fontWeight: 'bold', 
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}>
                {title}
            </div>
          </button>
        ) : (
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title={title}
          />
        )}
      </div>

      {caption && (
        <p style={{ 
          marginTop: '10px', fontSize: '0.9rem', color: '#A0AEC0', 
          textAlign: 'center', fontStyle: 'italic' 
        }}>
          💡 {caption}
        </p>
      )}
    </div>
  );
}