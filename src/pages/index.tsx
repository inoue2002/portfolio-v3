import Seo from 'src/components/Seo'
import Top from 'src/components/Top'

export default function Home() {
  // ホームページ用の構造化データ
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IY Tech',
    description: 'IY Techでは、インターネットに関するアプリケーション開発・運営・企画を行い、さまざまな業界のシステム開発に携わっています。特にLINEアプリ開発に強みを持ち、LINE公式アカウントの開発やLINE APIを利用したサービス開発を得意としています。',
    url: 'https://youkan.me',
    logo: 'https://youkan.me/news/portfolio.webp',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'inoueyousuke.contact@gmail.com',
    },
    sameAs: [
      'https://github.com/inoue2002',
      'https://twitter.com/inoue2002',
    ],
    offers: {
      '@type': 'Offer',
      name: 'ソフトウェア開発サービス',
      description: 'LINEアプリ開発、Webアプリ開発、モバイルアプリ開発などのサービスを提供しています。',
    }
  }

  return (
    <div>
      <Seo 
        pageTitle="ホーム"
        pageDescription="IY Techでは、インターネットに関するアプリケーション開発・運営・企画を行い、さまざまな業界のシステム開発に携わっています。特にLINEアプリ開発に強みを持ち、LINE公式アカウントの開発やLINE APIを利用したサービス開発を得意としています。"
        pageKeywords={['LINE API Expert', 'フリーランスエンジニア', 'LINE開発', 'アプリ開発']}
        structuredData={homeStructuredData}
      />
      <Top />
    </div>
  )
}
