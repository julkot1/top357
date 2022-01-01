import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled(motion.div)`
  margin: auto;
`
const StyledHeader = styled.h3`
  font-size: 1.5rem;
`
const SongTitle = ({ title, artists }) => {
  return (
    <StyledTitle>
      <StyledHeader>
        {title} - {artists}
      </StyledHeader>
    </StyledTitle>
  )
}

export default SongTitle
