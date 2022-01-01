import React from 'react'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
  }
  *{
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  a{
    color: initial;
    text-decoration: none;
  }
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}

export default Layout
