import { useState } from 'react'
import News from 'src/components/News'
import Seo from 'src/components/Seo'
import type { NewsObj } from 'src/types/news'

export default function ServicesPage() {
  // サービスページ用の構造化データ
  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: '会話分析くん',
          description: 'LINEのトーク履歴を送信するだけで、簡単に分析することができます🔍',
          url: 'https://line-checker.vercel.app',
          provider: {
            '@type': 'Organization',
            name: 'IY Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'レシピ保存くん',
          description: 'お気に入りのレシピを保存して、いつでも見返すことができます📚',
          url: 'https://recipe-bookmark.vercel.app',
          provider: {
            '@type': 'Organization',
            name: 'IY Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'LINEで簡単割り勘「TATEKA」',
          description: 'LINEで簡単に建て替え計算ができるLINEBotです📱',
          url: 'https://tateka.app',
          provider: {
            '@type': 'Organization',
            name: 'IY Tech',
          },
        },
      },
    ],
  }
  const servicesData: NewsObj[] = [
    {
      title: '会話分析くん',
      id: 1,
      imageUrl: '/services/message-checker.webp',
      date: new Date('2024/1'),
      content:
        'LINEのトーク履歴を送信するだけで、簡単に分析することができます🔍',
      tags: ['LINEBot'],
      url: 'https://line-checker.vercel.app',
    },
    {
      title: 'レシピ保存くん',
      id: 2,
      imageUrl: '/services/recipe.webp',
      date: new Date('2024/2'),
      content: 'お気に入りのレシピを保存して、いつでも見返すことができます📚',
      tags: ['LINEBot'],
      url: 'https://recipe-bookmark.vercel.app',
    },
    {
      title: 'LINEで簡単割り勘「TATEKA」',
      id: 3,
      imageUrl: '/services/tateka.webp',
      date: new Date('2023/1/11'),
      content: 'LINEで簡単に建て替え計算ができるLINEBotです📱',
      tags: ['LINEBot', 'LIFF', '割り勘'],
      url: 'https://tateka.app',
    },
    {
      title: '【株式会社BUTAI様】社内向けShopify-OBSの連携システムの開発',
      id: 4,
      imageUrl: '/services/butai.webp',
      date: new Date('2024/6/1'),
      content:
        'Shopifyの注文情報をOBS上に自動で反映するシステムを開発しました🛒',
      tags: ['Shopify', 'OBS'],
      url: '',
    },
    {
      title: 'LINEでフォトコンテストを開催できる「Lコンテスト」',
      id: 5,
      imageUrl: '/services/lcontest.webp',
      date: new Date('2024/6/24'),
      content: '誰でもLINEでフォトコンテストを開催できるサービスです📸',
      tags: ['LINEBot', 'LIFF', 'フォトコンテスト'],
      url: 'https://contest.iy-tech.work/',
    },
  ]

  // Sort servicesData by date in descending order
  servicesData.sort((a, b) => b.date.getTime() - a.date.getTime())

  const [services, setServices] = useState(servicesData)

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
