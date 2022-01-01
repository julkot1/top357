import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Content = ({ item, isOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isOpen && <p>sdsdsdsdsd</p>}
      </motion.div>
    </AnimatePresence>
  )
}

export default Content
