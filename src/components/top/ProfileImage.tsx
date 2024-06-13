import Image from 'next/image'

export default function Profile() {
  return (
    <div>
      <Image
        src="/images/profile.webp"
        alt="profile image"
        width={300}
        height={300}
        style={{ borderRadius: '50%' }}
        title="プロフィール画像"
      />
    </div>
  )
}
