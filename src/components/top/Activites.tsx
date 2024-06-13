import { Heading, Spacer } from '@chakra-ui/react'

export default function Activities() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Activities
      </Heading>
      <Spacer marginTop={'10px'} />
      <Heading as="u" size="md" marginTop={'5px'}>
        <a
          href="https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e746"
          target="_blank"
          rel="noopener noreferrer"
          title="line api expert"
        >
          LINE社認定LINEAPIExpert
        </a>
      </Heading>
      <Spacer />
      <Heading as="u" size="md" marginTop={'5px'}>
        <a
          href="https://critica.uno/"
          target="_blank"
          rel="noopener noreferrer"
        >
          未踏ジュニア2020スーパークリエータ
        </a>
      </Heading>
      <Spacer />
      <Heading as="u" size="md" marginTop={'5px'}>
        <a
          href="https://sugokunaritai.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="すごくなりたいがくせいぐるーぷ"
        >
          すごくなりたいがくせいぐるーぷ代表
        </a>
      </Heading>
    </div>
  )
}
