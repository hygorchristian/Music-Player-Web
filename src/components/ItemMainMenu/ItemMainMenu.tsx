// @ts-nocheck

import React from 'react'

import { Container } from './styles'
import { ReactSVG } from 'react-svg'

type ItemMainMenuProps = {
  selected: Boolean,
  icon: String,
  label: String,
  width: Number,
  height: Number
}

function ItemMainMenu (props: ItemMainMenuProps) {
  const { selected, icon, label, width, height, ...rest } = props

  return (
    <Container {...rest} className={selected && 'selected'}>
      {selected && <div className="indicator"></div>}
      <div className="icon">
        {selected ? (
          <ReactSVG style={{ height, width }} src={`/icons/spotify/${icon}-selected.svg`} />
        ) : (
          <ReactSVG style={{ height, width }} src={`/icons/spotify/${icon}.svg`} />
        )}
      </div>
      <span className={`label ${selected && 'selected'}`}>{label}</span>
    </Container>
  )
}

export default ItemMainMenu
