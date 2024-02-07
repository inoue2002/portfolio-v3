import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SpaceProps,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { NewsObj } from 'src/types/news'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

const ArticleList = (props: { news: NewsObj[] }) => {
  const news = props.news
  console.log(news)
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
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
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
              <Heading marginTop="1">
                <a href={i.url} target="_blank" rel="noopener noreferrer">
                  {i.title}
                </a>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg"
              >
                {i.content}
              </Text>
              <HStack
                marginTop="2"
                spacing="2"
                display="flex"
                alignItems="center"
              >
                <Text>—</Text>
                <Text>{new Date(i.date).toLocaleDateString()}</Text>
              </HStack>
            </Box>
          </Box>
        </Container>
      ))}
    </div>
  )
}

export default ArticleList
