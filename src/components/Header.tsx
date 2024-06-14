import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Link href="/"
        onClick={() =>{
          onClose()
        }}
        >
          <Heading
            as="h1"
            size="lg"
            letterSpacing={'tighter'}
            _hover={{ color: 'gray.900' }}
            transition="color 1s"
          >
            IY-Tech . work
          </Heading>
        </Link>
      </Flex>
      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        spacing="40px"
        mt={{ base: 4, md: 0 }}
      >
        <Link href="/" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={router.pathname === '/' ? 'gray.900' : 'whiteAlpha.900'}
          >
            Me
          </Heading>
        </Link>
        <Link href="/works" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={router.pathname === '/works' ? 'gray.900' : 'whiteAlpha.900'}
          >
            Works
          </Heading>
        </Link>
        <Link href="/news" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={router.pathname === '/news' ? 'gray.900' : 'whiteAlpha.900'}
          >
            News
          </Heading>
        </Link>
        <Link href="/#contact" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={
              router.pathname === '/#contact' ? 'gray.900' : 'whiteAlpha.900'
            }
          >
            Contact
          </Heading>
        </Link>
      </Stack>
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      ></Box>
    </Flex>
  )
}
