import { useState } from 'react'
import News from 'src/components/News'
import Seo from 'src/components/Seo'
import type { NewsObj } from 'src/types/news'

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
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Panasonicと共同でデザインしたコンセプトがRed Dot Design Award2022に選ばれました',
        datePublished: '2022-11-03',
        image: 'https://youkan.me/news/kototabi.webp',
        url: 'https://www.red-dot.org/project/kototabi-60169',
      },
      {
        '@type': 'BlogPosting',
        headline: 'PR Timesで開催されたハッカソンにてチーム賞を受賞しました',
        datePublished: '2023-09-01',
        image: 'https://youkan.me/news/zimoto.webp',
        url: 'https://github.com/prtimes-team2',
      },
    ],
  }
  const newsData: NewsObj[] = [
    {
      title:
        'Panasonicと共同でデザインしたコンセプトがRed Dot Design Award2022に選ばれました',
      id: 1,
      imageUrl: '/news/kototabi.webp',
      date: new Date('2022/11/3'),
      content:
        '2022年4月よりPanasonic内にあるFUTURE LIFE FACTORYと進めていました。旅にもたらす新しい体験と価値を考え、世界三大デザイン賞とも言われる大きな舞台に参加でき、とても良い経験になりました。',
      tags: ['プロダクトデザイン'],
      url: 'https://www.red-dot.org/project/kototabi-60169',
    },
    {
      title:
        '企画で関わったLINEでモザイクアートを作る事例が滋賀県地域情報推進会議「コロナに負けない地域×ICT事例」に選ばれました',
      id: 4,
      imageUrl: '/news/mosaic.webp',
      date: new Date('2022/3/5'),
      content:
        '審査員より「滋賀県公式のコロナ対策サイトありきでなく、自分が欲しい情報を見れるサイトを作ったことはシビックテック的であり、素晴らしいと思いました。社会に対する思いや、自らスキルを高めながらさらに挑戦していくという姿勢が、頼もしく感じました。」とコメントをいただきました。',
      tags: ['プログラミング', 'LINE', '企画'],
      url: 'https://shiga-lg.jp/showcase/result',
    },
    {
      title: 'PR Timesで開催されたハッカソンにてチーム賞を受賞しました',
      id: 3,
      imageUrl: '/news/zimoto.webp',
      date: new Date('2023/9'),
      content:
        'テーマが地元ということで、自分の地元の魅力を交換できるようなSNSを作りました。ハッカソンが初めてのメンバーも多かったですが、作りたいものの共有を常に行い、良い雰囲気で開発ができました。私はチームリーダーをしつつ、デザイン、認証周り、APIの繋ぎこみなどロジック周りを担当しました。',
      tags: ['プログラミング', 'ハッカソン'],
      url: 'https://github.com/prtimes-team2',
    },
    {
      title:
        '大阪産業局/ソフト産業プラザ TEQSで開催されたAIビジネス研究会でハンズオン講師をさせていただきました。',
      id: 2,
      date: new Date('2024/7/2'),
      content:
        'ノーコードツールMakeとGPT-4oを連携し、画像の内容を理解できるLINEBotのセミナーを行いました。また、LINEとAIを用いたビジネス事例の紹介などを行いました。',
      tags: ['AI', 'LINE', 'セミナー'],
      imageUrl: '/news/ai-ken.webp',
      url: 'https://scrapbox.io/inoue2002/Make%E3%81%A8LINE%E3%81%A7%E4%BD%9C%E3%82%8BAI*LINEBot%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9_-_%E3%83%8F%E3%83%B3%E3%82%BA%E3%82%AA%E3%83%B3%E8%B3%87%E6%96%99',
    },
  ]

  // Sort newsData by date in descending order
  newsData.sort((a, b) => b.date.getTime() - a.date.getTime())

  const [news, setNews] = useState(newsData)

  return (
    <div>
      <Seo 
        pageTitle="ニュース"
        pageDescription="IY Techの活動やプロジェクトに関する最新情報をお届けします。受賞歴やイベント参加など、さまざまな活動をご紹介します。"
        pageKeywords={['ニュース', '受賞歴', 'イベント', 'セミナー']}
        pageType="article"
        structuredData={newsStructuredData}
      />
      {news ? <News news={news} /> : ''}
    </div>
  )
}
