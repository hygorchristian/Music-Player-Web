// @ts-nocheck

import React, { memo } from 'react'
import './styles.css'

import { Container } from './styles'

type SpoticonProps = {
  name: String
  color?: String
  size: Number
  hover?: Boolean
  style?: any
}

function Spoticon({
  name,
  color = '#ccc',
  size = 14,
  hover = false,
  ...props
}: SpoticonProps) {
  return (
    <Container
      className={hover ? `spoticon ${name}-bold` : `spoticon ${name}`}
      color={color}
      size={size}
      hover={hover}
      {...props}
    />
  )
}

export default memo(Spoticon)
