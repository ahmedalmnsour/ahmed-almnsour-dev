import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { articlesData } from '@/data/articles';
import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';
import styles from './article.module.css';
import PrismLoader from '@/components/PrismLoader';

const siteUrl = 'https://ahmed.almnsour.net';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = articlesData.find((p) => p.id.toString() === id);
  if (!article) return { title: 'المقال غير موجود' };

  let ogImageUrl: string | undefined;

  if (article.image) {
    const cleanPath = article.image.startsWith('/') ? article.image : `/${article.image}`;
    ogImageUrl = `${siteUrl}${cleanPath}`;
  } else if (article.videoId) {
    ogImageUrl = `https://i.ytimg.com/vi/${article.videoId}/maxresdefault.jpg`;
  }

  return {
    title: article.title,
    description: article.excerpt,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/articles/${id}`,
      siteName: 'Ahmed Almnsour - Software Developer',
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = articlesData.find((p) => p.id.toString() === id);
  if (!article) notFound();

  const hasVideo = article.content.includes('[[VIDEO_PLACEHOLDER]]') && article.videoId;
  let contentParts: string[] = [article.content];
  if (hasVideo) {
    contentParts = article.content.split('[[VIDEO_PLACEHOLDER]]');
  }

  let schemaImage: string | undefined = article.image;
  if (schemaImage && !schemaImage.startsWith('http')) {
    schemaImage = `${siteUrl}${schemaImage.startsWith('/') ? schemaImage : '/' + schemaImage}`;
  } else if (article.videoId) {
    schemaImage = `https://i.ytimg.com/vi/${article.videoId}/maxresdefault.jpg`;
  }

  interface JsonLd {
    '@context': string;
    '@type': string;
    headline: string;
    description: string;
    image: string[];
    author: {
      '@type': string;
      name: string;
      url: string;
    };
    mainEntityOfPage: {
      '@type': string;
      '@id': string;
    };
    video?: {
      '@type': string;
      name: string;
      description: string;
      thumbnailUrl: string;
      uploadDate: string;
      contentUrl: string;
      embedUrl: string;
    };
  }

  const jsonLd: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: schemaImage ? [schemaImage] : [],
    author: {
      '@type': 'Person',
      name: 'Ahmed Almnsour',
      url: siteUrl
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/articles/${id}`,
    },
  };

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
    <main className={styles.main}>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.headerContainer}>
        {article.image && (
            <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            sizes="100vw"
            className={styles.headerImage}
            priority
          />
        )}
        <div className={styles.headerOverlay}>
        <div className={styles.headerContent}>
          <span className={styles.categoryLabel}>
            {article.categoryLabel}
          </span>
          <h1 className={styles.title}>{article.title}</h1>
          {article.date && (
            <div className={styles.date}>
              📅 {article.date}
            </div>
          )}
        </div>
      </div>
      </div>

      <article className={styles.articleBox}>
        
        {!hasVideo ? (
           <div className={styles.contentBody} dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <>
            <div className={styles.contentBody} dangerouslySetInnerHTML={{ __html: contentParts[0] }} />
            <VideoPlayer 
                videoId={article.videoId!} 
                title={article.videoTitle || article.title} 
            />
            <div className={styles.contentBody} dangerouslySetInnerHTML={{ __html: contentParts[1] }} />
          </>
        )}

        <div className={styles.footerLinkWrapper}>
           <Link href="/articles" className={styles.backLink} prefetch={false}>
             <span>&larr;</span> العودة للأرشيف الكامل
           </Link>
        </div>

      </article>

      <PrismLoader />

    </main>
  );
}