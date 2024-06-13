import { useState } from 'react'
import News from 'src/components/News'
import type { NewsObj } from 'src/types/news'

// export async function getServerSideProps() {
//   const apiUrl =
//     process.env.NODE_ENV === 'production'
//       ? 'https://youkan.me/api/services'
//       : 'http://localhost:3000/api/services'
//   const response = await fetch(apiUrl)
//   const data = await response.json()
//   return { props: { initialNews: data.news } }
// }

export default function NewsPage() {
  const newsData: NewsObj[] = [
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
  ]

  // Sort newsData by date in descending order
  newsData.sort((a, b) => b.date.getTime() - a.date.getTime())

  const [services, setServices] = useState(newsData)

  return <div>{services ? <News news={services} /> : ''}</div>
}
