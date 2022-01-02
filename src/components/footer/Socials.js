import React from 'react'
import styled from 'styled-components'
import SocialItem from './SocialItem'

const StyledWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li {
    display: inline;
    margin: 0 1rem;
  }
`
const Author = styled.li`
  @media (max-width: 800px) {
    display: none !important;
  }
`
const Socials = () => {
  return (
    <StyledWrapper>
      <Author>Julian Kotłowski</Author>
      <SocialItem
        imgSrc="./images/github.png"
        link="https://github.com/julkot1"
      />
      <SocialItem
        imgSrc="./images/twitter.svg"
        link="https://twitter.com/j_kotlowski"
      />
    </StyledWrapper>
  )
}

export default Socials
