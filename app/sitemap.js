// app/sitemap.js
import { articlesData } from '@/data/articles'

export default function sitemap() {
  const articleUrls = articlesData.map((article) => ({
    url: `https://ahmed.almnsour.net/articles/${article.id}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://ahmed.almnsour.net',
      lastModified: new Date(),
    },
    {
      url: 'https://ahmed.almnsour.net/articles',
      lastModified: new Date(),
    },
    {
      url: 'https://ahmed.almnsour.net/projects',
      lastModified: new Date(),
    },
    ...articleUrls,
  ]
}