import { Table } from '@chakra-ui/react'

const AboutTable = () => {
  return (
    <Table.Root
      variant="line"
      style={{ marginTop: '40px', width: '100%', tableLayout: 'fixed' }}
    >
      <Table.Body>
        <Table.Row>
          <Table.Cell>屋号</Table.Cell>
          <Table.Cell>IY Tech</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>事業形態</Table.Cell>
          <Table.Cell>個人事業主</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>代表</Table.Cell>
          <Table.Cell>井上陽介</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>開業</Table.Cell>
          <Table.Cell>2022年5月</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>事業内容</Table.Cell>
          <Table.Cell>インターネットに関するアプリケーション開発・運営・企画</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>所在地</Table.Cell>
          <Table.Cell>滋賀県大津市 / 大阪府吹田市</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}

export default AboutTable
