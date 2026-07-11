/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // 旧 /news を /works へ恒久リダイレクト（既存リンク・SEO対策）
      {
        source: '/news',
        destination: '/works',
        permanent: true,
      },
      // /services は /works に統合（既存リンク・SEO対策）
      {
        source: '/services',
        destination: '/works',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
