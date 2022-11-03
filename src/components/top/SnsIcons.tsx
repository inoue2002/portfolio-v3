import { Flex, Image } from '@chakra-ui/react'

export default function SnsIcons() {
  return (
    <Flex gap={5}>
      <a
        href="https://twitter.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
        title="twitter"
      >
        <Image
          src="/images/twitter.png"
          alt="twitter icon"
          width={50}
          height={50}
          title="twitter icon"
        />
      </a>

      <a
        href="https://github.com/inoue2002"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <Image
          src="/images/github.png"
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
        title="scrapbox"
      >
        <Image
          src="/images/scrapbox.png"
          alt="scrapbox icon"
          width={50}
          height={50}
          title="scrapbox"
        />
      </a>

      <a
        href="https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e746"
        target="_blank"
        rel="noopener noreferrer"
        title="line api expert"
      >
        <Image
          src="/images/lae.png"
          alt="line api expert icon"
          width={50}
          height={50}
          title="line api expert"
        />
      </a>
    </Flex>
  )
}
