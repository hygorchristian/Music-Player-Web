// @ts-nocheck

import styled from 'styled-components'

export const Container = styled.i`
  font-family: 'spoticon' !important;
  font-style: normal;
  font-smooth: auto;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color || 'white'};   
`
