import {
  Box,
  Heading,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import Activities from './top/Activites'
import Interests from './top/Interests'
import Name from './top/Name'
import Profile from './top/ProfileImage'
import Skils from './top/Skils'
import SnsIcons from './top/SnsIcons'
import WorkHistory from './top/WorkHistory'
import Works from './top/Works'

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
        height: '101vh',
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
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
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
      <Box>
        {/* <Text className="text-thin">This is thin text</Text>
        <Text className="text-normal">This is normal text</Text>
        <Text className="text-bold">This is bold text</Text>
        <Text className="text-extraBold">This is extra bold text</Text> */}
      </Box>
      <Section background="#ffffff">
        <div
          className="text-extraBold"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            fontSize: '2rem', // 文字サイズを大きく
          }}
        >
          <div className="flex flexDirection">
            <div className="flex">
              <span style={{ color: 'black' }}>速く</span>
              <span>、</span>
              <span style={{ color: 'black' }}>確実に</span>
              <span>。</span>
            </div>
            <span>ソフトウェア開発のお困りごとを一緒に解決します</span>
          </div>
        </div>
      </Section>
      <Box
        marginLeft={{ md: '20%', base: '10%' }}
        marginRight={{ md: '20%', base: '10%' }}
      >
        <Box
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
            flexDirection: 'column',
          }}
        >
          {/* <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            fontFamily="Inter, sans-serif"
            fontWeight="bold"
          >
            どうせやるなら面白く
          </Heading> */}
          {/* <Text
            fontSize="xl"
            textAlign="center"
            marginTop="1rem"
            fontFamily="Inter, sans-serif"
            fontStyle="italic"
          >
            ソフトウェア開発を通じて、さまざまなサービスを作っています
          </Text> */}
        </Box>
        <Box
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: '5rem',
          }}
        >
          <Profile />
        </Box>
        <Box style={{ marginTop: '60px' }}>
          <SnsIcons />
        </Box>
        <Box style={{ marginTop: '15px' }}>
          <Name />
        </Box>
        <div></div>
        <Box style={{ marginTop: '15px' }}>
          <Text fontSize={'2xl'} display={'block'} as="b">
            2002年生まれ。滋賀県の普通科高校を卒業し、現在関西大学3回生
          </Text>
          <Spacer />
          <Text fontSize={'2xl'} display={'block'} as="b">
            複数のスタートアップでエンジニアとして開発に携わり、toB/toC/toGの大小さまざまな開発に従事
          </Text>
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <Activities />
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <Interests />
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <Works />
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <Skils />
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <WorkHistory />
        </Box>
        <Box style={{ marginTop: '20px' }}>
          <Heading as="h2" size="xl">
            About
          </Heading>
          <Table variant="simple" style={{ marginTop: '40px' }}>
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
    </>
  )
}
