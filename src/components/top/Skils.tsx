import { Heading, Spacer } from '@chakra-ui/react'

export default function Skils() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Skils
      </Heading>
      <Spacer marginTop={'10px'} />
      <Heading as="h3" size="md" marginTop={'5px'}>
        フロントエンド： Next.js / Nuxt.js (TypeScript)
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        バックエンド： Node.js (TypeScript)
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        キーワード： AWS / Firebase / LINEAPI
      </Heading>
      <Heading as="h3" size="md" marginTop={'5px'}>
        コミュニティ運営 / イベント企画
      </Heading>
    </div>
  )
}
