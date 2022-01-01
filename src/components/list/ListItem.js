import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import Content from './Content'
import Locate from './Locate'
import SongTitle from './SongTitle'

const StyledItem = styled(motion.li)`
  list-style: none;
  border-radius: 5px;
  padding: 1rem;
  min-width: 100%;
  box-shadow: 0px 0px 20px -1px #a7a7a7;
  margin: 2rem 0;
`
const Info = styled(motion.div)`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledItem
      key={item.title}
      layout
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <Info layout>
        <Locate locate={item.locate} />
        <SongTitle title={item.title} artists={item.artists} />
      </Info>
      <Content item={item} isOpen={isOpen} />
    </StyledItem>
  )
}

export default ListItem
