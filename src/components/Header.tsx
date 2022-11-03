import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
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
        <Link href="/">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            Youkan.me
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
        <Link href="/" title={'top'}>
          <Heading fontSize={'2xl'} as="b" display={{ base: 'block' }}>
            About
          </Heading>
        </Link>
        <Link href={'news'} title={'link'}>
          <Heading fontSize={'2xl'} as="b">
            News
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
