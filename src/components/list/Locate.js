import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled(motion.div)`
  height: 4rem;
  width: 4rem;
  background-color: ${(props) => props.color};
  font-size: 3rem;
  font-weight: 900;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`
const Locate = ({ locate }) => {
  const color =
    locate === 1
      ? '#D6AF36'
      : locate === 2
      ? '#A7A7AD'
      : locate === 3
      ? '#A77044'
      : '#cacaca'
  return <StyledContainer color={color}>{locate}</StyledContainer>
}

export default Locate
