import News from 'src/components/News'
import { useState } from 'react'

export async function getServerSideProps() {
  const apiUrl = process.env.NODE_ENV === 'production' ? 'https://youkan.me/api/services' : 'http://localhost:3000/api/services';
  const response = await fetch(apiUrl);
  const data = await response.json()
  return { props: { initialNews: data.news } }
}

// @ts-ignore
export default function NewsPage({ initialNews }) {
  const [services, setServices] = useState(initialNews)

  return <div>{services ? <News news={services} /> : ''}</div>
}
