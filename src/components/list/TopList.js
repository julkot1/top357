import React from 'react'
import styled from 'styled-components'
import List from './List'
const StyledWrapper = styled.section`
  margin: 10rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopList = () => {
  return (
    <StyledWrapper id="top">
      <List />
    </StyledWrapper>
  )
}

export default TopList
