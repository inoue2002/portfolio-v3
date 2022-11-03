import { Heading, Spacer } from '@chakra-ui/react'

export default function Works() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Like
      </Heading>
      <Spacer marginTop={'10px'} />
      <Heading as="h3" size="md" marginTop={'5px'}>
        旅行
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        ランニング
      </Heading>
    </div>
  )
}
