// @ts-nocheck

import React, { useState } from 'react'

import { Container } from './styles'
import { ReactSVG } from 'react-svg'
import { ClickAwayListener } from '@material-ui/core'
import Switch from '~/components/Switch'
import Spoticon from '~/components/Spoticon'

type SearchBarProps = {

}

function SearchBar (props: SearchBarProps) {
  const [filterFocus, setFilterFocus] = useState(false)

  return (
    <Container>
      <ClickAwayListener onClickAway={() => setFilterFocus(false)}>
        <div
          className={`filter ${filterFocus && 'focus'}`}
          onClick={(e) => {
            setFilterFocus(true)
          }}
        >
          <Spoticon name="search" size={16} />
          <input placeholder="Filter" />
          {filterFocus && <button onClick={(e) => {
            e.stopPropagation()
            setFilterFocus(false)
          }
          }>
            <Spoticon name="close" size={16} color="#ffffff" />
          </button>}
        </div>
      </ClickAwayListener>
      <div className="download">
        <div className="label">Download</div>
        <Switch />
      </div>
    </Container>
  )
}

export default SearchBar