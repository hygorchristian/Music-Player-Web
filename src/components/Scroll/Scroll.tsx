// @ts-nocheck
import React from 'react'

import { Container, Thumb } from './styles'
import { useDispatch } from 'react-redux'
import { AppActions } from '~/store/ducks/app'

function Scroll (props) {
  const dispatch = useDispatch()

  const handleScroll = (val) => {
    dispatch(AppActions.setScrollTop(val.scrollTop))
  }

  return <Container
    onScrollFrame={handleScroll}
    renderThumbVertical={(rest) => <Thumb {...rest} />}
    {...props}
  />
}

export default Scroll
