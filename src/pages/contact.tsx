import { Box, Button } from '@chakra-ui/react'

// @ts-ignore
export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <Box
        mb={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100%"
      >
        <Button
          as="a"
          href="https://lin.ee/MIqkbLL"
          colorScheme="teal"
          mt={20}
          p={4}
          mb={4}
          size="lg"
        >
          LINEで無料相談
        </Button>

        <div
          style={{
            width: '70%',
            margin: '20px 0',
            position: 'relative',
            textAlign: 'center',
            borderBottom: '1px solid #000',
          }}
        >
          <span
            style={{
              backgroundColor: '#fff',
              padding: '0 10px',
              position: 'relative',
              top: '10px',
            }}
          >
            or
          </span>
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScUfiliW6HuYU2DBAsL10V3K6XOzlaG_PSJuGW2vY9tfguXuw/viewform?embedded=true"
          width="640"
          height="1000"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          読み込んでいます…
        </iframe>
        {/* 
        <iframe 
          src="https://form.run/embed/@inoueyosuke--nxukqNdgRidZ6BU675Ux?embed=direct" 
          style={{ width: '70%', height: '1200px', border: 'none' }}
        ></iframe> */}
      </Box>
    </div>
  )
}
