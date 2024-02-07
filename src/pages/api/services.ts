import type { NextApiRequest, NextApiResponse } from 'next'

import type { News } from 'src/types/news'

export default function news(
  req: NextApiRequest,
  res: NextApiResponse<{ news: News[] }>
) {
  const newsData: News[] = [
    {
      title: '会話分析くん',
      id: 1,
      imageUrl: '/services/message-checker.png',
      date: new Date('2024/1'),
      content:
        'LINEのトーク履歴を送信するだけで、簡単に分析することができます🔍',
      tags: ['LINEBot'],
      url: 'https://line-checker.vercel.app',
    },
    {
      title: 'レシピ保存くん',
      id: 2,
      imageUrl: '/services/recipe.png',
      date: new Date('2024/2'),
      content: 'お気に入りのレシピを保存して、いつでも見返すことができます📚',
      tags: ['LINEBot'],
      url: 'https://recipe-bookmark.vercel.app',
    },
    {
      title: 'LINEで簡単割り勘「TATEKA」',
      id: 3,
      imageUrl: '/services/tateka.jpeg',
      date: new Date('2023/1/11'),
      content: 'LINEで簡単に建て替え計算ができるLINEBotです📱',
      tags: ['LINEBot', 'LIFF', '割り勘'],
      url: 'https://tateka.app',
    },
  ];

  // Sort newsData by date in descending order
  newsData.sort((a, b) => b.date.getTime() - a.date.getTime());

  res.status(200).json({ news: newsData });
}
