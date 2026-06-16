import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  IconButton,
  Input,
  Portal,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { RiRobot2Line } from 'react-icons/ri'

// お問い合わせフォーム（Contact セクションに埋め込まれているものと同一）
const FORM_BASE_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScUfiliW6HuYU2DBAsL10V3K6XOzlaG_PSJuGW2vY9tfguXuw/viewform?usp=pp_url'

// ヒアリング項目（質問する順番 / 各項目の Google Form entry ID）
type Question = {
  key: string
  entry: string
  question: string
  placeholder: string
  validate?: (value: string) => string | null // エラー文を返したら再入力
}

const QUESTIONS: Question[] = [
  {
    key: 'content',
    entry: 'entry.1382734710',
    question: 'まずはご相談内容を簡潔にご記入ください。',
    placeholder: '例）採用サイトのリニューアルを検討しています',
  },
  {
    key: 'name',
    entry: 'entry.1504840186',
    question: 'ありがとうございます！お名前を教えてください。',
    placeholder: '例）山田 太郎',
  },
  {
    key: 'email',
    entry: 'entry.192342326',
    question: 'ご連絡先のメールアドレスを教えてください。',
    placeholder: '例）example@example.com',
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? null
        : 'メールアドレスの形式が正しくないようです。もう一度ご入力ください。',
  },
  {
    key: 'company',
    entry: 'entry.1602362956',
    question:
      '最後に、会社名・屋号を教えてください。（個人の場合は「個人」で大丈夫です）',
    placeholder: '例）株式会社IY-Tech',
  },
]

const GREETING =
  'こんにちは！IY-Tech のお問い合わせアシスタントです🤖\n4つほど質問させていただきますね。'

type Message = {
  role: 'bot' | 'user'
  text: string
}

const initialMessages = (): Message[] => [
  { role: 'bot', text: GREETING },
  { role: 'bot', text: QUESTIONS[0].question },
]

type Props = {
  onOpen?: () => void
}

export default function RequirementsHearingChat({ onOpen }: Props) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [stepIndex, setStepIndex] = useState(0)
  const [input, setInput] = useState('')
  const [done, setDone] = useState(false)
  const [typing, setTyping] = useState(false)
  const [formUrl, setFormUrl] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const reset = () => {
    setMessages(initialMessages())
    setAnswers({})
    setStepIndex(0)
    setInput('')
    setDone(false)
    setTyping(false)
    setFormUrl('')
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, typing])

  const buildFormUrl = (allAnswers: Record<string, string>) => {
    const params = QUESTIONS.map(
      (q) => `${q.entry}=${encodeURIComponent(allAnswers[q.key] ?? '')}`,
    ).join('&')
    return `${FORM_BASE_URL}&${params}`
  }

  const handleSend = () => {
    const value = input.trim()
    if (value === '' || done || typing) return

    const current = QUESTIONS[stepIndex]

    // ユーザーの発言を表示
    setMessages((prev) => [...prev, { role: 'user', text: value }])
    setInput('')

    // バリデーション（メールアドレス等）。NG なら同じ質問のまま再入力を促す
    const error = current.validate?.(value)
    if (error) {
      setTyping(true)
      window.setTimeout(() => {
        setTyping(false)
        setMessages((prev) => [...prev, { role: 'bot', text: error }])
      }, 700)
      return
    }

    const nextAnswers = { ...answers, [current.key]: value }
    setAnswers(nextAnswers)

    const isLast = stepIndex === QUESTIONS.length - 1
    setTyping(true)

    // AI が返答しているような「入力中」演出
    window.setTimeout(() => {
      setTyping(false)
      if (isLast) {
        setFormUrl(buildFormUrl(nextAnswers))
        setDone(true)
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            text: 'ありがとうございます！ヒアリングは以上です。\n下のボタンからフォームを開くと、ご入力いただいた内容が反映されています。最終確認のうえ送信をお願いいたします。',
          },
        ])
      } else {
        setStepIndex((i) => i + 1)
        setMessages((prev) => [
          ...prev,
          { role: 'bot', text: QUESTIONS[stepIndex + 1].question },
        ])
      }
    }, 900)
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => {
        setOpen(e.open)
        if (e.open) {
          onOpen?.()
        } else {
          reset()
        }
      }}
      placement="center"
    >
      <Dialog.Trigger asChild>
        <Button
          bg="orange.400"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          px={6}
          borderRadius="full"
          _hover={{ bg: 'orange.500' }}
        >
          要件ヒアリング
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="420px"
            w="90vw"
            color="gray.800"
            overflow="hidden"
            borderRadius="2xl"
          >
            {/* ヘッダー */}
            <Flex align="center" gap={3} bg="teal.500" color="white" px={5} py={4}>
              <Flex
                align="center"
                justify="center"
                boxSize="36px"
                bg="whiteAlpha.300"
                borderRadius="full"
              >
                <RiRobot2Line size={20} />
              </Flex>
              <Box>
                <Text fontWeight="bold" lineHeight={1.2}>
                  お問い合わせアシスタント
                </Text>
              </Box>
            </Flex>

            {/* メッセージ一覧 */}
            <Box
              ref={scrollRef}
              px={4}
              py={4}
              bg="gray.50"
              h="360px"
              overflowY="auto"
            >
              <Stack gap={3}>
                {messages.map((m, i) => (
                  <Flex
                    key={i}
                    justify={m.role === 'user' ? 'flex-end' : 'flex-start'}
                  >
                    <Box
                      maxW="80%"
                      px={4}
                      py={2}
                      borderRadius="lg"
                      whiteSpace="pre-wrap"
                      fontSize="sm"
                      bg={m.role === 'user' ? 'orange.400' : 'white'}
                      color={m.role === 'user' ? 'white' : 'gray.800'}
                      borderWidth={m.role === 'user' ? 0 : '1px'}
                      borderColor="gray.200"
                      boxShadow="sm"
                    >
                      {m.text}
                    </Box>
                  </Flex>
                ))}
                {typing && (
                  <Flex justify="flex-start">
                    <Box
                      px={4}
                      py={2}
                      borderRadius="lg"
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.200"
                    >
                      <Spinner size="sm" color="teal.500" />
                    </Box>
                  </Flex>
                )}
                {done && formUrl && (
                  <Flex justify="flex-start">
                    <Button asChild colorPalette="teal" size="sm">
                      <a
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        フォームを開く
                      </a>
                    </Button>
                  </Flex>
                )}
              </Stack>
            </Box>

            {/* 入力エリア */}
            <Flex
              gap={2}
              p={3}
              borderTopWidth="1px"
              borderColor="gray.200"
              bg="white"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  done ? 'ヒアリング完了' : QUESTIONS[stepIndex].placeholder
                }
                disabled={done}
                borderRadius="full"
                bg="gray.50"
              />
              <IconButton
                aria-label="送信"
                onClick={handleSend}
                disabled={done || input.trim() === ''}
                bg="orange.400"
                color="white"
                borderRadius="full"
                _hover={{ bg: 'orange.500' }}
              >
                <FiSend />
              </IconButton>
            </Flex>

            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                color="white"
                pos="absolute"
                top={3}
                right={3}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
