import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

/**
 * ServiceBoxコンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.src - 画像のソースURL
 * @param {string} props.alt - 画像の代替テキスト
 * @param {string} props.title - サービスのタイトル
 * @param {string} props.description - サービスの説明
 * @returns {JSX.Element} - サービスボックスのJSX要素
 */
const ServiceBox = ({
  src,
  alt,
  title,
  description,
}: {
  src: string
  alt: string
  title: string
  description: string
}) => {
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="300px"
      marginBottom="2rem"
    >
      <Box
        width={150}
        height={150}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={150} 
          height={150}
          sizes="150px"
          loading="lazy"
        />
      </Box>
      <Heading as="h3" size="md" marginTop="1rem">
        {title}
      </Heading>
      <Text marginTop="0.5rem">{description}</Text>
    </Box>
  )
}

export default ServiceBox
