import { useTheme } from 'next-themes'

export type ColorMode = 'light' | 'dark'

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const colorMode = (resolvedTheme as ColorMode) ?? 'light'
  const toggleColorMode = () => {
    setTheme(colorMode === 'light' ? 'dark' : 'light')
  }
  return { colorMode, setColorMode: setTheme, toggleColorMode }
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}
