import { Box, Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionShellProps {
  label: string
  title: string
  bg?: string
  children: ReactNode
}

const SectionShell = ({
  label,
  title,
  bg = 'white',
  children,
}: SectionShellProps) => (
  <Box as="section" bg={bg} paddingY={{ base: 16, md: 24 }}>
    <Box maxWidth="1100px" marginX="auto" paddingX={{ base: 5, md: 8 }}>
      <Reveal>
        <Text
          color="teal.600"
          fontWeight="bold"
          letterSpacing="0.15em"
          textTransform="uppercase"
          fontSize="sm"
        >
          {label}
        </Text>
        <Heading
          as="h2"
          fontWeight="extraBold"
          fontSize={{ base: '1.6rem', md: '2.4rem' }}
          lineHeight={1.4}
          color="gray.900"
          marginTop={2}
          marginBottom={{ base: 8, md: 12 }}
        >
          {title}
        </Heading>
      </Reveal>
      {children}
    </Box>
  </Box>
)

export default SectionShell
