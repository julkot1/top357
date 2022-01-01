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
    spotify: 'url',
    locate: 1,
  },
  {
    title: 'testsd',
    artists: 'qwerty',
    releaseDate: 1979,
    img: 'imgURL',
    spotify: 'url',
    locate: 3,
  },
  {
    title: 'tessdt',
    artists: 'qwerty',
    releaseDate: 1979,
    img: 'imgURL',
    spotify: 'url',
    locate: 2,
  },
  {
    title: 'tessddt',
    artists: 'qwderty',
    releaseDate: 1979,
    img: 'imgURL',
    spotify: 'url',
    locate: 4,
  },
]
const compare = (a, b) => {
  if (a.locate < b.locate) return -1
  return 1
}
const StyledList = styled(motion.ul)`
  list-style: none;
  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
  }
  padding: 0 !important;
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
