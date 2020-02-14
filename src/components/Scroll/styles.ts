// @ts-nocheck

import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

export const Container = styled(Scrollbars)`
  width: 100%;
  height: 100%;
  flex: 1;
`

export const Thumb = styled.div`
  width: 8px !important;
  border-radius: 4px !important;
  background-color: #535353;
  right: 4px;
  
  &:hover, &:active{
   background-color: #B3B3B3;
  }
`
