import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export const ContactBar: React.FC = () => {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('#contact')
  }

  return (
    <Box width={'100%'} textAlign="center" paddingY={10}>
      <Text fontSize="lg" className='text-bold' marginBottom="1rem">
        ご相談・お見積もり お気軽にお問い合わせください
      </Text>
      <Button colorScheme="teal" onClick={handleContactClick}>
        お問い合わせ
      </Button>
      <Flex justifyContent="center" alignItems="center" marginTop="1rem">
        <Box marginRight="1rem">
          <Image
            src={'/images/send.webp'}
            width={150}
            height={150}
            alt="送信イラスト"
          />
        </Box>
      </Flex>
    </Box>
  )
}
