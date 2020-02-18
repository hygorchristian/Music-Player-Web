// @ts-nocheck

import React, { useState } from 'react'

import { Container } from './styles'
import { ReactSVG } from 'react-svg'
import Spoticon from '~/components/Spoticon'

type ItemMainMenuProps = {
  selected: Boolean,
  icon: String,
  label: String,
  width: Number,
  height: Number
}

function ItemMainMenu (props: ItemMainMenuProps) {
  const { selected, icon, label, width, height, ...rest } = props
  const [hover, setHover] = useState(false)

  return (
    <Container
      className={selected && 'selected'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {selected && <div className="indicator"></div>}
      <div className="icon">
        {(hover || selected) ? (
          <Spoticon name={`${icon}-solid`} color="red" size={24} />
        ) : (
          <Spoticon name={icon} color="red" size={24} />
        )}
      </div>
      <span className={`label ${selected && 'selected'}`}>{label}</span>
    </Container>
  )
}

export default ItemMainMenu
