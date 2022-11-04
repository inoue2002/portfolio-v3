import { Box, Text } from '@chakra-ui/react'

export default function Policy() {
  return (
    <Box
      marginLeft={{ md: '20%', base: '10%' }}
      marginRight={{ md: '20%', base: '10%' }}
      marginTop={'40vh'}
      height="100vh"
    >
      <Text fontSize={'2xl'} display={'block'} as="b">
        Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
        このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
        この規約に関して、詳しくはGoogleアナリティクス利用規約をご確認下さい。
      </Text>
    </Box>
  )
}
