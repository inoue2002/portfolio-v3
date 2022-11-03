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
          href="https://critica.uno/"
          target="_blank"
          rel="noopener noreferrer"
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
        >
          すごくなりたいがくせいぐるーぷ代表
        </a>
      </Heading>
    </div>
  )
}
