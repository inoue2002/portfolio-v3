import { Box, Center, Heading, Spinner, Text } from '@chakra-ui/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Suspense, lazy } from 'react'

// Import critical components directly
import Section from './Section'
import ServiceBox from './ServiceBox'
import ContactBar from './ContactBar'

// Lazy load non-critical components
const DynamicActivities = lazy(() => import('./top/Activities'))
const DynamicProfile = lazy(() => import('./top/ProfileImage'))
const DynamicSkills = lazy(() => import('./top/Skills'))
const DynamicSnsIcons = lazy(() => import('./top/SnsIcons'))
const DynamicWorkHistory = lazy(() => import('./top/WorkHistory'))
const DynamicWorks = lazy(() => import('./top/Works'))
const AboutTable = lazy(() => import('./AboutTable'))

// lazy コンポーネント読み込み中に表示する共通フォールバック
const loadingFallback = (
  <Center paddingY={8}>
    <Spinner size="lg" />
  </Center>
)

// 各コンテンツブロックで繰り返し使用する左右マージン
const contentMargin = { md: '20%', base: '10%' }

const BIRTH_DATE = new Date('2002-04-12')
const calcAge = (birth: Date, today = new Date()): number => {
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}
const age = calcAge(BIRTH_DATE)

export default function Top() {
  return (
    <>
      <Section background="#ffffff">
        <div
          className="text-extraBold flex flexDirection"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            fontSize: 'calc(1rem + 1vw)', // 画面サイズと文字サイズを比例させる
          }}
        >
          <div className="flex">
            <span style={{ color: 'black' }}>速く</span>
            <span>、</span>
            <span style={{ color: 'black' }}>確実に</span>
            <span>。</span>
          </div>
          <span>ソフトウェア開発のお困りごとを一緒に解決します</span>
        </div>
      </Section>
      <Box
        display="flex"
        paddingX={{ sm: 4, md: 8 }}
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="2rem"
      >
        <ServiceBox
          src="/images/line.webp"
          alt="LINEアプリケーションの開発"
          title="LINEアプリ開発"
          description="LINEを活用したアプリケーションの開発では国内トップレベルの知識を保有しています。"
        />
        <ServiceBox
          src="/images/web.webp"
          alt="Webアプリ開発"
          title="Webアプリ開発"
          description="さまざまな用途に対応したWebアプリケーションの開発を行います。"
        />
        <ServiceBox
          src="/images/mobile.webp"
          alt="スマートフォンアプリ開発"
          title="スマートフォンアプリ開発"
          description="iOS/Androidのアプリケーション開発を行います。"
        />
      </Box>
      <Box
        display="flex"
        paddingX={{ sm: 4, md: 8 }}
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="2rem"
      >
        <ServiceBox
          src="/images/connect.webp"
          alt="自動化ソリューション"
          title="業務効率化"
          description="決まった作業の自動化により、効率化とコスト削減を実現します。"
        />
        <ServiceBox
          src="/images/ai.webp"
          alt="AI連携"
          title="AI連携"
          description="AI技術を活用したアプリケーション開発を行います。"
        />
      </Box>

      <Section background="#f5f5f5">
        <div
          className="text-extraBold flex flexDirection"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            fontSize: 'calc(1rem + 1vw)', // 画面サイズと文字サイズを比例させる
          }}
        >
          <span>LINE API Expert認定</span>
        </div>
      </Section>
      <Box bg="#f5f5f5" paddingX={20} paddingBottom={20}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="2rem"
        >
          <a
            href="https://developers.line.biz/ja/community/api-experts/jp-yosuke-inoue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Image
                src="/images/lae.webp"
                alt="LINE API Expert"
                width={250}
                height={150}
                priority
                sizes="(max-width: 768px) 100vw, 250px"
              />
            </motion.div>
          </a>
        </Box>
        <Text
          textAlign="center"
          fontSize="1rem"
          lineHeight="1.5"
          maxWidth="600px"
          margin="0 auto"
        >
          LINEヤフー社よりLINEが提供する各種APIに対する深い理解と高い技術力を持ち、コミュニティに影響力を持つエンジニアの方々を公式に認定し、活動をサポートするプログラム「LINE
          API Expert」に認定されています。
        </Text>
      </Box>
      <ContactBar />
      <Section background="#f5f5f5">
        <div
          className="text-extraBold flex flexDirection"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            fontSize: 'calc(1rem + 1vw)', // 画面サイズと文字サイズを比例させる
          }}
        >
          <span>プロフィール</span>
        </div>
      </Section>
      <Box bg="#f5f5f5" padding={5}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom={4}
        >
          <Suspense fallback={loadingFallback}>
            <DynamicProfile />
          </Suspense>
        </Box>
        <Text
          textAlign="center"
          fontSize="1.2rem"
          fontWeight="bold"
          marginBottom={2}
        >
          代表 井上陽介（ようかん）
        </Text>
        <Text
          textAlign="center"
          fontSize="1rem"
          lineHeight="1.5"
          maxWidth="600px"
          margin="10px auto"
        >
          2002年生まれ{age}歳。滋賀県の普通科高校を卒業し、関西大学を卒業。
          2022年より個人事業主として活動を開始し、スタートアップを中心にさまざまなサービス開発に従事。
          抽象度の高い課題に対しても、素早くプロトタイプを作ることが特に得意。
          趣味は旅と料理。最近は寿司握りに挑戦中。
        </Text>
        <Box
          marginTop="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Suspense fallback={loadingFallback}>
            <DynamicSnsIcons />
          </Suspense>
        </Box>
        <Box
          marginTop="20px"
          marginLeft={contentMargin}
          marginRight={contentMargin}
        >
          <Suspense fallback={loadingFallback}>
            <DynamicActivities />
          </Suspense>
        </Box>
        <Box
          marginTop="20px"
          marginLeft={contentMargin}
          marginRight={contentMargin}
        >
          <Suspense fallback={loadingFallback}>
            <DynamicWorks />
          </Suspense>
        </Box>
        <Box
          marginTop="20px"
          marginLeft={contentMargin}
          marginRight={contentMargin}
        >
          <Suspense fallback={loadingFallback}>
            <DynamicSkills />
          </Suspense>
        </Box>
        <Box
          marginTop="20px"
          marginLeft={contentMargin}
          marginRight={contentMargin}
        >
          <Suspense fallback={loadingFallback}>
            <DynamicWorkHistory />
          </Suspense>
        </Box>
      </Box>
      <Box marginLeft={contentMargin} marginRight={contentMargin}>
        <Box marginTop="20px">
          <Heading as="h2" size="3xl">
            About
          </Heading>
          <Suspense fallback={loadingFallback}>
            <AboutTable />
          </Suspense>
        </Box>
      </Box>
    </>
  )
}
