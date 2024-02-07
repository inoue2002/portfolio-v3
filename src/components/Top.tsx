import { Box, Heading, Spacer, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import Activities from './top/Activites'
import Interests from './top/Interests'
import Name from './top/Name'
import Profile from './top/ProfileImage'
import Skils from './top/Skils'
import SnsIcons from './top/SnsIcons'
import WorkHistory from './top/WorkHistory'
import Works from './top/Works'

export default function Top() {
  return (
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
          marginTop: '5rem',
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
          得意なソフトウェア領域を応用し、いかに新しい価値を生み出せるかを考えています。最近興味があるのはコミュニティ運営・空き家活用などです。
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
        <Table variant="simple">
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
              <Td>
                ITコンサルティング、インターネットに関するアプリケーション開発・運営・企画
              </Td>
            </Tr>
            <Tr>
              <Td>所在地</Td>
              <Td>滋賀県大津市 / 大阪府吹田市</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
