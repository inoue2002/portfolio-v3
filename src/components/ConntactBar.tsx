import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ContactBar: React.FC = () => {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('#contact')
  }

  return (
    <Box width={'100%'} textAlign="center" paddingY={10}>
      <Text fontSize="lg" className="text-bold" marginBottom="1rem" paddingX={4}>
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

export default ContactBar
