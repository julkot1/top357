import { AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
const items = [
  {
    title: 'testsd',
    artists: 'qwerty',
    releaseDate: 1979,
    img: 'imgURL',
    position: 1,
  },
  {
    title: 'testsd',
    artists: 'qwerty',
    releaseDate: 1979,
    img: 'imgURL',
    position: 3,
  },
  {
    title: 'tessdt',
    artists: 'qwerty',
    releaseDate: 1979,
    img: 'imgURL',
    position: 2,
  },
]
const compare = (a, b) => {
  if (a.position < b.position) return -1
  return 1
}
const StyledList = styled(motion.ul)`
  list-style: none;
  width: 80%;
`
const List = () => {
  return (
    <AnimateSharedLayout>
      <StyledList layout>
        {items.sort(compare).map((item) => (
          <ListItem item={item} />
        ))}
      </StyledList>
    </AnimateSharedLayout>
  )
}

export default List
