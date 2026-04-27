import {
  Box,
  type BoxProps,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { NewsObj } from 'src/types/news'
import { useColorModeValue } from 'src/components/ui/color-mode'

interface IBlogTags {
  tags: Array<string>
  marginTop?: BoxProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack gap={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag.Root size={'md'} variant="solid" colorPalette="orange" key={tag}>
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        )
      })}
    </HStack>
  )
}

const ArticleList = (props: { news: NewsObj[] }) => {
  const news = props.news
  console.log(news)
  const dotGradient = useColorModeValue(
    'radial(orange.600 1px, transparent 1px)',
    'radial(orange.300 1px, transparent 1px)',
  )
  const textColor = useColorModeValue('gray.700', 'gray.200')
  return (
    <div>
      {news.map((i: NewsObj) => (
        <Container maxW={'7xl'} p="12" key={i.id}>
          <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%"
              >
                <Link textDecoration="none">
                  <Image
                    borderRadius="lg"
                    src={i.imageUrl}
                    alt={i.title}
                    objectFit="contain"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 600px"
                    loading="lazy"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={dotGradient}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}
            >
              <BlogTags tags={i.tags} />
              <Heading marginTop="1" id={`news-title-${i.id}`}>
                <a
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby={`news-content-${i.id}`}
                  tabIndex={0}
                >
                  {i.title}
                </a>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                color={textColor}
                fontSize="lg"
                id={`news-content-${i.id}`}
                aria-labelledby={`news-title-${i.id}`}
              >
                {i.content}
              </Text>
              <HStack
                marginTop="2"
                gap="2"
                display="flex"
                alignItems="center"
              >
                <Text>—</Text>
                <Text>{new Date(i.date).toLocaleDateString('ja-JP')}</Text>
              </HStack>
            </Box>
          </Box>
        </Container>
      ))}
    </div>
  )
}

export default ArticleList
