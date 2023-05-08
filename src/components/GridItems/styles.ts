// @ts-nocheck

import styled from 'styled-components'

export const Container = styled.div<{ itemsPerRow: number }>`
  width: ${({ width }) => width}px;
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(${({ itemsPerRow }) => itemsPerRow}, 1fr);
  grid-gap: 24px;
`
