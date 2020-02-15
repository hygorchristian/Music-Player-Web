import React from 'react'

import { Container } from './styles'
import { useTabletMode } from '~/hooks'

type FindFriendsProps = {

}

function FindFriends (props: FindFriendsProps) {
  const { isTablet } = useTabletMode()

  if (isTablet) {
    return null
  }

  return <Container />
}

export default FindFriends
