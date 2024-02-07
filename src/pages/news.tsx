import { useState } from 'react'
import News from 'src/components/News'
import type { NewsObj } from 'src/types/news'

// export async function getServerSideProps() {
//   const apiUrl = process.env.NODE_ENV === 'production' ? 'https://iy-tech.work/api/news' : 'https://iy-tech.work/api/news';
//   const response = await fetch(apiUrl);
//   const data = await response.json()
//   return { props: { initialNews: data.news } }
// }

// @ts-ignore
export default function NewsPage() {
  const newsData: NewsObj[] = [
    {
      title:
        'Panasonicと共同でデザインしたコンセプトがRed Dot Design Award2022に選ばれました',
      id: 1,
      imageUrl: '/news/kototabi.jpeg',
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
      imageUrl: '/news/mosaic.jpg',
      date: new Date('2022/3/5'),
      content:
        '審査員より「滋賀県公式のコロナ対策サイトありきでなく、自分が欲しい情報を見れるサイトを作ったことはシビックテック的であり、素晴らしいと思いました。社会に対する思いや、自らスキルを高めながらさらに挑戦していくという姿勢が、頼もしく感じました。」とコメントをいただきました。',
      tags: ['プログラミング', 'LINE', '企画'],
      url: 'https://shiga-lg.jp/showcase/result',
    },
    {
      title: 'PR Timesで開催されたハッカソンにてチーム賞を受賞しました',
      id: 3,
      imageUrl: '/news/zimoto.png',
      date: new Date('2023/9'),
      content:
        'テーマが地元ということで、自分の地元の魅力を交換できるようなSNSを作りました。ハッカソンが初めてのメンバーも多かったですが、作りたいものの共有を常に行い、良い雰囲気で開発ができました。私はチームリーダーをしつつ、デザイン、認証周り、APIの繋ぎこみなどロジック周りを担当しました。',
      tags: ['プログラミング', 'ハッカソン'],
      url: 'https://github.com/prtimes-team2',
    },
  ]

  // Sort newsData by date in descending order
  newsData.sort((a, b) => b.date.getTime() - a.date.getTime())

  const [news, setNews] = useState(newsData)

  return <div>{news ? <News news={news} /> : ''}</div>
}
