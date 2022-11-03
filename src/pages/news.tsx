import Header from 'src/components/Header'
import News from 'src/components/News'

import { useEffect, useState } from 'react'

export default function NewsPage() {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/news')
      const data = await response.json()
      setNews(data.news)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <Header />
      {news ? <News news={news} /> : ''}
    </div>
  )
}
