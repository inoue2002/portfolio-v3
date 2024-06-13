import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from 'src/components/Footer'
import { GATracking } from 'src/components/GaTracking'
import Header from 'src/components/Header'
import Seo from 'src/components/Seo'

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
          thin: 100,
          normal: 400,
          bold: 700,
          extraBold: 800,
        },
        styles: {
          global: {
            '.text-thin': {
              fontWeight: 100,
            },
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
      <GATracking trackingId={GA_TRACKING_ID} />
      <Head>
        <link
          rel="preload"
          href="/fonts/LINESeedJP_OTF_Th.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
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
          href="/fonts/w_OTF_Eb.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>
          {`
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Th.woff2') format('woff2');
              font-weight: 100;
              font-style: normal;
            }
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Rg.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
            }
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Bd.woff2') format('woff2');
              font-weight: 700;
              font-style: normal;
            }
            @font-face {
              font-family: 'LINESeedJP';
              src: url('/fonts/LINESeedJP_OTF_Eb.woff2') format('woff2');
              font-weight: 800;
              font-style: normal;
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
