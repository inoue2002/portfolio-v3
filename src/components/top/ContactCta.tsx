import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import RequirementsHearingChat from '../RequirementsHearingChat'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

export default function ContactCta() {
  return (
    <SectionShell label="Contact" title="まずは、話すことから。">
      <Reveal>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          gap={{ base: 8, md: 16 }}
        >
          <Box>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              lineHeight={2}
              maxWidth="600px"
            >
              「何を作るか」が決まっていなくても大丈夫です。事業のお困りごとを聞かせてください。
              解像度を上げるところから、最適な一手をご提案します。ご相談・お見積もりは無料です。
            </Text>
            <RequirementsHearingChat
              trigger={
                <Button
                  colorPalette="orange"
                  size="lg"
                  paddingX={10}
                  marginTop={8}
                >
                  無料で相談する
                </Button>
              }
            />
          </Box>
          <Box flexShrink={0}>
            <Image
              src="/images/send.webp"
              width={180}
              height={180}
              alt="お問い合わせのイラスト"
              loading="lazy"
            />
          </Box>
        </Flex>
      </Reveal>
    </SectionShell>
  )
}
