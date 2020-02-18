// @ts-nocheck

import React from 'react'

import { Container } from './styles'

type SpoticonProps = {
  name: String,
  color: String,
  size: Number,
  hover: Boolean
}

function Spoticon ({ name, color, size, hover }: SpoticonProps) {
  return (
    <Container
      className={hover ? `${name}-bold` : name}
      color={color}
      size={size}
      hover={hover}
    />
  )
}

export default Spoticon
