// app/robots.ts
import type { MetadataRoute } from 'next';

const isProd = process.env.VERCEL_ENV === 'production';

const AI_BOTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  // Google AI (لا يؤثر على فهرسة بحث جوجل العادي)
  'Google-Extended',
  // DeepSeek
  'DeepSeekBot',
  // أخرى شائعة
  'PerplexityBot',
  'Perplexity-User',
  'CCBot',
  'Bytespider',
  'Meta-ExternalAgent',
  'Applebot-Extended',
  'cohere-ai',
  'mistralai-user',
];

export default function robots(): MetadataRoute.Robots {
  if (!isProd) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, disallow: '/' })),
    ],
    sitemap: 'https://ahmed.almnsour.net/sitemap.xml',
  };
}