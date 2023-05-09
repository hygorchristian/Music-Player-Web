// @ts-nocheck

import styled from 'styled-components'

export const Container = styled.i`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color || 'white'};
`
