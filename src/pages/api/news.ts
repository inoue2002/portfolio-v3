import type { NextApiRequest, NextApiResponse } from 'next'

import type { News } from 'src/types/news'

export default function news(
  req: NextApiRequest,
  res: NextApiResponse<{ news: News[] }>
) {
  res.status(200).json({
    news: [
      {
        title:
          'Panasonicと共同でデザインしたコンセプトがRed Dot Design Award2022に選ばれました',
        id: 1,
        imageUrl:
          '/news/kototabi.jpeg',
        date: new Date('2022/11/3'),
        content:
          '2022年4月よりPanasonic内にあるFUTURE LIFE FACTORYと進めていました。旅にもたらす新しい体験と価値を考え、世界三大デザイン賞とも言われる大きな舞台に参加でき、とても良い経験になりました。',
        tags: ['プロダクトデザイン'],
        url: 'https://www.red-dot.org/project/kototabi-60169',
      },
      {
        title: 'ポートフォリオサイトをリニューアルしました！',
        id: 2,
        imageUrl:
          '/news/portfolio.png',
        date: new Date('2022/11/3'),
        content:
          '2年前にNuxt.jsの勉強で作成したものを今まで使っていましたが、長い時間放置してしまったので、Next.js + typeScript に書き換えました✌️',
        tags: ['プログラミング', 'ポートフォリオ'],
        url: 'https://youkan.me',
      },
    ],
  })
}