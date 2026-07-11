import { Box, Flex, Text } from '@chakra-ui/react'
import ProfileImage from './ProfileImage'
import Reveal from './Reveal'
import SectionShell from './SectionShell'
import SnsIcons from './SnsIcons'

const BIRTH_DATE = new Date('2002-04-12')
const calcAge = (birth: Date, today = new Date()): number => {
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}
const age = calcAge(BIRTH_DATE)

const PARAGRAPHS = [
  '僕がものづくりを始めた原点は、小学生の頃のダンボール工作でした。当時の代表作は「お金を入れないと動かない」ガチャガチャ。その後高校時代にプログラミングに出会い、同級生向けに作ったサービスは、気づけば学年の8割が使うものになっていました。「こうしてほしい」と言われるたびに直し、そのたびに喜ばれる——あの体験が、今も仕事の原点にあります。',
  'その後、スタートアップの「1人目エンジニア」として事業を立ち上げる開発も、大きなエンジニア組織での開発も、両方を経験してきました。そこで確信したのは、エンジニアリングだけでは価値を届けきれない、ということです。業界の知識と経営の視点、そしてエンジニアリング。この3つが合わさったとき、システムははじめて事業の資産になります。',
  'だから、IY Techは作って終わりにしません。作ったものが多くの人に使われ、お客様の会社・事業・ユーザーの三方に喜ばれ、資産として育っていくところまで伴走します。これからは、ITとまだ距離のある業界にこそ、テクノロジーの専門家として寄り添っていきたい。面白い企画にコミットして、社会にデプロイしていく。IY Techは、そういう存在でありたいと思っています。',
]

export default function Story() {
  return (
    <SectionShell label="Story" title="なぜ、やるのか。">
      <Flex
        gap={{ base: 10, md: 16 }}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Reveal>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap={4}
            flexShrink={0}
          >
            <ProfileImage />
            <Box textAlign="center">
              <Text fontWeight="extraBold" fontSize="lg" color="gray.900">
                代表 井上陽介
              </Text>
              <Text color="gray.500" fontSize="sm">
                ようかん / 2002年生まれ{age}歳
              </Text>
            </Box>
            <SnsIcons />
          </Flex>
        </Reveal>
        <Box>
          {PARAGRAPHS.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Text
                color="gray.700"
                lineHeight={2.1}
                marginBottom={6}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {paragraph}
              </Text>
            </Reveal>
          ))}
        </Box>
      </Flex>
    </SectionShell>
  )
}
