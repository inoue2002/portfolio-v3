import { Heading, Spacer } from '@chakra-ui/react'

export default function WorkHistory() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Work History
      </Heading>
      <Spacer marginTop={'10px'} />
      <Heading as="h3" size="md" marginTop={'5px'}>
        2020/03~ GONENGOLLC(受託開発・小学生向けプログラミング事業)
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        2021/05~2021/12 株式会社Civichat(自社開発)
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        2021/08~2022/12 on株式会社(自社開発・受託開発)
      </Heading>

      <Heading as="h3" size="md" marginTop={'5px'}>
        2022/02~ 株式会社OH MY GOD(自社開発)
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        2022/05~ dotstudio株式会社(講師)
      </Heading>
    </div>
  )
}
