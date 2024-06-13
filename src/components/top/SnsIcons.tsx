import { Flex, Image } from '@chakra-ui/react'

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
          title="github"
        />
      </a>

      <a
        href="https://speakerdeck.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
        title="speackerdeck"
      >
        <Image
          src="/images/sepakerdeck.svg"
          alt="speackeck icon"
          width={50}
          height={50}
          title="speackerdeck"
        />
      </a>

      <a
        href="https://scrapbox.io/inoue2002/"
        target="_blank"
        rel="noopener noreferrer"
        title="cosense"
      >
        <Image
          src="/images/cosense.svg"
          alt="cosense icon"
          width={50}
          height={50}
          title="cosense"
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
          title="line api expert"
        />
      </a>
    </Flex>
  )
}
