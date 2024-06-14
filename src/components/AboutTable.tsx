import { Table, Tbody, Td, Tr } from "@chakra-ui/react"

const AboutTable = () => {
  return (
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
  )
}


export default AboutTable