import Seo, { SITE_URL } from 'src/components/Seo'
import Top from 'src/components/Top'

export default function Home() {
  // ホームページ用の構造化データ
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IY Tech',
    description:
      'IY Techは、事業に寄り添う「1人目のエンジニア」として伴走する開発パートナーです。予算とご要望を深く伺い、AIと共に早く賢く、最適な実現方法をご提案します。',
    url: SITE_URL,
    logo: `${SITE_URL}/news/portfolio.webp`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'inoueyosuke2002@gmail.com',
    },
    sameAs: ['https://github.com/inoue2002', 'https://twitter.com/inoue2002'],
    offers: {
      '@type': 'Offer',
      name: 'ソフトウェア開発サービス',
      description:
        'LINEアプリ開発、Webアプリ開発、モバイルアプリ開発などのサービスを提供しています。',
    },
  }

  return (
    <div>
      <Seo
        pageTitle="ホーム"
        pageDescription="IY Techは、事業に寄り添う「1人目のエンジニア」として伴走する開発パートナーです。予算とご要望を深く伺い、AIと共に早く賢く、最適な実現方法をご提案。保守運用まで、作って終わりにしない開発を行います。"
        pageKeywords={[
          'LINE API Expert',
          'フリーランスエンジニア',
          'LINE開発',
          'アプリ開発',
        ]}
        structuredData={homeStructuredData}
      />
      <Top />
    </div>
  )
}
