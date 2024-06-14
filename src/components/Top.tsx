import { Box, Heading, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ReactNode, Suspense, lazy, useRef } from 'react'

const ContactBar = lazy(() => import('./ConntactBar'))
const Contact = lazy(() => import('./top/Contact'))
const DynamicActivities = lazy(() => import('./top/Activites'))
const DynamicProfile = lazy(() => import('./top/ProfileImage'))
const DynamicSkils = lazy(() => import('./top/Skils'))
const DynamicSnsIcons = lazy(() => import('./top/SnsIcons'))
const DynamicWorkHistory = lazy(() => import('./top/WorkHistory'))
const DynamicWorks = lazy(() => import('./top/Works'))

interface SectionProps {
  children: ReactNode
  background: string
}

function Section({ children, background }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      style={{
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        padding: '50px',
        background: background,
      }}
    >
      <span
        style={{
          display: 'block',
          opacity: isInView ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
        }}
      >
        {children}
      </span>
    </section>
  )
}

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
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="300px"
          marginBottom="2rem"
        >
          <Box
            width={150}
            height={150}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/line.webp"
              alt="LINEアプリケーションの開発"
              width={100}
              height={100}
            />
          </Box>
          <Heading as="h3" size="md" marginTop="1rem">
            LINEアプリ開発
          </Heading>
          <Text marginTop="0.5rem">
            LINEを活用したアプリケーションの開発では国内トップレベルの知識を保有しています。
          </Text>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="300px"
          marginBottom="2rem"
        >
          <Box
            width={150}
            height={150}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/web.webp"
              alt="Webアプリ開発"
              width={150}
              height={150}
            />
          </Box>
          <Heading as="h3" size="md" marginTop="1rem">
            Webアプリ開発
          </Heading>
          <Text marginTop="0.5rem">
            さまざまな用途に対応したWebアプリケーションの開発を行います。
          </Text>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="300px"
          marginBottom="2rem"
        >
          <Box
            width={150}
            height={150}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/mobile.webp"
              alt="スマートフォンアプリ開発"
              width={150}
              height={150}
            />
          </Box>
          <Heading as="h3" size="md" marginTop="1rem">
            スマートフォンアプリ開発
          </Heading>
          <Text marginTop="0.5rem">
            iOS/Androidのアプリケーション開発を行います。
          </Text>
        </Box>
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
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="300px"
          marginBottom="2rem"
        >
          <Box
            width={150}
            height={150}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/connect.webp"
              alt="自動化ソリューション"
              width={150}
              height={150}
            />
          </Box>
          <Heading as="h3" size="md" marginTop="1rem">
            業務効率化
          </Heading>
          <Text marginTop="0.5rem">
            決まった作業の自動化により、効率化とコスト削減を実現します。
          </Text>
        </Box>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="300px"
          marginBottom="2rem"
        >
          <Box
            width={150}
            height={150}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/ai.webp"
              alt="AI連携"
              width={150}
              height={150}
            />
          </Box>
          <Heading as="h3" size="md" marginTop="1rem">
            AI連携
          </Heading>
          <Text marginTop="0.5rem">
            AI技術を活用したアプリケーション開発を行います。
          </Text>
        </Box>
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
      <Suspense fallback={<p>Loading...</p>}>
        <ContactBar />
      </Suspense>
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
          <Suspense fallback={<p>Loading...</p>}>
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
          margin="0 auto"
        >
          2002年生まれ。滋賀県の普通科高校を卒業し、現在関西大学3回生。
          2022年より個人事業主として活動を開始し、スタートアップを中心にさまざまなサービス開発に従事。
          抽象度の高い課題に対しても、素早くプロトタイプを作ることが特に得意。
          趣味は旅と料理。最近は寿司握りに挑戦中。
        </Text>
        <Box
          style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicSnsIcons />
          </Suspense>
        </Box>
        <Box
          style={{ marginTop: '20px' }}
          marginLeft={{ md: '20%', base: '10%' }}
          marginRight={{ md: '20%', base: '10%' }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicActivities />
          </Suspense>
        </Box>
        <Box
          style={{ marginTop: '20px' }}
          marginLeft={{ md: '20%', base: '10%' }}
          marginRight={{ md: '20%', base: '10%' }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicWorks />
          </Suspense>
        </Box>
        <Box
          style={{ marginTop: '20px' }}
          marginLeft={{ md: '20%', base: '10%' }}
          marginRight={{ md: '20%', base: '10%' }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicSkils />
          </Suspense>
        </Box>
        <Box
          style={{ marginTop: '20px' }}
          marginLeft={{ md: '20%', base: '10%' }}
          marginRight={{ md: '20%', base: '10%' }}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicWorkHistory />
          </Suspense>
        </Box>
      </Box>
      <Box
        marginLeft={{ md: '20%', base: '10%' }}
        marginRight={{ md: '20%', base: '10%' }}
      >
        <Box style={{ marginTop: '20px' }}>
          <Heading as="h2" size="xl">
            About
          </Heading>
          <Table
            variant="simple"
            style={{ marginTop: '40px', width: '100%', tableLayout: 'fixed' }}
          >
            <Tbody>
              <Tr>
                <Td>屋号</Td>
                <Td>IY Tech</Td>
              </Tr>
              <Tr>
                <Td>事業形態</Td>
                <Td>個人事業主</Td>
              </Tr>
              <Tr>
                <Td>代表</Td>
                <Td>井上陽介</Td>
              </Tr>
              <Tr>
                <Td>開業</Td>
                <Td>2022年5月</Td>
              </Tr>
              <Tr>
                <Td>事業内容</Td>
                <Td>インターネットに関するアプリケーション開発・運営・企画</Td>
              </Tr>
              <Tr>
                <Td>所在地</Td>
                <Td>滋賀県大津市 / 大阪府吹田市</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      <Box
        marginTop={'20px'}
        marginLeft={{ md: '20%', base: '10%' }}
        marginRight={{ md: '20%', base: '10%' }}
      >
        <Heading as="h2" size="xl" id="contact">
          Contact
        </Heading>
        <Suspense fallback={<p>Loading...</p>}>
          <Contact />
        </Suspense>
      </Box>
    </>
  )
}
