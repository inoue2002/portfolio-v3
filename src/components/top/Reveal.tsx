import { motion } from 'motion/react'
import { ReactNode } from 'react'

// スクロール連動のフェードイン。ページ全体で共通のリズムを作る
const Reveal = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default Reveal
