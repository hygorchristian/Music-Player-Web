import React from 'react'
import { Switch as _Switch } from '@material-ui/core'

import { Container } from './styles'

type SwitchProps = {

}

function Switch (props: SwitchProps) {
  return (
    <Container>
      <_Switch {...props} />
    </Container>
  )
}

export default Switch
