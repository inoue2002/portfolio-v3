import News from 'src/components/News'
import { useState } from 'react'

export async function getServerSideProps() {
  const apiUrl = process.env.NODE_ENV === 'production' ? 'https://youkan.me/api/news' : 'http://localhost:3000/api/news';
  const response = await fetch(apiUrl);
  const data = await response.json()
  return { props: { initialNews: data.news } }
}

export default function NewsPage({ initialNews }) {
  const [news, setNews] = useState(initialNews)

  return <div>{news ? <News news={news} /> : ''}</div>
}
