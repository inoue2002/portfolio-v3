import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Footer from 'src/components/Footer'
import { GATracking } from 'src/components/GaTracking'
import Header from 'src/components/Header'
import Seo from 'src/components/Seo'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Seo />
      <GATracking trackingId={GA_TRACKING_ID} />
      <Header />
      <Component {...pageProps}/>
      <Footer/>
    </ChakraProvider>
  )
}
