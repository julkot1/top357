import React from 'react'
import styled from 'styled-components'
const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
  background-color: white;
`
const Link = styled.a`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

const SocialItem = ({ imgSrc, link }) => {
  return (
    <li>
      <Link href={link}>
        <SocialIcon src={imgSrc}></SocialIcon>
      </Link>
    </li>
  )
}

export default SocialItem
