import Image from 'next/image'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Profile() {
  const [hover, setHover] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [hoverCount, setHoverCount] = useState(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    if (hoverCount < 3) {
      setHover(true)
      setHoverCount(hoverCount + 1)
    }
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '300px', height: '300px' }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: hover ? 0 : 1 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <Image
          src="/images/profile.webp"
          alt="profile image"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '50%' }}
          title="プロフィール画像"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <Image
          src="/images/profile2.webp"
          alt="profile image"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '50%' }}
          title="プロフィール画像"
        />
      </motion.div>
      {hover && (
        <div
          style={{
            position: 'fixed',
            top: cursorPos.y,
            left: cursorPos.x,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          お気軽にご相談ください！
        </div>
      )}
    </div>
  )
}
