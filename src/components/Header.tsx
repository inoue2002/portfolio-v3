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
      role="navigation"
      aria-label="メインナビゲーション"
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
      <Box 
        display={{ base: 'block', md: 'none' }} 
        onClick={handleToggle}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
          }
        }}
      >
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
        role="menu"
        aria-label="ナビゲーションメニュー"
      >
        <Link href="/" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={router.pathname === '/' ? 'gray.900' : 'whiteAlpha.900'}
            role="menuitem"
            aria-current={router.pathname === '/' ? 'page' : undefined}
            tabIndex={0}
          >
            Me
          </Heading>
        </Link>
        <Link href="/services" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={router.pathname === '/services' ? 'gray.900' : 'whiteAlpha.900'}
            role="menuitem"
            aria-current={router.pathname === '/services' ? 'page' : undefined}
            tabIndex={0}
          >
            Services
          </Heading>
        </Link>
        <Link href="/news" passHref>
          <Heading
            fontSize={'2xl'}
            as="b"
            display={{ base: 'block' }}
            color={router.pathname === '/news' ? 'gray.900' : 'whiteAlpha.900'}
            role="menuitem"
            aria-current={router.pathname === '/news' ? 'page' : undefined}
            tabIndex={0}
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
            role="menuitem"
            aria-current={router.pathname === '/#contact' ? 'page' : undefined}
            tabIndex={0}
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
