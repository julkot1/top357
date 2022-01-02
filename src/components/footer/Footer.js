import React from 'react'
import styled from 'styled-components'
import Socials from './Socials'
const FooterTitle = styled.p`
  padding: 0;
`
const StyledFooter = styled.footer`
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Footer = () => {
  return (
    <StyledFooter>
      <FooterTitle>Nieoficjalna lista topu 357</FooterTitle>
      <Socials />
    </StyledFooter>
  )
}

export default Footer
