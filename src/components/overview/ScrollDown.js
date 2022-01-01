import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  cursor: pointer;
`
const ScrollDown = () => {
  return (
    <StyledWrapper>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.25,
            duration: 1,
          },
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            type: 'spring',
          },
        }}
      >
        <a href="#top">
          <svg
            width="5rem"
            height="5rem"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <line x1="8" y1="12" x2="12" y2="16" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="16" y1="12" x2="12" y2="16" />
          </svg>
        </a>
      </motion.div>
    </StyledWrapper>
  )
}

export default ScrollDown
