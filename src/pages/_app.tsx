import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Seo from 'src/components/Seo'

import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: 'LINESeedJP, sans-serif',
          body: 'LINESeedJP, sans-serif',
        },
        fontWeights: {
          normal: 400,
          bold: 700,
          extraBold: 800,
        },
        styles: {
          global: {
            '.text-normal': {
              fontWeight: 400,
            },
            '.text-bold': {
              fontWeight: 700,
            },
            '.text-extraBold': {
              fontWeight: 800,
            },
          },
        },
      })}
    >
      <Seo />
      {GA_TRACKING_ID && <GoogleAnalytics gaId={GA_TRACKING_ID} />}
      <Head>
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Rg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Bd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Eb.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
