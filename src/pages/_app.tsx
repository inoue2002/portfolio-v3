import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Seo from 'src/components/Seo'

import { GoogleAnalytics } from '@next/third-parties/google'

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
