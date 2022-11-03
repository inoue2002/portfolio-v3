import { Flex, Image } from '@chakra-ui/react'

export default function SnsIcons() {
  return (
    <Flex gap={5}>
      <a
        href="https://twitter.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/twitter.png"
          alt="twitter icon"
          width={50}
          height={50}
        />
      </a>

      <a
        href="https://github.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/github.png"
          alt="github icon"
          width={50}
          height={50}
        />
      </a>

      <a href="https://speakerdeck.com/inoue2002">
        <Image
          src="/images/sepakerdeck.svg"
          alt="speackerdeck icon"
          width={50}
          height={50}
        />
      </a>

      <a href="https://scrapbox.io/inoue2002/">
        <Image
          src="/images/scrapbox.png"
          alt="scrapbox icon"
          width={50}
          height={50}
        />
      </a>

      <a href="https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e746">
        <Image
          src="/images/lae.png"
          alt="line api expert icon"
          width={50}
          height={50}
        />
      </a>
    </Flex>
  )
}
