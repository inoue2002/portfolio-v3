import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import RequirementsHearingChat from './RequirementsHearingChat'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
]

export default function Header() {
  const router = useRouter()
  const { open, onOpen, onClose } = useDisclosure()

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    router.events.on('routeChangeStart', onClose)
    return () => router.events.off('routeChangeStart', onClose)
  }, [router.events, onClose])

  // オーバーレイ表示中は背景のスクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escキーで閉じる
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={6}
        bg="teal.500"
        color="white"
        role="navigation"
        aria-label="メインナビゲーション"
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <Link href="/">
          <Heading
            as="h1"
            size="2xl"
            letterSpacing={'tighter'}
            _hover={{ color: 'gray.900' }}
            transition="color 1s"
          >
            IY-Tech . work
          </Heading>
        </Link>

        {/* モバイル: ハンバーガー */}
        <Box
          as="button"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          aria-label="メニューを開く"
          aria-expanded={open}
          padding={1}
        >
          <HiOutlineMenu size={26} />
        </Box>

        {/* デスクトップ: ナビゲーション */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          gap="40px"
          role="menu"
          aria-label="ナビゲーションメニュー"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Heading
                fontSize={'2xl'}
                as="b"
                color={
                  router.pathname === item.href ? 'gray.900' : 'whiteAlpha.900'
                }
                role="menuitem"
                aria-current={
                  router.pathname === item.href ? 'page' : undefined
                }
                tabIndex={0}
              >
                {item.label}
              </Heading>
            </Link>
          ))}
          <RequirementsHearingChat />
        </Flex>
      </Flex>

      {/* モバイル: 全画面オーバーレイメニュー */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ position: 'fixed', inset: 0, zIndex: 1100 }}
          >
            <Flex
              direction="column"
              bg="teal.500"
              color="white"
              height="100dvh"
              paddingX={6}
            >
              <Flex
                align="center"
                justify="space-between"
                paddingY={6}
                flexShrink={0}
              >
                <Link href="/" onClick={onClose}>
                  <Heading as="span" size="2xl" letterSpacing={'tighter'}>
                    IY-Tech . work
                  </Heading>
                </Link>
                <Box
                  as="button"
                  onClick={onClose}
                  aria-label="メニューを閉じる"
                  padding={1}
                >
                  <HiOutlineX size={26} />
                </Box>
              </Flex>
              <Flex
                direction="column"
                flexGrow={1}
                justifyContent="center"
                gap={8}
                paddingBottom={16}
                role="menu"
                aria-label="ナビゲーションメニュー"
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 + index * 0.07,
                      ease: 'easeOut',
                    }}
                  >
                    <Link href={item.href} onClick={onClose}>
                      <Heading
                        fontSize="3xl"
                        as="b"
                        color={
                          router.pathname === item.href ? 'gray.900' : 'white'
                        }
                        role="menuitem"
                        aria-current={
                          router.pathname === item.href ? 'page' : undefined
                        }
                      >
                        {item.label}
                      </Heading>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.32, ease: 'easeOut' }}
                >
                  <RequirementsHearingChat onOpen={onClose} />
                </motion.div>
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
