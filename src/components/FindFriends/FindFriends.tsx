// @ts-nocheck

import React, { memo } from 'react'

import { Container } from './styles'
import { useTabletMode } from '~/hooks'
import Spoticon from '~/components/Spoticon'

type FindFriendsProps = {

}

function FindFriends (props: FindFriendsProps) {
  const { isTablet } = useTabletMode()

  if (isTablet) {
    return null
  }

  return (
    <Container>
      <div className="ball-lg" />
      <div className="ball-md" />
      <div className="ball-sm" />
      <div className="text">
        <h2>
          <span>Developed with </span>
          <Spoticon name="heart-solid" size={16} color="white" />
          <span> by </span>
          <a href="https://github.com/hygorchristian" target="_blank">Hygor Dias</a>
        </h2>
        <a className="button" href="https://github.com/hygorchristian" target="_blank">
          <span className="label">github</span>
        </a>
        <a className="button" href="https://www.linkedin.com/in/hygor-christian" target="_blank">
          <span className="label">linkedin</span>
        </a>
        <a className="button" href="https://github.com/hygorchristian/Music-Player-Web" target="_blank">
          <span className="label">Source</span>
        </a>
      </div>
    </Container>
  )
}

export default memo(FindFriends)
