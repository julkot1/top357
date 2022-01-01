import React from 'react'
import styled from 'styled-components'
import ScrollDown from './ScrollDown'
import Title from './Title'
const StyledWrapper = styled.section`
  height: 100vh;
  margin: 0;
  position: relative;
`
const Overview = () => {
  return (
    <StyledWrapper>
      <Title />
      <ScrollDown />
    </StyledWrapper>
  )
}

export default Overview
