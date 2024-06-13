import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function SnsIcons() {
  const iconSize = 40 // 画像のサイズを統一

  return (
    <Flex
      gap={5}
      alignItems="center"
      justifyContent="flex-start"
      marginBottom="20px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a
          href="https://x.com/inoue2002"
          target="_blank"
          rel="noopener noreferrer"
          title="x"
        >
          <Image
            src="/images/x.webp"
            alt="x icon"
            width={iconSize}
            height={iconSize}
            title="x icon"
            style={{ objectFit: 'contain' }}
          />
        </a>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a
          href="https://github.com/inoue2002"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <Image
            src="/images/github.webp"
            alt="github icon"
            width={iconSize}
            height={iconSize}
            title="github icon"
            style={{ objectFit: 'contain' }}
          />
        </a>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" gap={0}>
        <a
          href="https://speakerdeck.com/inoue2002"
          target="_blank"
          rel="noopener noreferrer"
          title="speakerdeck"
        >
          <Image
            src="/images/speakerdeck.webp"
            alt="speakerdeck icon"
            width={iconSize}
            height={iconSize}
            title="speakerdeck icon"
            style={{ objectFit: 'contain' }}
          />
        </a>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <a
          href="https://scrapbox.io/inoue2002/"
          target="_blank"
          rel="noopener noreferrer"
          title="cosense"
        >
          <Image
            src="/images/cosense.webp"
            alt="cosense icon"
            width={iconSize}
            height={iconSize}
            title="cosense icon"
            style={{ objectFit: 'contain' }}
          />
        </a>
      </Box>
    </Flex>
  )
}
