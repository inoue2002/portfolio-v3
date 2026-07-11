import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import workHistory from '../../data/workHistory.json'
import AboutTable from '../AboutTable'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

const ACTIVITIES = [
  {
    label: 'LINE社認定 LINE API Expert',
    href: 'https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e746',
  },
  {
    label: '未踏ジュニア2020 スーパークリエータ',
    href: 'https://critica.uno/',
  },
  {
    label: 'すごくなりたいがくせいぐるーぷ 代表',
    href: 'https://sugokunaritai.dev/',
  },
]

export default function CompanySection() {
  return (
    <SectionShell label="About" title="事業概要" bg="gray.50">
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }}>
        <Reveal>
          <Box bg="white" borderRadius="xl" padding={{ base: 4, md: 8 }}>
            <AboutTable />
            <Text
              fontWeight="extraBold"
              color="gray.900"
              marginTop={10}
              marginBottom={3}
            >
              認定・活動
            </Text>
            {ACTIVITIES.map((activity) => (
              <Box key={activity.label} marginTop={2}>
                <a
                  href={activity.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    color="teal.600"
                    textDecoration="underline"
                    textUnderlineOffset="4px"
                    _hover={{ color: 'teal.700' }}
                  >
                    {activity.label}
                  </Text>
                </a>
              </Box>
            ))}
          </Box>
        </Reveal>
        <Reveal delay={0.1}>
          <Box bg="white" borderRadius="xl" padding={{ base: 6, md: 8 }}>
            <Text fontWeight="extraBold" color="gray.900" marginBottom={5}>
              これまでの取引・所属
            </Text>
            {workHistory.map((item, index) => (
              <Box
                key={index}
                paddingY={3}
                borderBottom="1px solid"
                borderBottomColor="gray.100"
              >
                <Text fontWeight="bold" color="gray.800">
                  {item.company}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  {item.period}（{item.description}）
                </Text>
              </Box>
            ))}
          </Box>
        </Reveal>
      </SimpleGrid>
    </SectionShell>
  )
}
