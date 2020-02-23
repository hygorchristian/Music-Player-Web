// @ts-nocheck
import React, { memo, useEffect } from 'react'

import { Container, Thumb, Track } from './styles'
import { useDispatch } from 'react-redux'
import { AppActions } from '~/store/ducks/app'
import { useLocation } from 'react-router-dom'

function Scroll (props) {
  const dispatch = useDispatch()
  const location = useLocation()

  const handleScroll = (val) => {
    dispatch(AppActions.setScrollTop(val.scrollTop))
  }

  useEffect(() => {
    dispatch(AppActions.setScrollTop(0))
  }, [location])

  return <Container
    onScrollFrame={handleScroll}
    renderThumbVertical={(rest) => <Thumb {...rest} />}
    renderTrackVertical={(rest) => <Track {...rest} />}
    {...props}
  />
}

export default memo(Scroll)
