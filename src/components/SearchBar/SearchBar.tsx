// @ts-nocheck

import React, { useState } from 'react'

import { ClickAwayListener } from '@material-ui/core'
import Spoticon from '~/components/Spoticon'
import Switch from '~/components/Switch'
import { Container } from './styles'

type SearchBarProps = {
  noDownload: boolean
}

function SearchBar({ noDownload, ...props }: SearchBarProps) {
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
          {filterFocus && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFilterFocus(false)
              }}
            >
              <Spoticon name="close" size={16} color="#ffffff" />
            </button>
          )}
        </div>
      </ClickAwayListener>
      {!noDownload && (
        <div className="download">
          <div className="label">Download</div>
          <Switch />
        </div>
      )}
    </Container>
  )
}

export default SearchBar
