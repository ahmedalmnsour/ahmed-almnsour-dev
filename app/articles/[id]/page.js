import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articlesData } from '@/data/articles';
import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';

// تعريف رابط الموقع
const siteUrl = 'https://ahmed.almnsour.net';

// توليد المسارات الثابتة للمقالات
export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id.toString(),
  }));
}

// --- Metadata (الروابط والمشاركة) ---
export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = articlesData.find((p) => p.id.toString() === id);
  if (!article) return { title: 'المقال غير موجود' };

  // نحدد الصورة: إما المخصصة للمشاركة (JPG) أو صورة المقال العادية
  const imagePath = article.ogImage || article.image;
  let ogImageUrl;

  if (imagePath) {
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    ogImageUrl = `${siteUrl}${cleanPath}`;
  } else if (article.videoId) {
    ogImageUrl = `https://i.ytimg.com/vi/${article.videoId}/maxresdefault.jpg`;
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/articles/${id}`,
      siteName: 'Ahmed Almnsour - Software Developer',
      // إذا وجدت صورة نضعها، وإلا مصفوفة فارغة
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }] : [],
      locale: 'ar_SA',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

// --- مكون الصفحة ---
export default async function ArticlePage({ params }) {
  const { id } = await params;
  const article = articlesData.find((p) => p.id.toString() === id);
  if (!article) notFound();

  // منطق تقسيم المحتوى للفيديو
  const hasVideo = article.content.includes('[[VIDEO_PLACEHOLDER]]') && article.videoId;
  let contentParts = [article.content];
  if (hasVideo) {
    contentParts = article.content.split('[[VIDEO_PLACEHOLDER]]');
  }

  // --- 🧠 إعداد البيانات المنظمة (Schema Markup) ---
  
  // 1. تجهيز رابط الصورة للسكيما
  let schemaImage = article.ogImage || article.image;
  if (schemaImage && !schemaImage.startsWith('http')) {
     schemaImage = `${siteUrl}${schemaImage.startsWith('/') ? schemaImage : '/' + schemaImage}`;
  } else if (article.videoId) {
     schemaImage = `https://i.ytimg.com/vi/${article.videoId}/maxresdefault.jpg`;
  }

  // 2. بناء كائن البيانات (بدون صورة شخصية)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title, // العنوان
    description: article.excerpt,
    image: schemaImage ? [schemaImage] : [], // صورة المقال
    author: {
      '@type': 'Person',
      name: 'Ahmed Almnsour', // اسمك فقط
      url: siteUrl // رابط موقعك
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/articles/${id}`,
    },
  };

  // 3. إضافة بيانات الفيديو إن وجد (لزيادة الظهور في البحث)
  if (article.videoId) {
    jsonLd.video = {
      '@type': 'VideoObject',
      name: article.videoTitle || article.title,
      description: article.excerpt,
      thumbnailUrl: `https://i.ytimg.com/vi/${article.videoId}/maxresdefault.jpg`,
      uploadDate: new Date().toISOString(),
      contentUrl: `https://www.youtube.com/watch?v=${article.videoId}`,
      embedUrl: `https://www.youtube.com/embed/${article.videoId}`,
    };
  }

  return (
    <main className="main-content" style={{ backgroundColor: '#171923', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* حقن البيانات المنظمة لجوجل */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. صورة الغلاف والعنوان (مع التحقق الشرطي) */}
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        {article.image && (
            <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            style={{ objectFit: 'cover', filter: 'brightness(0.4)' }} 
            priority
            />
        )}
        <div style={{ 
          position: 'absolute', bottom: '0', left: '0', width: '100%', 
          padding: '2rem', background: 'linear-gradient(to top, #171923, transparent)' 
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ color: '#63B3ED', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
              {article.categoryLabel}
            </span>
            <h1 style={{ fontSize: '2.5rem', color: 'white', lineHeight: '1.2' }}>{article.title}</h1>
            <div style={{ marginTop: '1rem', color: '#A0AEC0', fontSize: '0.9rem' }}>
              📅 {article.date} | 👁️ {article.baseViews.toLocaleString()} قراءة
            </div>
          </div>
        </div>
      </div>

      {/* 2. المحتوى */}
      <article style={{ 
        maxWidth: '800px', 
        margin: '-50px auto 0', 
        position: 'relative', 
        backgroundColor: '#2D3748', 
        padding: '3rem', 
        borderRadius: '16px', 
        border: '1px solid #4A5568',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        color: '#E2E8F0',
        lineHeight: '1.8',
        fontSize: '1.1rem',
        fontFamily: "'Tajawal', sans-serif"
      }}>
        
        {!hasVideo ? (
           <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: contentParts[0] }} />
            <VideoPlayer 
                videoId={article.videoId} 
                title={article.videoTitle || article.title} 
            />
            <div dangerouslySetInnerHTML={{ __html: contentParts[1] }} />
          </>
        )}

        <div style={{ marginTop: '3rem', borderTop: '1px solid #4A5568', paddingTop: '2rem' }}>
           <Link href="/articles" style={{ color: '#63B3ED', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span>&larr;</span> العودة للأرشيف الكامل
           </Link>
        </div>

      </article>

    </main>
  );
}