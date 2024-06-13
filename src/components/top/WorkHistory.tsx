import { Heading, Spacer, Text } from '@chakra-ui/react'

export default function WorkHistory() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Work History
      </Heading>
      <Spacer marginTop={'10px'} />
      <div style={{ marginTop: '5px' }}>
        <Heading as="h3" size="md">
          GONENGOLLC
        </Heading>
        <Text color="gray.500">2020/03~ (受託開発・小学生向けプログラミング教育事業)</Text>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Heading as="h3" size="md">
          株式会社Civichat
        </Heading>
        <Text color="gray.500">2021/05~2021/12 (自社開発)</Text>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Heading as="h3" size="md">
          on株式会社
        </Heading>
        <Text color="gray.500">2021/08~2022/12 (自社開発・受託開発)</Text>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Heading as="h3" size="md">
          株式会社OH MY GOD
        </Heading>
        <Text color="gray.500">2022/02~ (自社開発)</Text>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Heading as="h3" size="md">
          dotstudio株式会社
        </Heading>
        <Text color="gray.500">2022/05~2022/12 (講師)</Text>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Heading as="h3" size="md">
          株式会社picon
        </Heading>
        <Text color="gray.500">2023/05~ (自社開発)</Text>
      </div>
    </div>
  )
}
