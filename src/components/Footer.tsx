import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

import { FaEnvelope } from 'react-icons/fa'
import { FaLine, FaXTwitter } from 'react-icons/fa6'
import { useColorModeValue } from 'src/components/ui/color-mode'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  const bg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const bgHover = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  return (
    <chakra.a
      bg={bg}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{ bg: bgHover }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.a>
  )
}

export default function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const color = useColorModeValue('gray.700', 'gray.200')
  return (
    <Box marginTop={'50px'} bg={bg} color={color}>
      <Container maxW={'6xl'} py={4}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
        <Text>
          © {new Date().getFullYear()} Yosuke Inoue /{' '}
          <Link href="/policy" textDecoration={'underline'}>
            プライバシーポリシー
          </Link>
        </Text>
        <Stack direction={'row'} gap={6}>
          <SocialButton label={'X'} href={'https://x.com/inoue2002'}>
            <FaXTwitter />
          </SocialButton>
          <SocialButton
            label={'Mail'}
            href={'mailto:inoueyosuke2002@gmail.com'}
          >
            <FaEnvelope />
          </SocialButton>
          <SocialButton label={'line'} href={'https://lin.ee/MIqkbLL'}>
            <FaLine />
          </SocialButton>
        </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
