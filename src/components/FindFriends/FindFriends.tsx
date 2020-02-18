import React, { memo } from 'react'

import { Container } from './styles'
import { useTabletMode } from '~/hooks'

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
        <h2>See what your friends are playing</h2>
        <button>
          <span className="label">find friends</span>
        </button>
      </div>
    </Container>
  )
}

export default memo(FindFriends)
