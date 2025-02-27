import { useEffect, useState } from 'react'
import News from 'src/components/News'
import Seo from 'src/components/Seo'
import servicesData from 'src/data/services.json'
import type { NewsObj } from 'src/types/news'

export default function ServicesPage() {
  // サービスページ用の構造化データ
  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: servicesData.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.content,
        url: service.url,
        provider: {
          '@type': 'Organization',
          name: 'IY Tech',
        },
      },
    })),
  }

  const [services, setServices] = useState<NewsObj[]>([])

  useEffect(() => {
    // JSONデータの日付文字列をDateオブジェクトに変換
    const formattedData = servicesData.map(item => ({
      ...item,
      date: new Date(item.date)
    })) as NewsObj[]

    // 日付でソート（降順）
    formattedData.sort((a, b) => b.date.getTime() - a.date.getTime())
    
    setServices(formattedData)
  }, [])

  return (
    <div>
      <Seo 
        pageTitle="サービス一覧"
        pageDescription="IY Techが提供するLINEアプリ開発、Webアプリ開発、モバイルアプリ開発などのサービス一覧です。"
        pageKeywords={['LINEBot', 'Webアプリ', 'サービス開発', 'LIFF']}
        pageType="article"
        structuredData={servicesStructuredData}
      />
      {services ? <News news={services} /> : ''}
    </div>
  )
}
