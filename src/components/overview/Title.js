import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
const StyledH1 = styled.h1`
  font-size: 12rem;
  color: black;
  padding: 0;
  margin: 0;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 5rem;
  }
`
const Link = styled.a`
  color: inherit;
  text-decoration: none;
`
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Title = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 200 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="https://top.radio357.pl/" target="_top">
          <StyledH1>Top 357</StyledH1>
        </Link>
      </motion.div>
    </Wrapper>
  )
}

export default Title
