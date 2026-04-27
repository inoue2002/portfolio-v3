import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
    '.text-normal': {
      fontWeight: 400,
    },
    '.text-bold': {
      fontWeight: 700,
    },
    '.text-extraBold': {
      fontWeight: 800,
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'LINESeedJP, sans-serif' },
        body: { value: 'LINESeedJP, sans-serif' },
      },
      fontWeights: {
        normal: { value: '400' },
        bold: { value: '700' },
        extraBold: { value: '800' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
