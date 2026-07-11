import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePresentationChartLine,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

const VALUES = [
  {
    icon: HiOutlineMagnifyingGlass,
    title: '深く聴く',
    description:
      '事業・業務・予算を深く伺い、課題の解像度を上げるところから始めます。',
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: '最適を提案する',
    description:
      '投資対効果まで描いた上で、実現方法をご提案します。「作らない」提案も選択肢です。',
  },
  {
    icon: HiOutlineUserGroup,
    title: '共に走り続ける',
    description:
      'リリース後の保守運用・機能追加まで、事業の変化に合わせて伴走します。',
  },
]

export default function Philosophy() {
  return (
    <SectionShell
      label="Philosophy"
      title="「作れます」だけでは、事業は前に進まない。"
    >
      <Reveal>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.600"
          lineHeight={2}
          maxWidth="760px"
        >
          エンジニアリングは、業界の知識と経営の視点が合わさって、はじめて価値になります。
          だからIY
          Techは、「何を作るか」からお客様と一緒に考えます。アプリ開発は、課題を解決するための手段のひとつ。
          専門特化の技術力を土台に、事業そのものに向き合うことが私たちの仕事です。
        </Text>
      </Reveal>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={6}
        marginTop={{ base: 10, md: 14 }}
      >
        {VALUES.map((value, index) => (
          <Reveal key={value.title} delay={index * 0.1}>
            <Box
              bg="gray.50"
              borderRadius="2xl"
              padding={8}
              height="100%"
              transition="transform 0.25s ease, box-shadow 0.25s ease"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
            >
              <Flex
                width="52px"
                height="52px"
                borderRadius="full"
                bg="teal.500"
                color="white"
                alignItems="center"
                justifyContent="center"
              >
                <value.icon size={26} />
              </Flex>
              <Text
                fontWeight="extraBold"
                fontSize="xl"
                color="gray.900"
                marginTop={5}
              >
                {value.title}
              </Text>
              <Text marginTop={3} color="gray.600" lineHeight={1.9}>
                {value.description}
              </Text>
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </SectionShell>
  )
}
