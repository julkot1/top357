import React from 'react'
import styled from 'styled-components'
import List from './List'
const StyledWrapper = styled.section`
  padding: 0 !important;
  width: 100%;
  min-height: 200vh;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const TopList = () => {
  return (
    <StyledWrapper id="top">
      <List />
    </StyledWrapper>
  )
}

export default TopList
