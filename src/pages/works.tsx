import { SimpleGrid } from '@chakra-ui/react'
import Seo, { SITE_URL } from 'src/components/Seo'
import WorkCard from 'src/components/WorkCard'
import Reveal from 'src/components/top/Reveal'
import SectionShell from 'src/components/top/SectionShell'
import newsData from 'src/data/news.json'
import servicesData from 'src/data/services.json'
import type { NewsObj } from 'src/types/news'

// news と services を統合して表示する（id はファイル間で重複するため services 側をオフセット）
const merged = [
  ...newsData,
  ...servicesData.map((item) => ({ ...item, id: item.id + 100 })),
]

const news: NewsObj[] = merged
  .map((item) => ({ ...item, date: new Date(item.date) }))
  .sort((a, b) => b.date.getTime() - a.date.getTime())

export default function NewsPage() {
  // Works ページ用の構造化データ
  const newsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'IY Tech Works',
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
        url: `${SITE_URL}/news/portfolio.webp`,
      },
    },
    blogPost: merged.map((item) => ({
      '@type': 'BlogPosting',
      headline: item.title,
      datePublished: item.date,
      image: `${SITE_URL}${item.imageUrl}`,
      url: item.url,
    })),
  }

  return (
    <div>
      <Seo
        pageTitle="Works"
        pageDescription="IY Techの開発実績や活動をご紹介します。サービス開発・受賞歴・イベント登壇など、さまざまな取り組みをまとめています。"
        pageKeywords={[
          '実績',
          'Works',
          '開発事例',
          '受賞歴',
          'イベント',
          'セミナー',
        ]}
        pageType="article"
        structuredData={newsStructuredData}
      />
      <SectionShell label="Works" title="開発実績・活動" bg="gray.50">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {news.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </SimpleGrid>
      </SectionShell>
    </div>
  )
}
