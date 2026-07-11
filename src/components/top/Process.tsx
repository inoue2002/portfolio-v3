import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import {
  HiOutlineArrowPathRoundedSquare,
  HiOutlineChatBubbleLeftRight,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

const STEPS = [
  {
    number: '01',
    icon: HiOutlineChatBubbleLeftRight,
    title: '深く聴く',
    description:
      'まず、事業・業務・予算を深く伺います。課題の解像度が上がるまで、作り始めません。',
  },
  {
    number: '02',
    icon: HiOutlineLightBulb,
    title: '最適な一手を提案',
    description:
      '仮説と投資対効果（ROI）を描き、実現方法をご提案します。「作らない」という提案も選択肢です。',
  },
  {
    number: '03',
    icon: HiOutlineRocketLaunch,
    title: 'AIと共に、早く賢く',
    description:
      '動くプロトタイプを素早く形にし、確かめながら構築します。手戻りを減らし、開発スピードを最大化します。',
  },
  {
    number: '04',
    icon: HiOutlineArrowPathRoundedSquare,
    title: '事業に伴走',
    description:
      'リリースして終わりにしません。保守運用・機能追加・改善まで、事業の成長に合わせて共に走り続けます。',
  },
]

export default function Process() {
  return (
    <SectionShell
      label="Process"
      title="解像度を上げてから、作る。"
      bg="gray.50"
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
        {STEPS.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.1}>
            <Box
              bg="white"
              borderRadius="xl"
              padding={7}
              height="100%"
              boxShadow="sm"
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Box color="teal.500">
                  <step.icon size={32} />
                </Box>
                <Text
                  fontWeight="extraBold"
                  fontSize="2xl"
                  color="teal.100"
                  lineHeight={1}
                >
                  {step.number}
                </Text>
              </Flex>
              <Text
                fontWeight="extraBold"
                fontSize="lg"
                color="gray.900"
                marginTop={4}
              >
                {step.title}
              </Text>
              <Text
                marginTop={3}
                color="gray.600"
                fontSize="sm"
                lineHeight={1.9}
              >
                {step.description}
              </Text>
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </SectionShell>
  )
}
