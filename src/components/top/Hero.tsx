import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { HiCheckCircle } from 'react-icons/hi2'
import RequirementsHearingChat from '../RequirementsHearingChat'

const TRUST_ITEMS = [
  'LINE API Expert 認定',
  '未踏ジュニア2020 スーパークリエータ',
  '取引実績 10社以上',
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <Box
      bgGradient="to-b"
      gradientFrom="teal.50"
      gradientTo="white"
      overflow="hidden"
    >
      <Box
        maxWidth="1100px"
        marginX="auto"
        paddingX={{ base: 5, md: 8 }}
        paddingTop={{ base: 16, md: 28 }}
        paddingBottom={{ base: 14, md: 24 }}
      >
        <motion.div {...fadeUp(0)}>
          <Heading
            as="h1"
            fontWeight="extraBold"
            lineHeight={1.3}
            fontSize={{ base: '2rem', md: '3.4rem' }}
            color="gray.900"
          >
            あなたの事業の、
            <Box as="span" display="block" color="teal.600">
              「1人目のエンジニア」に。
            </Box>
          </Heading>
        </motion.div>
        <motion.div {...fadeUp(0.15)}>
          <Text
            marginTop={6}
            fontSize={{ base: 'md', md: 'xl' }}
            color="gray.600"
            maxWidth="680px"
            lineHeight={1.9}
          >
            作って終わりにしない。事業に寄り添い、保守運用も機能追加も共に走り続ける開発パートナーです。
            予算とご要望を深く伺い、AIと共に早く賢く、最適な実現方法をご提案します。
          </Text>
        </motion.div>
        <motion.div {...fadeUp(0.3)}>
          <Flex marginTop={8} gap={4} flexWrap="wrap" alignItems="center">
            <RequirementsHearingChat
              trigger={
                <Button colorPalette="orange" size="lg" paddingX={8}>
                  無料で相談する
                </Button>
              }
            />
            <Link href="/works">
              <Button
                variant="outline"
                colorPalette="teal"
                size="lg"
                paddingX={8}
              >
                実績を見る
              </Button>
            </Link>
          </Flex>
        </motion.div>
        <motion.div {...fadeUp(0.45)}>
          <Flex marginTop={10} gap={3} flexWrap="wrap">
            {TRUST_ITEMS.map((item) => (
              <Flex
                key={item}
                alignItems="center"
                gap={2}
                border="1px solid"
                borderColor="gray.200"
                bg="white"
                borderRadius="full"
                paddingX={4}
                paddingY={2}
                fontSize="sm"
                color="gray.700"
              >
                <Box as="span" color="teal.500">
                  <HiCheckCircle size={18} />
                </Box>
                {item}
              </Flex>
            ))}
          </Flex>
        </motion.div>
      </Box>
    </Box>
  )
}
