import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
`
const Spotify = ({ url }) => {
  return (
    <a href="https://google.com" target="_top">
      <StyledWrapper>
        <img src="./images/spotify_icon.png" />
      </StyledWrapper>
    </a>
  )
}

export default Spotify
