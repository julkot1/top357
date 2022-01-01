import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Spotify from './Spotify'
const StyledWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  position: relative;
`
const AlbumCover = styled(motion.img)`
  width: 10rem;
  @media (max-width: 1000px) {
    width: 5rem;
  }
  margin-right: 2rem;
`
const Info = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`

const Attribute = styled.span`
  font-weight: 600;
`
const Content = ({ item, isOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isOpen && (
          <StyledWrapper>
            <Spotify url={item.spotify} />
            <AlbumCover src="https://ecsmedia.pl/c/unknown-pleasures-b-iext74212049.jpg" />
            <Info>
              <p>
                <Attribute>tytuł:</Attribute> {item.title}
              </p>
              <p>
                <Attribute>zespół:</Attribute> {item.artists}
              </p>
              <p>
                <Attribute>rok wydania:</Attribute> {item.releaseDate}
              </p>
            </Info>
          </StyledWrapper>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default Content
