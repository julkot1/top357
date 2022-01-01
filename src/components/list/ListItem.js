import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import Content from './Content'

const StyledItem = styled(motion.li)`
  list-style: none;
  border-radius: 5px;
  padding: 2rem;
  min-width: 100%;

  box-shadow: 0px 0px 20px -1px #a7a7a7;
  margin: 2rem 0;
`
const ListItem = ({ item: { title, position } }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledItem
      key={title}
      layout
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <motion.div layout>
        {position}. {title}
      </motion.div>
      <Content item="sd" isOpen={isOpen} />
    </StyledItem>
  )
}

export default ListItem
