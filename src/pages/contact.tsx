import { Box, Button } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'

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
          LINEでのお問い合わせ
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

        <div style={{ position: 'relative', width: '100%', height: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div
            id="loadingMessage"
            style={{
              position: 'absolute',
              textAlign: 'center',
              zIndex: 1,
              top: '20px',
            }}
          >
            <Spinner />
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScUfiliW6HuYU2DBAsL10V3K6XOzlaG_PSJuGW2vY9tfguXuw/viewform?embedded=true"
            width="640"
            height="1000"
            style={{ position: 'relative' }}
            onLoad={() => {
              const loadingMessage = document.getElementById('loadingMessage');
              if (loadingMessage) {
                loadingMessage.style.display = 'none';
              }
            }}
          ></iframe>
        </div>
      </Box>
    </div>
  )
}
