import { Heading, Spacer } from '@chakra-ui/react'

export default function Works() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Works
      </Heading>
      <Spacer marginTop={'10px'} />
      <Heading as="h3" size="md" marginTop={'5px'}>
        Webサービス開発
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        プログラミング/プロトタイピング授業講師
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        LINEAPI開発サポート
      </Heading>
    </div>
  )
}
