import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

import { FaEnvelope } from 'react-icons/fa'
import { FaLine, FaXTwitter } from 'react-icons/fa6'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      marginTop={'50px'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>
          © {new Date().getFullYear()} Yosuke Inoue /{' '}
          <Link href="/policy" textDecoration={'underline'}>
            プライバシーポリシー
          </Link>
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'X'} href={'https://x.com/inoue2002'}>
            <FaXTwitter />
          </SocialButton>
          <SocialButton
            label={'Mail'}
            href={'mailto:inoueyosuke2002@gmail.com'}
          >
            <FaEnvelope />
          </SocialButton>
          {/* <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/yoooookan_/'}
          >
            <FaInstagram />
          </SocialButton> */}
          <SocialButton label={'line'} href={'https://lin.ee/MIqkbLL'}>
            <FaLine />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
