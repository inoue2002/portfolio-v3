import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

const SERVICES = [
  {
    src: '/images/line.webp',
    title: 'LINEアプリ開発',
    description:
      'ミニアプリ・公式アカウント・LINE API。国内トップレベルの知見で設計から運用まで。',
  },
  {
    src: '/images/web.webp',
    title: 'Webアプリ開発',
    description: '業務システムからtoCサービスまで、用途に合わせて開発します。',
  },
  {
    src: '/images/mobile.webp',
    title: 'モバイルアプリ開発',
    description: 'iOS / Androidアプリの企画・開発・ストア公開まで。',
  },
  {
    src: '/images/connect.webp',
    title: '業務効率化・自動化',
    description: '定型業務の自動化で、効率化とコスト削減を実現します。',
  },
  {
    src: '/images/ai.webp',
    title: 'AI活用',
    description: 'AIを組み込んだサービス開発・業務改善を支援します。',
  },
]

export default function ServicesGrid() {
  return (
    <SectionShell label="Services" title="手段は、選びません。">
      <Reveal>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.600"
          lineHeight={2}
          maxWidth="760px"
          marginBottom={{ base: 10, md: 14 }}
        >
          課題に合わせて、最適な技術を組み合わせます。特定の手段ありきではなく、事業にとっての最適解から逆算します。
        </Text>
      </Reveal>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <Flex
              gap={5}
              alignItems="flex-start"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              padding={6}
              height="100%"
              bg="white"
            >
              <Box flexShrink={0}>
                <Image
                  src={service.src}
                  alt={service.title}
                  width={64}
                  height={64}
                  sizes="64px"
                  loading="lazy"
                />
              </Box>
              <Box>
                <Text fontWeight="extraBold" color="gray.900">
                  {service.title}
                </Text>
                <Text
                  marginTop={2}
                  color="gray.600"
                  fontSize="sm"
                  lineHeight={1.8}
                >
                  {service.description}
                </Text>
              </Box>
            </Flex>
          </Reveal>
        ))}
      </SimpleGrid>
      <Reveal>
        <Flex
          marginTop={{ base: 10, md: 14 }}
          bg="gray.50"
          borderRadius="xl"
          padding={{ base: 6, md: 10 }}
          gap={{ base: 6, md: 10 }}
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <a
            href="https://developers.line.biz/ja/community/api-experts/jp-yosuke-inoue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="/images/lae.webp"
                alt="LINE API Expert"
                width={200}
                height={120}
                sizes="200px"
              />
            </motion.div>
          </a>
          <Text color="gray.600" lineHeight={1.9} fontSize="sm">
            LINEヤフー社より、LINEが提供する各種APIへの深い理解と高い技術力を持つエンジニアを公式に認定するプログラム「LINE
            API
            Expert」に認定されています。LINEを活用した開発では、国内トップレベルの知見でご支援できます。
          </Text>
        </Flex>
      </Reveal>
    </SectionShell>
  )
}
