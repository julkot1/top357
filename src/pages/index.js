import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import TopList from '../components/list/TopList'
import Overview from '../components/overview/Overview'
const StyledMain = styled.main``

const IndexPage = () => {
  return (
    <Layout>
      <StyledMain>
        <title>Home Page</title>
        <Overview />
        <TopList />
      </StyledMain>
    </Layout>
  )
}

export default IndexPage
