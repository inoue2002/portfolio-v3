import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface MetaData {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  pageImg?: string
  pageImgWidth?: number
  pageImgHeight?: number
  pageType?: 'website' | 'article'
  pageKeywords?: string[]
  structuredData?: object
}

const Seo: FC<MetaData> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
  pageType = 'website',
  pageKeywords = [],
  structuredData,
}) => {
  const router = useRouter()
  const defaultTitle = 'IY Tech | ポートフォリオ'
  const defaultDescription =
    'IY Techでは、インターネットに関するアプリケーション開発・運営・企画を行い、さまざまな業界のシステム開発に携わっています。特にLINEアプリ開発に強みを持ち、LINE公式アカウントの開発やLINE APIを利用したサービス開発を得意としています。'
  const defaultKeywords = ['LINE開発', 'Webアプリ開発', 'モバイルアプリ開発', 'フリーランス', 'エンジニア']

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const keywords = [...defaultKeywords, ...pageKeywords].join(', ')
  const url = pagePath || `https://youkan.me${router.asPath}`
  const imgUrl = pageImg || 'https://youkan.me/news/portfolio.webp'
  const imgWidth = pageImgWidth || 1280
  const imgHeight = pageImgHeight || 640

  // デフォルトの構造化データ
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'IY Tech',
    description: description,
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
  }

  // ページ固有の構造化データがあればそれを使用、なければデフォルトを使用
  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OGP */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />
    </Head>
  )
}

export default Seo
