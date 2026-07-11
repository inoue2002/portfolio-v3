import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import Image from 'next/image'

export interface WorkCardItem {
  id: number
  title: string
  imageUrl: string
  date: string | Date
  tags: string[]
  content: string
  url: string
}

// トップ/Worksページ共通の事例カード
const WorkCard = ({ item }: { item: WorkCardItem }) => (
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
        <Text fontWeight="extraBold" color="gray.900" lineHeight={1.6}>
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
        <Text marginTop={4} color="gray.400" fontSize="xs">
          {new Date(item.date).toLocaleDateString('ja-JP')}
        </Text>
      </Box>
    </Box>
  </a>
)

export default WorkCard
