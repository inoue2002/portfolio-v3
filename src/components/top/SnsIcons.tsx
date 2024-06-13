import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function SnsIcons() {
  return (
    <Flex gap={5}>
      <a
        href="https://x.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
        title="x"
      >
        <Image
          src="/images/x.webp"
          alt="x icon"
          width={50}
          height={50}
          title="x icon"
        />
      </a>

      <a
        href="https://github.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <Image
          src="/images/github.webp"
          alt="github icon"
          width={50}
          height={50}
          title="github icon"
        />
      </a>

      <a
        href="https://speakerdeck.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
        title="speakerdeck"
      >
        <Image
          src="/images/speakerdeck.webp"
          alt="speakerdeck icon"
          width={50}
          height={50}
          title="speakerdeck icon"
        />
      </a>

      <a
        href="https://scrapbox.io/inoue2002/"
        target="_blank"
        rel="noopener noreferrer"
        title="cosense"
      >
        <Image
          src="/images/cosense.webp"
          alt="cosense icon"
          width={50}
          height={50}
          title="cosense icon"
        />
      </a>

      <a
        href="https://developers.line.biz/ja/community/api-experts/jp-yosuke-inoue/"
        target="_blank"
        rel="noopener noreferrer"
        title="line api expert"
      >
        <Image
          src="/images/lae.webp"
          alt="line api expert icon"
          width={50}
          height={50}
          title="line api expert icon"
        />
      </a>
    </Flex>
  )
}
