import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Rg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Bd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Eb.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>
          {`
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Rg.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Bd.woff2') format('woff2');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Eb.woff2') format('woff2');
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
