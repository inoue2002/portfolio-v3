import { Button, Flex, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import newsData from '../../data/news.json'
import WorkCard from '../WorkCard'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

// トップに載せる実績（表示順）: 同窓会LINK → tadoru → TEQSセミナー
const HIGHLIGHT_IDS = [5, 6, 7]

const highlights = newsData
  .filter((item) => HIGHLIGHT_IDS.includes(item.id))
  .sort((a, b) => HIGHLIGHT_IDS.indexOf(a.id) - HIGHLIGHT_IDS.indexOf(b.id))

export default function WorksHighlight() {
  return (
    <SectionShell label="Works" title="開発実績" bg="gray.50">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {highlights.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.1}>
            <WorkCard item={item} />
          </Reveal>
        ))}
      </SimpleGrid>
      <Reveal>
        <Flex justifyContent="center" marginTop={{ base: 10, md: 14 }}>
          <Link href="/works">
            <Button variant="outline" colorPalette="teal" size="lg">
              すべての実績を見る
            </Button>
          </Link>
        </Flex>
      </Reveal>
    </SectionShell>
  )
}
