import React, { useState } from 'react'

import { Container } from './styles'
import { ReactSVG } from 'react-svg'
import { ClickAwayListener } from '@material-ui/core'
import Switch from '~/components/Switch'

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
          <ReactSVG src="/icons/spotify/search.svg" />
          <input placeholder="Filter" />
          {filterFocus && <button onClick={(e) => {
            e.stopPropagation()
            setFilterFocus(false)
          }
          }><ReactSVG src="/icons/spotify/x.svg" /></button>}
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
