import { Box, Button, Flex, Tag, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { SimpleGrid } from '@chakra-ui/react'
import newsData from '../../data/news.json'
import Reveal from './Reveal'
import SectionShell from './SectionShell'

const highlights = [...newsData]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)

export default function WorksHighlight() {
  return (
    <SectionShell label="Works" title="事業と共に、作ってきた。" bg="gray.50">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {highlights.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.1}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Box
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="sm"
                height="100%"
                transition="transform 0.25s ease, box-shadow 0.25s ease"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
              >
                <Box position="relative" aspectRatio={16 / 9}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </Box>
                <Box padding={6}>
                  <Flex gap={2} flexWrap="wrap" marginBottom={3}>
                    {item.tags.map((tag) => (
                      <Tag.Root key={tag} colorPalette="teal" size="sm">
                        <Tag.Label>{tag}</Tag.Label>
                      </Tag.Root>
                    ))}
                  </Flex>
                  <Text
                    fontWeight="extraBold"
                    color="gray.900"
                    lineHeight={1.6}
                  >
                    {item.title}
                  </Text>
                  <Text
                    marginTop={3}
                    color="gray.600"
                    fontSize="sm"
                    lineHeight={1.8}
                    lineClamp={3}
                  >
                    {item.content}
                  </Text>
                </Box>
              </Box>
            </a>
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
