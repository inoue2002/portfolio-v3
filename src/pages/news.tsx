import News from 'src/components/News'
import Seo from 'src/components/Seo'
import newsData from 'src/data/news.json'
import type { NewsObj } from 'src/types/news'

const news: NewsObj[] = newsData
  .map((item) => ({ ...item, date: new Date(item.date) }))
  .sort((a, b) => b.date.getTime() - a.date.getTime())

export default function NewsPage() {
  // ニュースページ用の構造化データ
  const newsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'IY Tech ニュース',
    description: 'IY Techの活動やプロジェクトに関する最新情報をお届けします。',
    author: {
      '@type': 'Person',
      name: '井上陽介',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IY Tech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://youkan.me/news/portfolio.webp',
      },
    },
    blogPost: newsData.map((item) => ({
      '@type': 'BlogPosting',
      headline: item.title,
      datePublished: item.date,
      image: `https://youkan.me${item.imageUrl}`,
      url: item.url,
    })),
  }

  return (
    <div>
      <Seo
        pageTitle="ニュース"
        pageDescription="IY Techの活動やプロジェクトに関する最新情報をお届けします。受賞歴やイベント参加など、さまざまな活動をご紹介します。"
        pageKeywords={['ニュース', '受賞歴', 'イベント', 'セミナー']}
        pageType="article"
        structuredData={newsStructuredData}
      />
      <News news={news} />
    </div>
  )
}
