import { Image } from '@chakra-ui/react'

export default function Profile() {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="profile image "
        boxSize='300px'
        borderRadius="full"
      />
    </div>
  )
}
